

## Setup

As normal, run `npm install`. This will install everything that comes pre-installed with the template.

You'll also need to add one more npm item. So run `npm install extract-text-webpack-plugin --save` as well. After this you can add the necessary changes to `webpack.config.js`. For those changes, look in the diff for this commit to see them.

## Running the Project

To execute webpack in watch mode.

```
npm run-script webpack
```

To run Node.

```
npm run-script server
```

## Using the CSS file

With these changes, the CSS file will be written to disk in the public folder with the name `style.css`. With this you'll need to link in the CSS file manually, just like you had to do up until we started using Webpack.

## Multi-Page Sites

For those of you who will want a site that has multiple pages but only one contains React, a few notes.

* If you want other static html pages, create them and link to them.
* Pages that have React on them will need to include `app.bundle.js` because that's the output of your webpack build process (just like index.html normally does), other pages won't.
* If you don't want the index page to have react on it, just move that code to another page or rename index to what you want the other page to be and create a new index page.
