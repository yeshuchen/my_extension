import * as vscode from 'vscode';
import * as child_process from 'child_process';
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "helloWorld" is now active!');
	
	let disposable = vscode.commands.registerCommand('my_extension.helloWorld', () => {
		vscode.window.showInformationMessage('卷王监视器v1.0开发中...作者很垃圾不会TypeScript,在学了在学了');
	});
	
	context.subscriptions.push(disposable);
	let juansee = vscode.commands.registerCommand('my_extension.watch', () => {

		// 创建一个新的窗格
		const panel = vscode.window.createWebviewPanel(
		  'watchProblems', // 标识符
		  '卷题列表', // 标题
		  vscode.ViewColumn.Two, // 显示位置
		  {} // 配置选项
		);
		// 在窗格中输出Hello!
		panel.webview.html = `<h1>Hello!</h1>`;
    });
	context.subscriptions.push(juansee);
}

export function deactivate() {}