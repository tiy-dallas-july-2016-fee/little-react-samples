

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
