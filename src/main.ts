import { app, BrowserWindow } from 'electron';
const path = require('node:path')

class Main {
  mainWindow: BrowserWindow | null = null;


  init() {
    app.on('ready', this.createWindow);
    app.on('window-all-closed', this.onWindowAllClosed);
  }

  createWindow = () => {
    this.mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true
      }
    });

    this.mainWindow.loadFile('index.html');
    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });
  }

  onWindowAllClosed = () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  }
}

const main = new Main();
main.init();