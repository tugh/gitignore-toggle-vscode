import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const toggleCommand = vscode.commands.registerCommand('gitignore-toggle.toggle', () => {
        const config = vscode.workspace.getConfiguration('explorer');
        const currentValue = config.get<boolean>('excludeGitIgnore', false);
        const newValue = !currentValue;
        
        config.update('excludeGitIgnore', newValue, vscode.ConfigurationTarget.Global)
            .then(() => {
                const message = newValue 
                    ? 'Files&folders from .gitignore are hidden in the explorer'
                    : 'Files&folders from .gitignore are shown in the explorer';
                vscode.window.showInformationMessage(message);
            }, (error) => {
                vscode.window.showErrorMessage(`Failed to toggle git ignore exclusion: ${error}`);
            });
    });

    context.subscriptions.push(toggleCommand);
}

export function deactivate() {}

