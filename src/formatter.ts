import vscode = require("vscode");
import cp = require("child_process");
import fs = require("fs");

import { getDirtyFile } from "./utils";

export class MintFormattingProvider
  implements vscode.DocumentFormattingEditProvider {
  public provideDocumentFormattingEdits(
    document: vscode.TextDocument,
    options: vscode.FormattingOptions,
    token: vscode.CancellationToken
  ): vscode.TextEdit[] | Thenable<vscode.TextEdit[]> {
    return new Promise((resolve, reject) => {
      let file = getDirtyFile(document);

      let res = cp.spawnSync("mint", ["format", file], {
        cwd: vscode.workspace.rootPath,
      });

      if (res.status !== 0) {
        reject(res.error);
      } else {
        if (!fs.existsSync(file)) {
          reject(file + " file not found");
        } else {
          let content = fs.readFileSync(file, "utf-8");
          let range = document.validateRange(
            new vscode.Range(
              new vscode.Position(0, 0),
              new vscode.Position(1000000, 1000000)
            )
          );
          resolve([vscode.TextEdit.replace(range, content)]);
        }
      }
    });
  }
}
