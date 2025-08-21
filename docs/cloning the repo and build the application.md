# Cloning the repo and build the application

You can also always clone the repository and build the application from source.




## Run the app locally

The most straightforward way to run the application. It directly runs the source code without creating a packaged application, which means:

- **Faster startup** for testing changes
- **Immediate feedback** during development
- **Console output** is directly visible
- No need to **rebuild** for every change

### Clone the repository

  ```bash
  git clone https://github.com/lsfernandes92/panda_tray.git
  cd panda_tray
  ```

### Install dependencies

  ```bash
  npm install
  ```

### Run the app

  ```bash
  npm start
  ```




## Create distributable packages

This method involves creating a standalone application package. While it takes more steps, it allows you to:

- Verify how the **app behaves** when installed
- **Distribute** the app to other users
- Run the app like any other **MacOS application**

### Clone the repository

  ```bash
  git clone https://github.com/lsfernandes92/panda_tray.git
  cd panda_tray
  ```

### Install dependencies

  ```bash
  npm install
  ```

See [distributing the application](./docs/distributing%20the%20application.md).

See [how to start the app from the terminal](./docs/how%20to%20start%20the%20app%20from%20the%20terminal.md).