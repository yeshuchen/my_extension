import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "helloWorld" is now active!');
	
	let disposable = vscode.commands.registerCommand('my_extension.helloWorld', () => {
		vscode.window.showInformationMessage('卷王监视器v1.0开发中...作者很垃圾不会TypeScript,在学了在学了');
	});
	
	context.subscriptions.push(disposable);
	let juansee = vscode.commands.registerCommand("my_extension.watch", () => {
		vscode.window.showInformationMessage("___卷了这些题:_________");
	});
	context.subscriptions.push(juansee);
}

export function deactivate() {}