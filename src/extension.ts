import * as vscode from "vscode";
import { MintFormattingProvider } from "./formatter";
import {
  mintBuildCommand,
  mintInstallCommand,
  mintFormatAllCommand,
} from "./commands";

// Register formatting provider
vscode.languages.registerDocumentFormattingEditProvider(
  "mint",
  new MintFormattingProvider()
);

// Register commands
vscode.commands.registerCommand("mint.build", mintBuildCommand);
vscode.commands.registerCommand("mint.install", mintInstallCommand);
vscode.commands.registerCommand("mint.formatAll", mintFormatAllCommand);
