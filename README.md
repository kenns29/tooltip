# Simple Tooltip for javascript
### Dependencies

d3

### Install
Currently can only be installed via NPM
#### npm

```
npm install simple-tooltip
```

### Usage
d3 is required
```javascript
var d3 = require('d3');
var tooltip = require('simple-tooltip');
//the container is typically the outer div, the coordinate of the
//tooltip is calculated relative to the container
var container = d3.select('#container').node();
//initialize the tooltip
var tip = tooltip().container(container).init();
...
//use the tooltip
var tipData = 'Hello, This is Tip';
var element = d3.select('#mouseover-item')
element.on('mouseover', function(){
  tip.show(container, tipData);
}).on('mousemove', function(){
  tip.move(container);
}).on('mouseout', function(){
  tip.hide();
});
```
### Methods

\# *tooltip*.container(*[container]*])


\# *tooltip*.css_class(*[css_class]*)


\# *tooltip*.init()


\# *tooltip*.html(*html_function*)


\# *tooltip*.show(*container, data*)


\# *tooltip*.move(*container, [data]*)


\# *tooltip*.hide()


\# *tooltip*.x_pos(*pos_function*)


\# *tooltip*.y_pos(*pos_function*)


\# *tooltip*.font_size(*[size]*)


\# *tooltip*.z_index(*[z_index]*)
