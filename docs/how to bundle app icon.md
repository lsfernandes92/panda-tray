# How to bundle application icon

## For MacOS

To change the application's global icon you need an `.icns` file. Once you have your icon file the new icon should appear in finder, dock, system dialogs, application switcher (⌘+Tab).




### Creating `.icns` file

First, create a directory to hold the different icon sizes:

```bash
mkdir assets/icon.iconset
```

> [!TIP]
> If you have a `.svg` icon, convert to `.png` first. I found it more easier to
> just use [this online tool](https://www.svg2png.com/) to do the conversion.

Then create different sizes of your icon. Run the following in your terminal:

```bash
magick icon.png -filter Lanczos -resize 16x16 icon.iconset/icon_16x16.png
magick icon.png -filter Lanczos -resize 32x32 icon.iconset/icon_16x16@2x.png
magick icon.png -filter Lanczos -resize 32x32 icon.iconset/icon_32x32.png
magick icon.png -filter Lanczos -resize 64x64 icon.iconset/icon_32x32@2x.png
magick icon.png -filter Lanczos -resize 128x128 icon.iconset/icon_128x128.png
magick icon.png -filter Lanczos -resize 256x256 icon.iconset/icon_128x128@2x.png
magick icon.png -filter Lanczos -resize 256x256 icon.iconset/icon_256x256.png
magick icon.png -filter Lanczos -resize 512x512 icon.iconset/icon_256x256@2x.png
magick icon.png -filter Lanczos -resize 512x512 icon.iconset/icon_512x512.png
magick icon.png -filter Lanczos -resize 1024x1024 icon.iconset/icon_512x512@2x.png
```

Then convert the `iconset` to `.icns` with:

```bash
iconutil -c icns icon.iconset
```

Finally, rebuild your application.

```bash
npm run make
```




## FAQ

### Why multiple icon resolutions?

That's because MacOS requires multiple resolutions of your icon for Retina/HiDPI displays. This requires two versions of each icon size, the standard resolution and the retina/HiDPI version.




## References

- [svg2png](https://www.svg2png.com/)