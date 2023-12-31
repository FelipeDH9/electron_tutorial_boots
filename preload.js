const { contextBridge, ipcRenderer } = require('electron')


// window.addEventListener('DOMContentLoaded', () => {
//     const replaceText = (selector, text) => {
//         const element = document.getElementById(selector)
//         if (element) element.innerText = text
//     }

//     for (const dependecy of ['chrome', 'node', 'electron']) {
//         replaceText(`${dependecy}-version`, process.versions[dependecy])
//     }
// })


contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping')
  // we can also expose variables, not just functions
})