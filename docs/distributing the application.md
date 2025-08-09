# Distributing the application

There are two options for packaging and distributing the application:

> [!IMPORTANT]
> The preceding commands are run using Node 18




## Using Electron Forge

This command successfully generated the MacOS distribution but haven't explored Windows and Linux packaging yet.

Run the following on the console:

```shell
npm run make
```




## Using third-party tool

This is a community-maintained alternative tool for packaging. The above command is configured to create distributables for MacOS, Windows, and Linux operating systems.

Run the following on the console:

```shell
npm run dist
```

You can also build for MacOS only:

```shell
npm run dist:mac
```

This will create a `dist` folder on the root of your project. There you will find the installables for each OS specified in your npm script's dist command.




## References

* [Distributing Apps With Electron Forge](https://www.electronjs.org/docs/latest/tutorial/forge-overview)
* [Packaging your application](https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging)
* [electron-builder home page](https://www.electron.build/)