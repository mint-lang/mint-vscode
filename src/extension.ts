import * as cmd from "./commands";
import * as vscode from "vscode";

import { LanguageClient } from 'vscode-languageclient';
import { MintFormattingProvider } from "./formatter";

export async function activate(
  context: vscode.ExtensionContext,
  isRestart: boolean = false
): Promise<void> {
  // Set context activated
  vscode.commands.executeCommand("setContext", "mint:isActivated", true);

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

  // Create the language client
	const client = new LanguageClient(
		'mint-language-server',
		'Mint Language Server',
		{
      command: '/home/gdot/.bin/mint-dev',
      args: ['ls'],
    },
		{
      documentSelector: [
        {scheme: 'file', language: 'mint'},
      ]
    }
	);

	// Start the client
  context.subscriptions.push(client.start());
}

export async function deactivate(isRestart: boolean = false): Promise<void> {
  /// Set context deactivated
  vscode.commands.executeCommand("setContext", "mint:isActivated", false);
}
