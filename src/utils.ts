import fs = require("fs");
import path = require("path");
import os = require("os");
import vscode = require("vscode");

/**
 * Returns temporary file path of edited document.
 */
export function getDirtyFile(document: vscode.TextDocument): string {
  var dirtyFilePath = path.normalize(
    path.join(os.tmpdir(), "vscodemintdirty.mint")
  );
  fs.writeFileSync(dirtyFilePath, document.getText());
  return dirtyFilePath;
}

export function createAndShowOutputWindow(): vscode.OutputChannel {
  var channel = vscode.window.createOutputChannel("mint");
  channel.show();
  return channel;
}
/**
 * Run a mint subcommand as a VSCode task, ie `mint format`
 *
 * @param subcommand The mint subcommand to run, ie `format`
 * @param description The VSCode description to show, ie "Format all files"
 */
export function runMintCommandAsTask(
  subcommand: string,
  description: string
): Thenable<vscode.TaskExecution> {
  return vscode.tasks.executeTask(
    new vscode.Task(
      { command: "", type: "" },
      vscode.TaskScope.Workspace,
      description,
      "mint",
      new vscode.ShellExecution(`mint ${subcommand}`)
    )
  );
}

/**
 * Wait for a number of seconds
 *
 * @param seconds The number of seconds to wait before completing
 */
export function promiseSeconds(seconds: number): Thenable<void> {
  return new Promise((res) => {
    setTimeout(res, 1000 * seconds);
  });
}
