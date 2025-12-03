# gitignore-toggle-vscode

A VS Code extension that toggles the `explorer.excludeGitIgnore` setting. 

Adds a command you can bind to any key. Defaults to `Ctrl`+`Alt`+`A`.

## Building
Build the extension using Docker:

```bash
./build-extension
```

This will:
- Use the `node:20-alpine` Docker image
- Mount your project directory into the container
- Install dependencies, compile TypeScript, and package the extension
- Output the `.vsix` file to the `out/` directory

## Installing
Install the extension in VS Code:
```bash
code --install-extension out/*.vsix
```

## Setting a Custom Keybinding
Add following with your desired keybinding to `keybinding.json`.
   ```json
   {
     "command": "gitignore-toggle.toggle",
     "key": "ctrl+shift+g"
   }
   ```
4. Save the file (`Ctrl+S` / `Cmd+S`)

