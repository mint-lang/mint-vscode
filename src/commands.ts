import cp = require("child_process");
import vscode = require("vscode");
import { createAndShowOutputWindow } from "./utils";

export function mintBuildCommand() {
  cp.spawnSync("mint", ["build"], {
    cwd: vscode.workspace.rootPath,
  });

  createAndShowOutputWindow().appendLine("Built ./dist for production.");
}

export function mintInstallCommand() {
  cp.spawnSync("mint", ["install"], {
    cwd: vscode.workspace.rootPath,
  });

  createAndShowOutputWindow().appendLine("Installed all dependencies.");
}

export function mintFormatAllCommand() {
  cp.spawnSync("mint", ["format"], {
    cwd: vscode.workspace.rootPath,
  });

  createAndShowOutputWindow().appendLine("Formatted all files.");
}
