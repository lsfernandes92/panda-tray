# Distributing the application

There are two options for packaging and distributing the application:

> [!IMPORTANT]
> The preceding commands are run using Node 18

> [!NOTE]
> Although the preceding commands successfully generated the MacOS package, its functionality on Windows and Linux remains unexplored.




## Using third-party tool

This is a community-maintained alternative tool for packaging. The following command is configured to create distributables for MacOS, Windows, and Linux operating systems.

Run the following on the console:

```shell
npm run dist
```

You can also build for a specific operating system only (linux|mac|windows):

```shell
npm run dist:<OPERATING_SYSTEM>
```

This will create a `dist` folder on the root of your project. There you will find the installable.




## Using Electron Forge

Electron Forge build packages for the platform you're running it on. If you specifically want to build for multiple platforms, you might want to [use third-party tool](#using-third-party-tool).

Run the following on the console:

```shell
npm run make
```

This will create a `out` folder on the root of your project. There you will find the installables for each OS.




## Starting the application

See [how to start the app from the terminal](./docs/how%20to%20start%20the%20app%20from%20the%20terminal.md)




## References

* [Distributing Apps With Electron Forge](https://www.electronjs.org/docs/latest/tutorial/forge-overview)
* [Packaging your application](https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging)
* [electron-builder home page](https://www.electron.build/)