## Design

Currently using "Light Green" as the primary colour palette and "Red" as the secondary palette, from Google's [Material Design spec](http://www.google.com/design/spec/style/color.html#).

## Setting up

```shell
npm install
```

Create a `settings.js` file in the `src/lib` folder, with the following code, while replacing the dummy values below with some *actual* values:

```
let settings = {
  mongolab: {
    APIKey: '{MongoLab API Key here}',
    databaseName: '{Database name here}'
  },
  imgur: {
    clientId: '{imgur client id here}'
  }
};

export default settings;
```

## Running

```shell
npm run develop
```

## Production

```shell
npm run dist
```

## Cleanup

```shell
npm run clean
```

## Notes

If you're developing on Sublime Text, consider installing the Babel syntax highlighting package.