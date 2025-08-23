const { app, Tray, Menu, nativeImage, BrowserWindow, shell } = require("electron")
const path = require("path");

let tray = null;
let aboutWindow = null;

const icons = [
  path.join(__dirname, "./assets/sprawling_panda/sprawling_panda0.png"),
  path.join(__dirname, "./assets/sprawling_panda/sprawling_panda1.png"),
  path.join(__dirname, "./assets/sprawling_panda/sprawling_panda2.png"),
];

let currentFrame = 0;

function updateTrayIcon() {
  let currentFrameImage = nativeImage.createFromPath(icons[currentFrame]).resize({ width: 32, height: 32 });

  tray.setImage(currentFrameImage);
  currentFrame = (currentFrame + 1) % icons.length;
}

function createAboutWindow() {
  // Prevent multiple about windows
  if (aboutWindow) {
    aboutWindow.focus();
    return;
  }

  aboutWindow = new BrowserWindow({
    width: 400,
    height: 400,
    resizable: false,
    minimizable: false,
    // maximizable: false,
    // fullscreenable: false,
    titleBarStyle: 'hidden',
    title: "About Pandinhe",
    icon: path.join(__dirname, './assets/icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  aboutWindow.loadFile(path.join(__dirname, './src/about.html'));

  aboutWindow.on('close', (event) => { 
    event.preventDefault();
    aboutWindow.hide();
    aboutWindow = null; 
  });
  aboutWindow.on('closed', () => { aboutWindow = null; });

  aboutWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  app.dock.hide();

  tray = new Tray(icons[0]);

  setInterval(updateTrayIcon, 200);

  const contextMenu = Menu.buildFromTemplate([
    { label: "ℹ︎  About...", click: createAboutWindow },
    { type: "separator" },
    { label: "⏻  Quit", click: () => { app.quit(); } }
  ]);

  tray.setToolTip("Pandinhe")
  tray.setContextMenu(contextMenu)
})