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

> [!IMPORTANT]
> The preceding commands are run using Node 18

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

> [!IMPORTANT]
> The preceding commands are run using Node 18

  ```bash
  npm install
  ```

### Distributing the application

See [distributing the application](./distributing%20the%20application.md).

### How to start the application from the terminal

See [how to start the app from the terminal](./how%20to%20start%20the%20app%20from%20the%20terminal.md).