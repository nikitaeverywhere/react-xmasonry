!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports["react-xmasonry"]=t(require("React")):e["react-xmasonry"]=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.XBlock=t.XMasonry=void 0;var a=n(3),o=r(a),i=n(2),l=r(i);t.XMasonry=o.default,t.XBlock=l.default,"undefined"!=typeof window&&(window.XMasonry=o.default,window.XBlock=l.default)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),d=r(c),f=function(e){function t(){var e,n,r,a;o(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.divElement=null,r.placed=!1,a=n,i(r,a)}return l(t,e),s(t,[{key:"componentDidUpdate",value:function(){var e=this;if(!this.placed&&this.props.parent){this.placed=!0;var t=this.props.parent;requestAnimationFrame(function(){if(e.divElement){var n=Array.from(e.divElement.querySelectorAll("img")),r=n.length>0&&t.props.updateOnImagesLoad;r&&n.forEach(function(e){return!e.complete&&e.addEventListener("load",function(){return!t.updateLock&&t.update()})}),t.props.updateOnAnimationEnd!==!1&&(r||t.props.updateOnAnimationEnd)&&(e.divElement.addEventListener("animationstart",function(){return t.updateLock=!0}),e.divElement.addEventListener("animationend",function(){t.updateLock=!1,t.update()}))}})}}},{key:"render",value:function(){var e=this,n=this.props,r=(n.width,n.measured,n.parent,n.style),o=a(n,["width","measured","parent","style"]);return d.default.createElement("div",u({},o,{style:u({},r,t.defaultStyle),className:this.props.measured?"xblock":"",ref:function(t){return e.divElement=t}}),this.props.children)}}]),t}(d.default.Component);f.propTypes={width:d.default.PropTypes.number},f.defaultProps={width:1,measured:!1},f.defaultStyle={position:"absolute",boxSizing:"border-box"},t.default=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),d=r(c),f=n(5),p=r(f),h=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={blocks:{},containerHeight:0,columns:1,containerWidth:0},n.container=null,n.mounted=!1,n.debouncedResize=(0,p.default)(n.updateContainerWidth.bind(n)),n.fixedHeight=0,n.containerWidth=n.state.containerWidth,n.columns=n.state.columns,n.update=(0,p.default)(function(){return!n.updateLock&&n.updateInternal(!0)}),n.updateLock=!1,n.externalUpdate=!1,n.props.responsive&&window.addEventListener("resize",n.debouncedResize),n.updateContainerWidth(),n}return l(t,e),s(t,[{key:"getBestFitColumn",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=Math.min(e.length-t+1,this.props.maxColumns-t+1),r=0,a=1/0,o=0;o<n;++o){var i=Math.max.apply(null,e.slice(o,o+t));i<a&&(a=i,r=o)}return{col:r,height:a}}}]),s(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.updateInternal()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,window.removeEventListener("resize",this.debouncedResize)}},{key:"componentWillReceiveProps",value:function(e){if(e.children.length<this.props.children.length){for(var t=new Set,n={},r=0;r<e.children.length;r++)t.add(e.children[r].key);for(var a=0;a<this.props.children.length;a++)t.has(this.props.children[a].key)||(n[this.props.children[a].key]={});this.recalculatePositions(null,n)}}},{key:"componentDidUpdate",value:function(){this.updateInternal()}},{key:"getColumnsNumber",value:function(e){return Math.max(1,Math.round(e/this.props.targetBlockWidth))}},{key:"updateContainerWidth",value:function(){if(!this.mounted)return!1;var e=this.container.getBoundingClientRect().width;return e!==this.containerWidth&&(this.setState({columns:this.columns=this.getColumnsNumber(e),containerWidth:this.containerWidth=e,blocks:{}}),!0)}},{key:"measureChildren",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={},n=0;n<this.container.children.length;n++){var r=this.container.children[n];if(r.hasAttribute("data-xkey")||e){var a=r.getBoundingClientRect(),o=a.height;t[r.getAttribute("data-key")]={height:Math.ceil(o)}}}Object.keys(t).length>0&&this.recalculatePositions(t)}},{key:"recalculatePositions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=void 0,r=Array.from({length:this.columns},function(){return 0});if(t){n={};for(var a in this.state.blocks)this.state.blocks.hasOwnProperty(a)&&!t.hasOwnProperty(a)&&(n[a]=this.state.blocks[a]);for(var o in e)e.hasOwnProperty(o)&&!t.hasOwnProperty(o)&&(n[o]=e[o])}else n=u({},this.state.blocks,e);for(var i=0;i<this.container.children.length;i++){var l=this.container.children[i],s=l.getAttribute("data-key");if(n.hasOwnProperty(s)&&(!t||!t.hasOwnProperty(s))){var c=+l.getAttribute("data-width")||1,d=this.getBestFitColumn(r,c),f=d.col,p=d.height,h=p+n[s].height;n[s].left=this.containerWidth*f/this.columns,n[s].top=p;for(var m=0;m<c;++m)r[f+m]=h}}if(this.props.center&&0===r[r.length-1]){for(var y=1;0===r[r.length-1-y];++y);var b=this.containerWidth*y/this.columns/2;for(var v in n)n.hasOwnProperty(v)&&(n[v].left+=b)}this.setState({blocks:n,containerHeight:Math.max.apply(null,r)})}},{key:"updateInternal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.externalUpdate)return void(this.externalUpdate=!1);e&&(this.externalUpdate=!0),this.updateContainerWidth()||this.measureChildren(e)}},{key:"render",value:function(){var e=this,n=0,r=0===this.containerWidth?[]:Array.prototype.slice.call(this.props.children).map(function(t){var r=e.state.blocks[t.key],a=Math.min(t.props.width,e.columns);return r||++n,r?d.default.cloneElement(t,{"data-key":t.key,"data-width":a,style:{width:Math.floor(a*e.containerWidth/e.columns),left:Math.floor(r.left),top:r.top},measured:!0,width:a,parent:e}):d.default.cloneElement(t,{"data-key":t.key,"data-width":a,"data-xkey":t.key,style:{width:Math.floor(a*e.containerWidth/e.columns),visibility:"hidden"},width:a,parent:e})}),o=r.length-n>0||0===r.length?this.fixedHeight=this.state.containerHeight:this.fixedHeight,i=this.props,l=(i.center,i.maxColumns,i.responsive,i.targetBlockWidth,i.updateOnAnimationEnd,i.updateOnImagesLoad,i.className),s=i.style,c=a(i,["center","maxColumns","responsive","targetBlockWidth","updateOnAnimationEnd","updateOnImagesLoad","className","style"]);return d.default.createElement("div",u({className:l?"xmasonry "+l:"xmasonry",style:u({},t.containerStyle,{height:o},s),ref:function(t){return e.container=t}},c),r)}}]),t}(d.default.Component);h.propTypes={center:d.default.PropTypes.bool,maxColumns:d.default.PropTypes.number,responsive:d.default.PropTypes.bool,targetBlockWidth:d.default.PropTypes.number,updateOnAnimationEnd:d.default.PropTypes.bool,updateOnImagesLoad:d.default.PropTypes.bool},h.defaultProps={center:!0,maxColumns:1/0,responsive:!0,targetBlockWidth:300,updateOnAnimationEnd:void 0,updateOnImagesLoad:!0},h.containerStyle={position:"relative"},t.default=h},function(e,t,n){"use strict";function r(){var e=["#ffff8d","#ff8a80","#a7ffeb","#ffd180","#80d8ff","#ccff90","#cfd8dc"];return e[Math.floor(Math.random()*e.length)]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=u.split(/\./g),n=Math.floor(Math.random()*(t.length-2)),r=e||1+Math.floor(Math.random()*(t.length-n+1));return t.splice(n,r).join(".")}function o(){return Array.from({length:7+Math.floor(5*Math.random())},function(){return{id:++l,title:a(1),text:a()+".",cover:"img/wallpaper.jpg",cardWidth:Math.random()>.8?2:1}})}function i(e){return{id:e,header:"This is a dummy card",body:a(),width:Math.floor(1+1.5*Math.random()),color:r()}}Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomColor=r,t.getRandomText=a,t.generateArticles=o,t.getRandomCard=i;var l=0,u="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula leo a justo auctor, ut tristique mauris finibus. Curabitur sit amet dignissim lorem. Sed semper, mauris vel maximus efficitur, erat sem facilisis tellus, nec porta libero odio non nisi. Ut sed mi at metus pharetra vehicula et ut urna. Vestibulum sed nibh aliquet, tempor quam sed, facilisis erat. In commodo porttitor lacus, eget feugiat ipsum aliquam at. Donec ut suscipit odio. Ut dictum porttitor nunc, vel fringilla neque interdum vitae. Etiam non dolor eget arcu iaculis vehicula. Nulla volutpat varius venenatis. Praesent ac porttitor nunc. Fusce quis ex arcu. Donec at erat velit. Mauris nec metus nisi. Nunc ex lorem, vulputate nec felis id, commodo fringilla nunc. Donec dui velit, consequat venenatis rutrum sit amet, imperdiet nec nulla. In hac habitasse platea dictumst. Sed at ligula quis tortor consequat gravida a ac ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vel bibendum ante. Fusce eros turpis, accumsan sit amet lobortis non, egestas in tellus. Phasellus lacinia nec odio quis molestie. Nullam vestibulum sed lectus a molestie. Nulla varius ligula sollicitudin."},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:45,n=0;return function(){0!==n&&clearTimeout(n),n=setTimeout(function(){n=0,e()},t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=a(s),d=n(1),f=n(4),p=r(f),h=function(e){function t(){var e,n,r,a;o(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={data:p.generateArticles()},a=n,i(r,a)}return l(t,e),u(t,[{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"demo",id:"ArticlesDemo"},c.default.createElement("div",{className:"centerText"},c.default.createElement("button",{onClick:function(){return e.setState({data:p.generateArticles()})}},"Regenerate")),c.default.createElement(d.XMasonry,{targetBlockWidth:400},this.state.data.map(function(e,t){return c.default.createElement(d.XBlock,{key:e.id,width:e.cardWidth},c.default.createElement("div",{className:"article"},c.default.createElement("div",{className:"imageBox"},c.default.createElement("div",{className:"image",style:{backgroundImage:"url("+e.cover+")"}},c.default.createElement("div",{className:"title"},e.title))),c.default.createElement("p",null,e.text)))})))}}]),t}(c.default.Component);t.default=h},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=a(s),d=n(1),f=n(4),p=r(f),h=[{id:1,header:"Good News",body:"This is the dummy body. This is successfully rendered card.",color:p.getRandomColor()},{id:2,header:"Cool Masonry",body:"This is the dummy body. This is successfully rendered card.",color:p.getRandomColor()},{id:3,header:"Layout is Here!",body:"This card takes 2 columns. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card.",width:2,color:p.getRandomColor()}],m=function(e){function t(){var e,n,r,a;o(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={data:h},r.lastCardId=r.state.data.length,a=n,i(r,a)}return l(t,e),u(t,[{key:"addCard",value:function(){this.setState({data:this.state.data.concat(p.getRandomCard(++this.lastCardId))})}},{key:"deleteCard",value:function(){if(!(this.state.data.length<1)){var e=this.state.data.slice();e.splice(Math.floor(Math.random()*e.length),1),this.setState({data:e})}}},{key:"replaceCard",value:function(){if(!(this.state.data.length<1)){var e=this.state.data.slice();e.splice(Math.floor(Math.random()*e.length),1,p.getRandomCard(++this.lastCardId)),this.setState({data:e})}}},{key:"render",value:function(){return c.default.createElement("div",{className:"demo",id:"CardsDemo"},c.default.createElement("div",{style:{textAlign:"center"}},c.default.createElement("button",{onClick:this.addCard.bind(this)},"Add Random Card"),c.default.createElement("button",{onClick:this.deleteCard.bind(this)},"Delete random card"),c.default.createElement("button",{onClick:this.replaceCard.bind(this)},"Replace random card")),c.default.createElement(d.XMasonry,null,this.state.data.map(function(e,t){return c.default.createElement(d.XBlock,{key:e.id,width:e.width||1},c.default.createElement("div",{className:"card",style:{backgroundColor:e.color}},c.default.createElement("h1",null,e.header,c.default.createElement("sup",null,e.id)),c.default.createElement("p",null,e.body)))})))}}]),t}(c.default.Component);t.default=m},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=a(s),d=n(1),f=n(4),p=r(f),h=function(e){function t(){var e,n,r,a;o(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={data:p.generateArticles()},r.xMasonry=null,a=n,i(r,a)}return l(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;document.fonts&&document.fonts.ready&&document.fonts.ready.then(function(){e.xMasonry.update()})}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"demo",id:"ContentChangesDemo"},c.default.createElement("div",{className:"centerText"},c.default.createElement("button",{onClick:function(){return e.setState({data:p.generateArticles()})}},"Regenerate")),c.default.createElement(d.XMasonry,{ref:function(t){return e.xMasonry=t}},this.state.data.map(function(e,t){return c.default.createElement(d.XBlock,{key:e.id,width:e.cardWidth},c.default.createElement("div",{className:"card",style:{position:"relative"}},c.default.createElement("img",{src:e.cover,alt:"image"}),c.default.createElement("div",{className:"body"},c.default.createElement("h3",null,e.title),c.default.createElement("p",null,e.text))))})))}}]),t}(c.default.Component);t.default=h},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(7),o=r(a),i=n(6),l=r(i),u=n(8),s=r(u);window.init=function(){ReactDOM.render(React.createElement("div",null,React.createElement("h1",{style:{textAlign:"center"}},"Cards Demo"),React.createElement("div",{className:"littleGray centerText"},React.createElement("a",{target:"_blank",href:"https://github.com/ZitRos/react-xmasonry/blob/master/docs/css/CardsDemo.css"},"CSS source")," | ",React.createElement("a",{target:"_blank",href:"https://github.com/ZitRos/react-xmasonry/blob/master/docs/jsx/CardsDemo.jsx"},"JavaScript source")),React.createElement(o.default,null),React.createElement("h1",{style:{textAlign:"center"}},"Articles Demo"),React.createElement("div",{className:"littleGray centerText"},"Use better CSS fixed ratio approach when possible (no image load hooks are triggered, content appears immediately)"),React.createElement("div",{className:"littleGray centerText"},React.createElement("a",{target:"_blank",href:"https://github.com/ZitRos/react-xmasonry/blob/master/docs/css/ArticlesDemo.css"},"CSS source")," | ",React.createElement("a",{target:"_blank",href:"https://github.com/ZitRos/react-xmasonry/blob/master/docs/jsx/ArticlesDemo.jsx"},"JavaScript source")),React.createElement(l.default,null),React.createElement("h1",{style:{textAlign:"center"}},"Content Changes Demo"),React.createElement("div",{className:"littleGray limited centerText"},"When grid items change their size dynamically (like images which are not loaded yet or after CSS stylesheets finish their load), you need to update the layout manually each time when changes happen.",React.createElement("br",null),"Anytime, you can update XMasonry manually by triggering its ",React.createElement("code",null,"update")," method."),React.createElement("div",{className:"littleGray centerText"},React.createElement("a",{target:"_blank",href:"https://github.com/ZitRos/react-xmasonry/blob/master/docs/css/ContentChangesDemo.css"},"CSS source")," | ",React.createElement("a",{target:"_blank",href:"https://github.com/ZitRos/react-xmasonry/blob/master/docs/jsx/ContentChangesDemo.jsx"},"JavaScript source")),React.createElement(s.default,null)),document.getElementById("demoApp"))}}])});