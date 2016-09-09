const { app, BrowserWindow } = require('electron');

module.exports = class TimelineWindow {
  start() {
    app.on('ready', () => {
      this.createWindow();
    });
  }

  createWindow() {
    const window = new BrowserWindow({
      x: 0,
      y: 0,
      width: 400,
      height: 800
    });

    window.loadURL(`file://${__dirname}/../index.html`);
  }
};
