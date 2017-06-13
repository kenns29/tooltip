# Simple Tooltip for javascript

### install

#### npm

```npm install simple-tooltip```

#### bower

```bower install simple-tooltip```

#### script tag

Download */dist/tooltip.js*, and then do

```html
<script src="tooltip.js"></script>
```

### Usage

```javascript
var tooltip = require('simple-tooltip');
//the container is typically the outer div, the coordinate of the
//tooltip is calculated relative to the container
var container = document.getElementById('container');
//initialize the tooltip
var tip = tooltip().container(container).init();
...
//use the tooltip
var tipData = 'Hello, This is Tip';
var element = document.getElementById('mouseover-item')
element.addEventListener('mouseover', function(){
  tip.show(container, tipData);
});
element.addEventListener('mousemove', function(){
  tip.move(container);
});
element.addEventListener('mouseout', function(){
  tip.hide();
});
```
### Methods

\# *tooltip*.container(*[container]*])
\# *tooltip*.init()
\# *tooltip*.show(*container, data*)
\# *tooltip*.move(*container, [data]*)
\# *tooltip*.hide()
\# *tooltip*.x_pos(*pos_function*)
\# *tooltip*.y_pos(*pos_function*)
\# *tooltip*.font_size(*[size]*)
\# *tooltip*.z_index(*[z_index]*)
