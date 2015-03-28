## Setting up

```shell
npm install
```

Create a `settings.js` file in the `src/lib` folder, with the following code, while replacing the dummy values below with some *actual* values:

```
let settings = {
  apiKey: '{MongoLab API key here}'
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