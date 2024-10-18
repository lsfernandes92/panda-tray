const { app, Tray, Menu, nativeImage } = require("electron")
const path = require("path");

let tray = null;

const icons = [
  path.join(__dirname, "./assets/panda-sleeping0.png"),
  path.join(__dirname, "./assets/panda-sleeping1.png"),
  path.join(__dirname, "./assets/panda-sleeping2.png"),
  path.join(__dirname, "./assets/panda-sleeping3.png"),
];

let currentFrame = 0;

function updateTrayIcon() {
  let currentFrameImage = nativeImage.createFromPath(icons[currentFrame]).resize({ width: 32, height: 32 });

  tray.setImage(currentFrameImage);
  currentFrame = (currentFrame + 1) % icons.length;
}

app.whenReady().then(() => {
  tray = new Tray(icons[0]);

  setInterval(updateTrayIcon, 200);

  const contextMenu = Menu.buildFromTemplate([
    { type: "separator" },
    { label: "Quit", click: () => { app.quit(); } }
  ]);

  tray.setToolTip("Animated panda.")
  tray.setContextMenu(contextMenu)
})