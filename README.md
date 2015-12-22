# clappr-smooth-plugin
Microsoft Smooth Streaming support for Clappr player.

## How to use

Import smooth.min.js

```javascript
<script type="text/javascript" src="smooth.min.js"></script>
```
and create Clappr Player adding the external plugin:

```javascript
var player = new Clappr.Player({
    source: "http://your.domain/Manifest",
    parentId: "#player-wrapper",
    plugins: {'playback': [Smooth]},
});
```

## Development

Install dependencies:

```
npm install
```

Local environment:

```
node_modules/webpack/bin/webpack.js --watch
```

Minified version:

```
npm run release
```
