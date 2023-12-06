const { app, BrowserWindow } = require('electron')
const path = require('node:path')

// função que vai criar a janela e vai mostrar o código index.html
const createWindow = () => {
    const win = new BrowserWindow({
        with:800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('src/index.html')
}


app.whenReady().then(() => {
    createWindow()

    // macOS, abrir janela se não tiver nenhuma aberta
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// fechar app quando todas as janelas forem fechadas, Windows e Linux
app.on('window-all-closed', () => {
    if (process.platform !== "darwin") app.quit()
})