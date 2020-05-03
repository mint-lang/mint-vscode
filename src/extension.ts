import * as vscode from "vscode";
import { MintFormattingProvider } from "./formatter";

// Register formatting provider
vscode.languages.registerDocumentFormattingEditProvider(
  "mint",
  new MintFormattingProvider()
);
