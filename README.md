# esri-javascript-api-typings
The ESRI JavaScript api type definitions that are provided by ESRI assume that you will be writing your project using AMD syntax. For some people who do not intend to write their whole project in AMD, that leaves us unable to use their type definitions. This project intends to make it so that you can still use most of the esri javascript api type definitions without needing to go all-in with AMD.

# Installation

### npm
```bash
npm install --save-dev esri-javascript-api-typings
```

### direct
Download the corresponding version you wish to use, and place it anywhere within your typescript project. 


# Usage

If you are requiring the esri modules, there is a esriTypes.[ClassName]Constructor object that you must use for these modules (i.e. `esriTypes.MapConstructor`) . If you are giving a variable a type, use the esriTypes.[ClassName] format (i.e. `var map: esriTypes.Map = getMapFromSomewhere();`). 

Here is a quick example

```TypeScript
///<reference path="node_modules/esri-javascript-api-typings/3.14/index.d.ts" />
require(["esri/map"], function(Map: esriTypes.MapConstructor){
  //indicate that the map variable is of the type esri.Map
  var map = new Map();
});
```

# Warning

When you include these type definitions, it will appear that there are esri global objects available. Those global objects don't really exist at runtime, so you shouldn't be using them as objects. Use the normal AMD require syntax to actually interact with the api. Only use these typings to add more static type information to your already-created objects.

```TypeScript
///<reference path="node_modules/esri-javascript-api-typings/3.14/index.d.ts" />
//DON'T do this. the global esriTypes.Map object doesn't exist, even though this will not fail compilation.
var map = new esriTypes.Map();

```
