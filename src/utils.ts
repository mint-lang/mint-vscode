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
