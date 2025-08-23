# How I do convert `.gif` into png's files?

To display an animated GIF in the menu bar, I initially converted the GIF to a
series of PNG images, one for each frame of the animation. I used the following
command in the console:

```shell
magick sprawling_panda.gif sprawling_panda%d.png
```

To enhance image quality, I subsequently optimized each generated PNG file using
the following command:

```shell
# Use brace expansion for specific numbers
pngquant --quality=65-80 sprawling_panda{0,1,2}.png --ext=.png -f
```

or

```shell
# Use a wildcard pattern
pngquant --quality=65-80 sprawling_panda*.png --ext=.png -f
```