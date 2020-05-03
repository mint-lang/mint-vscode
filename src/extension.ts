import * as vscode from "vscode";
import { MintFormattingProvider } from "./formatter";
import * as cmd from "./commands";

// Register formatting provider
vscode.languages.registerDocumentFormattingEditProvider(
  "mint",
  new MintFormattingProvider()
);

// Register commands
vscode.commands.registerCommand("mint.build", cmd.mintBuildCommand);
vscode.commands.registerCommand("mint.compile", cmd.mintCompileCommand);
vscode.commands.registerCommand("mint.docs", cmd.mintDocsCommand);
vscode.commands.registerCommand("mint.formatAll", cmd.mintFormatAllCommand);
vscode.commands.registerCommand("mint.init", cmd.mintInitCommand);
vscode.commands.registerCommand("mint.install", cmd.mintInstallCommand);
vscode.commands.registerCommand("mint.loc", cmd.mintCountLinesCommand);
vscode.commands.registerCommand("mint.start", cmd.mintStartCommand);
vscode.commands.registerCommand("mint.test", cmd.mintTestCommand);
vscode.commands.registerCommand("mint.version", cmd.mintVersionCommand);
