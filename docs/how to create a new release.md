# How to create a new release

## What's a tag?

References to a specific point in our repository's history, a
**particular commit**. They're store in Git itself and on Github.

Create e tag with:

```bash
git tag v1.0.0 && git push origin v1.0.0
```




## What's a release?

It's a GitHub feature that users typically interact with when downloading a
piece of software. Every release is associated with a tag, but not otherwise.

Additionally, it comes with especial **metadata** like descriptions, changelog
and release notes; you can **attach assets** and it generates download links for
the **source code**.




## Creating a new release

Go to repository's GitHub and then click on **Create a new release**. Select a tag, provide the release title and notes, attach assets and click **Publish release**.

### Attaching assets

For now, since the application is so small, I’m only providing the zipped **Pandinhe.app** directly. A `.dmg` feels unnecessary.

I noticed a size difference when generating **Pandinhe.app** with `npm run make`
versus `npm run dist:mac`. Because of that, I’m using `npm run make`, since it
produces a smaller file.

After that, **Pandinhe.zip** will be available at `./out/make/zip/darwin/arm64/Pandinhe-darwin-arm64-<VERSION>.zip`