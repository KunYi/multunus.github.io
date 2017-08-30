define(["./core","./core/access","./var/document","./var/documentElement","./css/var/rnumnonpx","./css/curCSS","./css/addGetHookIf","./css/support","./core/nodeName","./core/init","./css","./selector"],function(t,e,s,o,n,f,i,c,r){"use strict";return t.offset={setOffset:function(e,s,o){var n,f,i,c,r,l,p,a=t.css(e,"position"),u=t(e),d={};"static"===a&&(e.style.position="relative"),r=u.offset(),i=t.css(e,"top"),l=t.css(e,"left"),p=("absolute"===a||"fixed"===a)&&(i+l).indexOf("auto")>-1,p?(n=u.position(),c=n.top,f=n.left):(c=parseFloat(i)||0,f=parseFloat(l)||0),t.isFunction(s)&&(s=s.call(e,o,t.extend({},r))),null!=s.top&&(d.top=s.top-r.top+c),null!=s.left&&(d.left=s.left-r.left+f),"using"in s?s.using.call(e,d):u.css(d)}},t.fn.extend({offset:function(e){if(arguments.length)return e===undefined?this:this.each(function(s){t.offset.setOffset(this,e,s)});var s,o,n,f,i=this[0];if(i)return i.getClientRects().length?(n=i.getBoundingClientRect(),s=i.ownerDocument,o=s.documentElement,f=s.defaultView,{top:n.top+f.pageYOffset-o.clientTop,left:n.left+f.pageXOffset-o.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var e,s,o=this[0],n={top:0,left:0};return"fixed"===t.css(o,"position")?s=o.getBoundingClientRect():(e=this.offsetParent(),s=this.offset(),r(e[0],"html")||(n=e.offset()),n={top:n.top+t.css(e[0],"borderTopWidth",!0),left:n.left+t.css(e[0],"borderLeftWidth",!0)}),{top:s.top-n.top-t.css(o,"marginTop",!0),left:s.left-n.left-t.css(o,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===t.css(e,"position");)e=e.offsetParent;return e||o})}}),t.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,o){var n="pageYOffset"===o;t.fn[s]=function(f){return e(this,function(e,s,f){var i;if(t.isWindow(e)?i=e:9===e.nodeType&&(i=e.defaultView),f===undefined)return i?i[o]:e[s];i?i.scrollTo(n?i.pageXOffset:f,n?f:i.pageYOffset):e[s]=f},s,f,arguments.length)}}),t.each(["top","left"],function(e,s){t.cssHooks[s]=i(c.pixelPosition,function(e,o){if(o)return o=f(e,s),n.test(o)?t(e).position()[s]+"px":o})}),t});