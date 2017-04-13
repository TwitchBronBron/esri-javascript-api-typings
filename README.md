# esri-javascript-api-typings
The ESRI JavaScript api type definitions that are provided by ESRI assume that you will be writing your project using AMD syntax. For some people who do not intend to write their whole project in AMD, that leaves us unable to use their type definitions. This project intends to make it so that you can still use most of the esri javascript api type definitions without needing to go all-in with AMD.
# Usage

Here is how you would use the typings

```TypeScript
///<reference path="node_modules/esri-javascript-api-typings/3.14/index.d.ts" />
require(["esri/map"], function(Map){
  //indicate that the map variable is of the type esri.Map
  var map:esri.Map = new Map();
});
```

# Warning

When you include these type definitions, it will appear that there are esri global objects available. Those global objects don't really exist at runtime, so you shouldn't be using them as objects. Use the normal AMD require syntax to actually interact with the api. Only use these typings to add more static type information to your already-created objects.

```TypeScript
///<reference path="node_modules/esri-javascript-api-typings/3.14/index.d.ts" />
//DON'T do this. the global esri.Map object doesn't exist, even though this will not fail compilation.
var map = new esri.Map();

```
