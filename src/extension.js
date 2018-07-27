const vscode = require('vscode'),
  childProcess = require('child_process');

// Global vars

// Status bar
const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);

// Show message in StatusBar
function checkStatusBar(text, delay) {
    statusBar.text = text;
    statusBar.show();
    setTimeout(() => statusBar.hide(), delay);
}

function activate(context) {
  const disposable = vscode.commands.registerCommand('extension.aformat', function () {
    // Get current editor
    const activeTextEditor = vscode.window.activeTextEditor,
      // Current document
      document = activeTextEditor.document,
      // Path to current file
      currentFilePath = document.fileName,
      // Get extension configuration
      configuration = vscode.workspace.getConfiguration('astyleFormat'),
      // Config: show message box about formatting
      showMessages = configuration['show-message'],
      // Where is .astylerc file
      astylerc = configuration.astylerc,
      // Where is astyle program
      astyle = configuration.astyle,
      // Timeout for message box
      delay = configuration.messageTimeout,
      // Format function
      aformatFunc = () => {
          let command = astyle + ' ';
          if (astylerc) {
              command += ' --option=' + astylerc;
          }
          command += currentFilePath;
          childProcess.exec(command, (error, out, err) => {
              checkStatusBar('$(pencil) Formatted', delay);
              if (showMessages) {
                  vscode.window.showInformationMessage(
                      error ? 'Some error while formatting: ' + err : 'Formatted!'
                  );
              }
          });
      };
      // If document is editing now
      if (document.isDirty) {
          // Then save the document and make format
          document.save().then(() => {
              aformatFunc();
          });
      } else {
          // Also just formatting
          aformatFunc();
      }
  });
  context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }

exports.deactivate = deactivate;