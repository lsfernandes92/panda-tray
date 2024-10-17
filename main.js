const { app, Tray, Menu } = require('electron')
const path = require('path');

let tray = null;

const icons = [
  path.join(__dirname, './assets/panda-sleeping00.png'),
  path.join(__dirname, './assets/panda-sleeping01.png'),
  path.join(__dirname, './assets/panda-sleeping02.png'),
  path.join(__dirname, './assets/panda-sleeping03.png'),
  path.join(__dirname, './assets/panda-sleeping04.png'),
];

let currentFrame = 0;

function updateTrayIcon() {
  tray.setImage(icons[currentFrame]);
  currentFrame = (currentFrame + 1) % icons.length;
}

app.whenReady().then(() => {
  tray = new Tray(icons[0]);

  setInterval(updateTrayIcon, 200);

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Stop animation', click: () => { /* Do something */ } },
    { type: 'separator' },
    { label: 'Quit', click: () => { app.quit(); } }
  ]);

  tray.setToolTip('Animated panda.')
  tray.setContextMenu(contextMenu)
})