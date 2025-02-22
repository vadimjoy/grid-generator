# grid-generator

1) ```npm install grid-generator```
2) create js file, for example: **grid-generator.js**

```javascript
const gen = require('grid-generator');

gen({
    breakpoints: [
        1600, //examples
        1280,
        1024,
        768,
        480
    ],
    path: "src/common/styles", //example
    filename: "grid.css" //examle
});
```

4) type ```node grid-generator``` to execute the script

#### example
[grid-generator](https://vadimjoy.github.io/grid-generator/)
