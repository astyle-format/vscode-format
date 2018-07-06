const vscode = require('vscode'),
  childProcess = require('child_process');

const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);

// Функция для отображения данных в StatusBar
function checkStatusBar(text) {
    statusBar.text = text;
    statusBar.show();
    setTimeout(() => statusBar.hide(), 2000);
}

function activate(context) {
  const disposable = vscode.commands.registerCommand('extension.aformat', function () {
    // Получаем текущий редактор
    const activeTextEditor = vscode.window.activeTextEditor,
      // Текущий документ
      document = activeTextEditor.document,
      // Путь до текущего файла, с которым работаем
      currentFilePath = document.fileName,
      // Показывать ли сообщения
      configuration = vscode.workspace.getConfiguration('astyleFormat'),
      // Показывать ли сообщения о форматировании
      showMessages = configuration['show-message'],
      // Нахождение файла .astylerc
      astylerc = configuration.astylerc,
      // Расположение программы astyle
      astyle = configuration.astyle,
      // Функция, для выполнения форматирования
      aformatFunc = () => {
          let command = astyle + ' ';
          if (astylerc) {
              command += ' --option=' + astylerc;
          }
          command += currentFilePath;
          childProcess.exec(command, (error, out, err) => {
              checkStatusBar('$(pencil) Formatted');
              if (showMessages) {
                  vscode.window.showInformationMessage(
                      error ? 'Some error while formatting: ' + err : 'Formatted!'
                  );
              }
          });
      };
      // Если есть какие-либо изменения
      if (document.isDirty) {
          // То сохраняем документ и форматируем
          document.save().then(() => {
              aformatFunc();
          });
      } else {
          // Если изменений нет, то просто форматируем
          aformatFunc();
      }
  });
  context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;
