define(["./core","./var/pnum","./core/access","./css/var/rmargin","./var/document","./var/rcssNum","./css/var/rnumnonpx","./css/var/cssExpand","./css/var/getStyles","./css/var/swap","./css/curCSS","./css/adjustCSS","./css/addGetHookIf","./css/support","./core/init","./core/ready","./selector"],function(e,t,n,s,r,i,o,c,a,u,d,f,l,p){"use strict";function g(e){if(e in S)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=H.length;n--;)if((e=H[n]+t)in S)return e}function b(t){var n=e.cssProps[t];return n||(n=e.cssProps[t]=g(t)||t),n}function m(e,t,n){var s=i.exec(t);return s?Math.max(0,s[2]-(n||0))+(s[3]||"px"):t}function x(t,n,s,r,i){var o,a=0;for(o=s===(r?"border":"content")?4:"width"===n?1:0;o<4;o+=2)"margin"===s&&(a+=e.css(t,s+c[o],!0,i)),r?("content"===s&&(a-=e.css(t,"padding"+c[o],!0,i)),"margin"!==s&&(a-=e.css(t,"border"+c[o]+"Width",!0,i))):(a+=e.css(t,"padding"+c[o],!0,i),"padding"!==s&&(a+=e.css(t,"border"+c[o]+"Width",!0,i)));return a}function y(t,n,s){var r,i=a(t),c=d(t,n,i),u="border-box"===e.css(t,"boxSizing",!1,i);return o.test(c)?c:(r=u&&(p.boxSizingReliable()||c===t.style[n]),"auto"===c&&(c=t["offset"+n[0].toUpperCase()+n.slice(1)]),(c=parseFloat(c)||0)+x(t,n,s||(u?"border":"content"),r,i)+"px")}var h=/^(none|table(?!-c[ea]).+)/,v=/^--/,k={position:"absolute",visibility:"hidden",display:"block"},C={letterSpacing:"0",fontWeight:"400"},H=["Webkit","Moz","ms"],S=r.createElement("div").style;return e.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=d(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(t,n,s,r){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,c,a,u=e.camelCase(n),d=v.test(n),l=t.style;if(d||(n=b(u)),a=e.cssHooks[n]||e.cssHooks[u],s===undefined)return a&&"get"in a&&(o=a.get(t,!1,r))!==undefined?o:l[n];c=typeof s,"string"===c&&(o=i.exec(s))&&o[1]&&(s=f(t,n,o),c="number"),null!=s&&s===s&&("number"===c&&(s+=o&&o[3]||(e.cssNumber[u]?"":"px")),p.clearCloneStyle||""!==s||0!==n.indexOf("background")||(l[n]="inherit"),a&&"set"in a&&(s=a.set(t,s,r))===undefined||(d?l.setProperty(n,s):l[n]=s))}},css:function(t,n,s,r){var i,o,c,a=e.camelCase(n);return v.test(n)||(n=b(a)),c=e.cssHooks[n]||e.cssHooks[a],c&&"get"in c&&(i=c.get(t,!0,s)),i===undefined&&(i=d(t,n,r)),"normal"===i&&n in C&&(i=C[n]),""===s||s?(o=parseFloat(i),s===!0||isFinite(o)?o||0:i):i}}),e.each(["height","width"],function(t,n){e.cssHooks[n]={get:function(t,s,r){if(s)return!h.test(e.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?y(t,n,r):u(t,k,function(){return y(t,n,r)})},set:function(t,s,r){var o,c=r&&a(t),u=r&&x(t,n,r,"border-box"===e.css(t,"boxSizing",!1,c),c);return u&&(o=i.exec(s))&&"px"!==(o[3]||"px")&&(t.style[n]=s,s=e.css(t,n)),m(t,s,u)}}}),e.cssHooks.marginLeft=l(p.reliableMarginLeft,function(e,t){if(t)return(parseFloat(d(e,"marginLeft"))||e.getBoundingClientRect().left-u(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),e.each({margin:"",padding:"",border:"Width"},function(t,n){e.cssHooks[t+n]={expand:function(e){for(var s=0,r={},i="string"==typeof e?e.split(" "):[e];s<4;s++)r[t+c[s]+n]=i[s]||i[s-2]||i[0];return r}},s.test(t)||(e.cssHooks[t+n].set=m)}),e.fn.extend({css:function(t,s){return n(this,function(t,n,s){var r,i,o={},c=0;if(Array.isArray(n)){for(r=a(t),i=n.length;c<i;c++)o[n[c]]=e.css(t,n[c],!1,r);return o}return s!==undefined?e.style(t,n,s):e.css(t,n)},t,s,arguments.length>1)}}),e});