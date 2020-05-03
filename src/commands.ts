import { runMintCommandAsTask } from "./utils";

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

// export function mintInitCommand() {
// // TODO: dialog to ask for folder and project name
//   runMintCommandAsTask("init", "Init a new project");
// }

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
