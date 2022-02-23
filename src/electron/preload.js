// Preload (Isolated World)
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'api1',
  {
    doThing: (args) => ipcRenderer.send('do-a-thing', args)
  }
)