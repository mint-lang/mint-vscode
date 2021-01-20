import * as cmd from "./commands";
import * as vscode from "vscode";
import * as fs from "fs";

import { LanguageClient } from 'vscode-languageclient';
import { MintFormattingProvider } from "./formatter";

let client: LanguageClient

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

  const binaryLocation : string = vscode.workspace.getConfiguration('mint.languageServer').get('location')

  if (binaryLocation) {
    if (fs.existsSync(binaryLocation)) {
      // Create the language client
      client = new LanguageClient(
        'mint_Language_Server',
        'Mint Language Server',
        {
          command: binaryLocation,
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
    } else {
      vscode.window.showErrorMessage('Mint binary not found! You specified ' + binaryLocation);
    }
  }
}

export async function deactivate(isRestart: boolean = false): Promise<void> {
  // Set context deactivated
  vscode.commands.executeCommand("setContext", "mint:isActivated", false);
  
  // Stop the language server client. 
  if (client) { 
    client.stop() 
  }
}
