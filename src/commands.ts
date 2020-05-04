import { runMintCommandAsTask, promiseSeconds } from "./utils";
import * as vscode from "vscode";

export function mintBuildCommand() {
  runMintCommandAsTask("build", "Build production bundle");
}

export function mintCompileCommand() {
  runMintCommandAsTask(
    "compile",
    "Compile project into single JavaScript file"
  );
}

export function mintDocsCommand() {
  runMintCommandAsTask("docs", "Start documentation server");
}

export function mintFormatAllCommand() {
  runMintCommandAsTask("format", "Format all files");
}

export async function mintInitCommand() {
  const projectName = await vscode.window.showInputBox({
    prompt: "Type the name of your project",
    placeHolder: "mint-project",
  });

  const folder = await vscode.window.showOpenDialog({
    canSelectFiles: false,
    canSelectFolders: true,
    canSelectMany: false,
    openLabel: "Create project",
  });

  const newProjectRoot = `${folder[0].path}/${projectName}`;

  await runMintCommandAsTask(`init ${newProjectRoot}`, "Init a new project");

  await promiseSeconds(2);

  await vscode.commands.executeCommand(
    "vscode.openFolder",
    vscode.Uri.file(newProjectRoot)
  );
}

export function mintInstallCommand() {
  runMintCommandAsTask("install", "Install dependencies");
}

export function mintCountLinesCommand() {
  runMintCommandAsTask("loc", "Count lines of code");
}

export function mintStartCommand() {
  runMintCommandAsTask("start", "Start development server");
}

export function mintTestCommand() {
  runMintCommandAsTask("test", "Run tests");
}

export function mintVersionCommand() {
  runMintCommandAsTask("version", "Show current version");
}
