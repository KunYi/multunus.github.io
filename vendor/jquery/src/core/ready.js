define(["../core","../var/document","../core/readyException","../deferred"],function(e,t){"use strict";function n(){t.removeEventListener("DOMContentLoaded",n),window.removeEventListener("load",n),e.ready()}var d=e.Deferred();e.fn.ready=function(t){return d.then(t)["catch"](function(t){e.readyException(t)}),this},e.extend({isReady:!1,readyWait:1,ready:function(n){(n===!0?--e.readyWait:e.isReady)||(e.isReady=!0,n!==!0&&--e.readyWait>0||d.resolveWith(t,[e]))}}),e.ready.then=d.then,"complete"===t.readyState||"loading"!==t.readyState&&!t.documentElement.doScroll?window.setTimeout(e.ready):(t.addEventListener("DOMContentLoaded",n),window.addEventListener("load",n))});