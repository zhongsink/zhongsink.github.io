webpackJsonp([8],{505:function(e,t,n){var o=n(506);"string"==typeof o&&(o=[[e.id,o,""]]);n(285)(o,{});o.locals&&(e.exports=o.locals)},506:function(e,t,n){t=e.exports=n(284)(),t.push([e.id,".page .outpad{margin-top:-50px;margin-bottom:10px}.page .notfound{width:100%}.page .notfound .Page404{width:100%;height:auto;background:#8a8a88;border-radius:20px}.page .returnHome{padding-top:10px;font-size:1rem}",""])},507:function(e,t,n){e.exports=n.p+"/404.14985dc2.png"},504:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(2),c=e(u),l=n(272),s=e(l),f=n(207);n(505);var p=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={time:10},n}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;s.default.done();var t=setInterval(function(){e.setState({time:e.state.time-1}),0===e.state.time&&(e.props.history.push({passname:"/"}),clearInterval(t))},1e3)}},{key:"render",value:function(){return c.default.createElement("div",{className:"page"},c.default.createElement("div",{className:"notfound"},c.default.createElement("img",{className:"Page404",src:n(507),alt:"404 NOT FOUND"})),c.default.createElement("div",{className:"returnHome"},this.state.time," 秒后跳转到主页面",c.default.createElement(f.Link,{to:"/"},"立即跳转")))}}]),t}(u.Component);t.default=p}).call(this)}finally{}}});