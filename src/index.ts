import * as core from "@actions/core";
import { exec } from "@actions/exec";

async function run(): Promise<void> {
  try {
    const name = core.getInput("who-to-greet");
    core.info(`👋  Hello, ${name}!`);

    // Example: run a shell command
    await exec("echo", [`Hello ${name} from exec()`]);

    const time = new Date().toTimeString();
    core.setOutput("time", time);
    core.notice(`⏰  Set output 'time' = ${time}`);
  } catch (error) {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    core.setFailed((error as any).message);
  }
}

run();
