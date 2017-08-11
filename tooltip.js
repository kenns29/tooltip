const d3 = require('d3');
if(!d3.selection.prototype.raise)
  d3.selection.prototype.raise = function(){
    return this.each(function(){
      this.parentNode.appendChild(this);
    });
  };
module.exports = function(_container){
	var tooltip;
	var container;
	if(_container !== undefined){
		container = _container;
	}
	var font_size = 20;
  var z_index = 99;
  var css_class = 'tooltip';
	function html_fun(d){return d;}
	function init(){
		tooltip = d3.select(container)
		.append('div')
    .attr('class', css_class)
		.style('z-index', z_index)
		.style('opacity', 0)
		.style('position', 'absolute')
		.style('text-align', 'center')
		.style('padding', '2px')
		.style('font', '12px sans-serif')
		.style('background', 'lightsteelblue')
		.style('border', '0px')
		.style('border-radius', '8px')
		.style('display', 'none');
		return ret;
	}

	function x_pos(x){return x - this.offsetWidth/2;}
	function y_pos(y){return y - 40;}

	function show(sel, data){
		var element = sel;
    if(typeof element === 'string'){
      element = d3.select(sel).node();
    } else if(sel.node && typeof sel.node === 'function')
			element = sel.node();
		var pos = d3.mouse(element);
		var x = pos[0], y = pos[1];
		tooltip
		.style('width', 'auto')
		.style('height', 'auto')
		.style("top", function(){
			return y_pos.call(this, y) + 'px';
		})
    .style('left', function(){return x_pos.call(this, x) + 'px';})
		.style('display', null).style("opacity", .9)
    .style('font-size', `${font_size}px`)
    .html(function(){return html_fun.call(this, data);});
		tooltip.raise();
		return ret;
	}

	function move(sel, data){
		var element = sel;
    if(typeof element === 'string'){
      element = d3.select(sel).node();
    } else if(sel.node && typeof sel.node === 'function')
			element = sel.node();
		var pos = d3.mouse(element);
		var x = pos[0], y = pos[1];

		tooltip
		.style("left", function(){
			return x_pos.call(this, x) + 'px';
		})
		.style("top", function(){
			return y_pos.call(this, y) + 'px';
		});
		if(data !== undefined && data !== null){
			tooltip.html(function(){return html_fun.call(this, data);});
		}
		return ret;
	}

	function hide(){
		tooltip
		.style('opacity', 0)
		.style('display', 'none');
		return ret;
	}

	function ret(){
		return init();
	}

	ret.container = function(_){
		return arguments.length > 0 ? (container = _, ret) : container;
	};

	ret.tooltip = function(){return tooltip;};
	ret.show = show;
	ret.move = move;
	ret.hide = hide;
	ret.html = function(_){
		if(arguments.length > 0 && _ !== undefined){
			if(typeof _ === 'function') html_fun = _;
			else html_fun = function(){return _;}
			return ret;
		}
		else return html_fun;
	};
	ret.init = init;
	ret.x_pos = function(_){
		if(arguments.length > 0) {
			if(typeof _ === 'function') x_pos = _;
			else x_pos = function(){return _;};
			return ret;
		} else return x_pos;
	};
	ret.y_pos = function(_){
		if(arguments.length > 0) {
			if(typeof _ === 'function') y_pos = _;
			else y_pos = function(){return _;};
			return ret;
		} else return y_pos;
	};
	ret.font_size = function(_){
    return arguments.length > 0 ? (font_size = _,
      tooltip?tooltip.style('font-size', `${font_size}px`):null, ret) : font_size;
  };
  ret.z_index = function(_){
    return arguments.length > 0 ? (z_index = _,
      tooltip?tooltip.style('z-index', z_index):null, ret) : z_index;
  };
  ret.css_class = function(_){
    return arguments.length > 0 ? (css_class =_, tooltip?tooltip.attr('class', css_class):null, ret) : css_class;
  };
  ret.destroy = function(_){
    if(tooltip) tooltip.remove();
    return this;
  };
	return ret;
};
