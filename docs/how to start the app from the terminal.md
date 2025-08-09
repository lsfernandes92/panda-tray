# How to start the app from the terminal

## Starting an application from the terminal in macOS:

> [!NOTE]
> Running the following commands eliminates the need to install the application via GUI, preventing the app from appering on the `Applications` folder, therefore the need of installing and reinstalling each time something changes 👌

```shell
open /path/to/YourApp.app
```

## Starting an Electron app:

```shell
open dist/mac-arm64/PandaTray.app
```

## Starting an Electron app and see the logs:

```shell
./dist/mac-arm64/PandaTray.app/Contents/MacOS/PandaTray 
```