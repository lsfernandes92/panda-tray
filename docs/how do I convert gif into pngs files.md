# How I do convert `.gif` into png's files?

To display an animated GIF in the menu bar, I initially converted the GIF to a
series of PNG images, one for each frame of the animation. I used the following
command in the console:

```shell
convert panda-sleeping.gif panda-sleeping%01d.png
```

To enhance image quality, I subsequently optimized each generated PNG file using
the following command:

```shell
pngquant --quality=65-80 panda-sleeping3.png -o panda-sleeping3.png -f
```