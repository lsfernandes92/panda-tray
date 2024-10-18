# PandaTray

An animated sleeping panda tray icon, built with Electron, that appears on the macOS menu bar.

## Distributing App

There are two options for packaging and distributing the application:

1. The one that uses Electron Forge: Run the `npm run make` command in the console to use Electron Forge for packaging. By using that, I successfully generated the macOS distribution but haven't explored Windows and Linux packaging yet.
2. Using an alternative third-party tool: Run the `npm run dist` in command in the console to use a community-maintained alternative tool for packaging. This command is configured to create distributables for macOS, Windows, and Linux operating systems.

### References

* [Distributing Apps With Electron Forge](https://www.electronjs.org/docs/latest/tutorial/forge-overview)
* [Packaging your application](https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging)
