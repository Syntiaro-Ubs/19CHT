import { spawn } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";
import { setTimeout as delay } from "node:timers/promises";

const isWindows = process.platform === "win32";
const npmCmd = "npm";

let serverProcess = null;
let clientProcess = null;

let isShuttingDown = false;
function shutdown(exitCode = 0) {
  if (isShuttingDown) return;
  isShuttingDown = true;

  for (const child of [clientProcess, serverProcess]) {
    if (!child || child.killed) continue;
    try {
      child.kill("SIGINT");
    } catch {
      try {
        child.kill();
      } catch {
        // Ignore.
      }
    }
  }

  process.exit(exitCode);
}

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

function runNpmScript(cwd, scriptName) {
  // On Windows, `npm` resolves to `npm.cmd`, which requires `shell: true`.
  return spawn(npmCmd, ["run", scriptName], {
    cwd,
    stdio: "inherit",
    shell: isWindows
  });
}

async function canFetchOk(url, timeoutMs = 1000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
      signal: controller.signal
    });
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

async function waitForHealthy(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await canFetchOk(url)) return true;
    await delay(250);
  }
  return false;
}

async function readServerPort(serverDir) {
  try {
    const envPath = path.join(serverDir, ".env");
    const contents = await fs.readFile(envPath, "utf8");
    const match = contents.match(/^\s*PORT\s*=\s*(\d+)\s*$/m);
    if (!match) return 3001;
    const parsed = Number(match[1]);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 3001;
  } catch {
    return 3001;
  }
}

const rootDir = process.cwd();
const serverDir = path.join(rootDir, "server");
const clientDir = path.join(rootDir, "client");

const port = await readServerPort(serverDir);
const healthUrl = `http://localhost:${port}/health`;

serverProcess = runNpmScript(serverDir, "dev");
serverProcess.on("exit", (code) => shutdown(code ?? 0));

const healthy = await waitForHealthy(healthUrl);
if (!healthy) {
  console.warn(
    `Mail server didn't become healthy at ${healthUrl} within the timeout; starting Vite anyway.`
  );
}

clientProcess = runNpmScript(clientDir, "dev");
clientProcess.on("exit", (code) => shutdown(code ?? 0));
