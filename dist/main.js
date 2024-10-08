"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require('node:path');
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        this.mainWindow = null;
        this.createWindow = function () {
            _this.mainWindow = new electron_1.BrowserWindow({
                width: 800,
                height: 600,
                webPreferences: {
                    preload: path.join(__dirname, 'preload.js'),
                    nodeIntegration: true
                }
            });
            _this.mainWindow.loadFile('index.html');
            _this.mainWindow.on('closed', function () {
                _this.mainWindow = null;
            });
        };
        this.onWindowAllClosed = function () {
            if (process.platform !== 'darwin') {
                electron_1.app.quit();
            }
        };
    }
    Main.prototype.init = function () {
        electron_1.app.on('ready', this.createWindow);
        electron_1.app.on('window-all-closed', this.onWindowAllClosed);
    };
    return Main;
}());
var main = new Main();
main.init();
//# sourceMappingURL=main.js.map