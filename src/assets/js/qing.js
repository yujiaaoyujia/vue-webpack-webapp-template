/* eslint-disable */
/* generated @ 2018-8-29 19:48:57*/
(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='/',b(b.s=15)})([function(a,b,c){'use strict';c.d(b,'b',function(){return d}),c.d(b,'a',function(){return e});var d=function(a){console&&console.log('[Qing] '+a)},e=function(a){console&&console.warn('[Qing] '+a)}},function(a,b,c){'use strict';var d=c(10),e=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},f='\u9274\u6743\u5931\u8D25',g='\u83B7\u53D6\u7B7E\u540D\u5931\u8D25';b.a=function(a,b){function h(b,c,d){return b&&b.appId&&b.timeStamp&&b.nonceStr&&b.signature?void a.call('runtime.auth',e({},b,{success:function(a){'string'==typeof a.success&&(a.success='true'===a.success),a.success?c&&c(a):d&&d(f)},error:function(){d&&d(f)}})):d('\u7B7E\u540D\u4FE1\u606F\u9519\u8BEF')}if('function'==typeof b.success)if(b.appId&&b.timeStamp&&b.nonceStr&&b.signature)h(b,b.success,b.error);else if(b.signUrl){var i=encodeURIComponent(location.href.split('#')[0]);c.i(d.a)({url:b.signUrl.replace(/\?|$/,'?url='+i+'&').replace(/\&$/,''),method:b.signMethod||'post',success:function(a){if(!a||!a.success||!a.data)return void(b.error&&b.error(g));var c=a.data;'function'==typeof b.signFormat&&(c=b.signFormat(c)),h(c,b.success,b.error)},error:function(){b.error&&b.error(g)}})}else b.error&&b.error('\u53C2\u6570\u9519\u8BEF')}},function(a,b,c){(function(a){if(!(a.qing&&a.qing.version)){var b=a.qing||(a.qing={});b.version='0.0.4',b.isReady=!1,b.debug=!1;var d=navigator.userAgent.toLowerCase(),e=d.match(/Qing\/(\d+(?:\.\d+)*)/i)||d.match(/App\/cloudhub \d+\/(\d+(?:\.\d+)*)/i),f=e;f&&(b.nativeJsBridgeVersion=e[1]),b.isSupportNativeJsBridge=!!f,c(3).init(b),c(4).init(b),c(14).init(b),f?b.isDesktop?3<parseInt(b.nativeJsBridgeVersion.replace(/\./g,''))?!a.__hasQingDesktop&&c(7):!a.__hasQingDesktopLE3&&c(6):b.checkVersion('0.9.50')?!a.__hasQingMobile&&c(9):!a.__hasQingMobile&&c(8):b.isWX}})(window)},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(0),e=c(11);b.init=function(a){var b=document,g=[];a.once=function(b,c){a.on(b,function d(){a.off(b,d),c&&c()})};var h=a.ready=a._bridge?function(a){a&&a()}:function(a){b.addEventListener('QingReady',function c(){a(),b.removeEventListener('QingReady',c)})};a.config=function(b){a.debug=!!b.debug,h(function(){a._bridge.config(b)}),(b.jsEventList||[]).forEach(function(b){-1!=g.indexOf(b)||(g.push(b),a.on(b,function(a){f(b,{data:a})}))})},a.error=function(b){a.on('error',b)};var i=['call','off','on','checkJsApi','trigger'];i.forEach(function(b){a[b]=function(){var d=c.i(e.a)(arguments);h(function(){a[b].apply(a,d),d=null})}}),h(function(){c.i(d.b)('Ready'),a.isReady=!0;var b=a._bridge;i.forEach(function(c){a[c]=b[c]}),a.ready=function(a){a&&a()}}),a.error=function(b){a.on('error',b)},a.checkVersion=function(b){var c=a.nativeJsBridgeVersion;if(c==b)return!0;for(var d=c.split('.'),e=b.split('.'),f=Math.max(d.length,e.length),g=0;g<f;g++){var h=~~e[g],i=~~d[g];if(h<i)return!0;if(h>i)return!1}}};var f=function(a,b){var c=document.createEvent('HTMLEvents');if(b)for(var d in b)c[d]=b[d];c.initEvent(a),document.dispatchEvent(c)}},function(a,b,c){'use strict';function d(a){return a.replace(/(^|;|\s*)deviceName\s*:[^;]*(;|$)/i,';')}Object.defineProperty(b,'__esModule',{value:!0}),c.d(b,'init',function(){return e});var e=function(a){var b=d(navigator.userAgent.toLowerCase()||''),c=navigator.vendor&&navigator.vendor.toLowerCase()||'',e=navigator.appVersion.toLowerCase()||'',f=a.isWX=/micromessenger/i.test(b),g=a.isChrome=/chrome|chromium/i.test(b)&&/google inc/.test(c),h=a.isFirefox=/firefox/i.test(b),i=a.isOpera=/^Opera\//.test(b)||/\x20OPR\//.test(b),j=a.isSafari=/safari/i.test(b)&&/apple computer/i.test(c),k=a.isIe=function(a){return a?11<=a?'ActiveXObject'in window:new RegExp('msie '+a).test(b):/msie/i.test(b)||'ActiveXObject'in window},l=a.isIphone=/iphone/i.test(b),m=a.isIpad=/ipad/i.test(b),n=a.isIpod=/ipod/i.test(b),o=a.isIos=l||m||n,p=a.isAndroid=/android/i.test(b),q=a.isAndroidPhone=p&&/mobile/i.test(b),r=a.isAndroidTablet=p&&!/mobile/i.test(b),s=a.isBlackberry=/blackberry/i.test(b),t=a.isCoolpad=/coolpad/i.test(b),u=a.isMac=/mac/i.test(e),v=a.isWindows=/win/i.test(e),w=a.isWindowsPhone=v&&/phone/i.test(b),x=a.isWindowsTablet=v&&!w&&/touch/i.test(b),y=a.isMobile=l||n||q||s||w||t,z=a.isTablet=m||r||x,A=a.isDesktop=!y&&!z,B=a.isTouchDevice='ontouchstart'in window||'DocumentTouch'in window&&document instanceof DocumentTouch}},function(a,b){'use strict';b.a=function(a,b,c,d){d=d||{};var f=d.success,g=d.error;if(delete d.success,delete d.error,'function'!=typeof f&&(f=function(){}),'function'!=typeof g&&(g=function(){}),a.checkJsApi('storage'))b.call(c,d,function(a){a=a||{},a.data=a.data||{},'true'===a.success||!0===a.success?f(a.data.value):g()});else if(window.localStorage){var e='clientStorage_'+d.key;'storage.getItem'===c?f(localStorage.getItem(e)):'storage.setItem'===c?(localStorage.setItem(e,d.value),f()):'storage.removeItem'===c?(localStorage.removeItem(e),f()):void 0}else g()}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(0);(function(a,b,e){if(!b.__hasQingDesktopLE3){b.__hasQingDesktopLE3=!0;var f={},g=0,h=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=b.success,d=b.complete;delete b.success,delete b.error,delete b.complete;var e=++g;f[e]=function(a){'true'===a.success?a.success=!0:'false'===a.success&&(a.success=!1),c&&c(a,{code:200,data:a}),d&&d(a,{code:200,data:a})};var h=document.createElement('IFRAME');h.setAttribute('src','xuntong:'+a+':'+e+':'+encodeURIComponent(JSON.stringify(b))),h.setAttribute('height','1px'),h.setAttribute('width','1px'),document.documentElement.appendChild(h),h.parentNode.removeChild(h),h=null},i=function(a,b){try{var c=f[a];if(!c)return;c.apply(null,[JSON.parse(b)])}catch(a){alert(a)}},j={share:!0,chat:!0,personInfo:!0,getPersonInfo:!0,gotoLightApp:!0,selectPersons:!0,setWebViewTitle:!0,closeWebView:!0,close:!0,hideWebViewTitle:!0,defback:!0,showOptionMenu:!0,hideOptionMenu:!0,selectOrgs:!0,closePop:!0,createPop:!0},k=function(a){var b=a.jsApiList,c=a.success,d=a.complete,e={};(b||[]).forEach(function(a){e[a]=!!j[a]});var f={success:!0,data:e};c&&c(f),d&&d(f)};b.XuntongJSBridge.handleMessageFromXT=i;var l=function(a){return function(){c.i(d.a)('method ['+a+'] not support')}};e._bridge={call:h,on:l,off:l,checkJsApi:k,config:l,trigger:l},a.dispatchEvent(new Event('QingReady'))}})(document,window,window.qing||(window.qing={}))},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(1);(function(a,b,e){function f(a,b){return'getTicket'===a?void c.i(d.a)(e,b):void g.emit(a,b)}if(!b.__hasQingDesktop){b.__hasQingDesktop=!0;var g=b._CloudHubJSBridge;e._bridge={call:f,on:g.on,off:g.off,checkJsApi:g.checkJsApi,trigger:g.trigger,config:function(){}},a.dispatchEvent(new Event('QingReady'))}})(document,window,window.qing||(window.qing={}))},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(0);(function(a,b,e){if(!b.__hasQingMobile){b.__hasQingMobile=!0;var f=function(a){return function(){c.i(d.a)('method ['+a+'] not support')}},g={index:1,map:{},register:function(a){this.index+=2;var b=''+this.index;return'function'==typeof a&&(this.map[b]=function(a){this.cb.call(null,a)}.bind({map:this.map,id:b,cb:a})),b},invoke:function(a,b){var c=this.map[a+''];'function'==typeof c&&c(b)}},h={invoke:function(a,b,c){var d,e=g.register(c);b='undefined'==typeof b?'':encodeURIComponent(JSON.stringify(b)),d='xuntong:'+a+':'+e+':'+b;var f=window.XTBridgeIframes=window.XTBridgeIframes||function(){var a,b,c=[];for(b=0;9>b;b++)a=document.createElement('IFRAME'),a.setAttribute('height','1px'),a.setAttribute('width','1px'),a.style.display='none',document.documentElement.appendChild(a),c.push(a);return c}();h.callbackIndex=h.callbackIndex||0;var i=h.callbackIndex;h.callbackIndex+=1;var j=f[i%9];j.setAttribute('src',d)},callback:function(a,b){if('string'==typeof b&&b.match(/^\s*\{/))try{b=JSON.parse(b),b&&'string'==typeof b.success&&(b.success='true'===b.success)}catch(a){console.error(a)}g.invoke(a,b)}};window.XuntongJSBridge=Object.assign({invoke:h.invoke,call:h.invoke,handleMessageFromXT:h.callback},window.XuntongJSBridge),e._bridge={call:function(a,b){var c=b.success,d=b.complete;delete b.success,delete b.error,delete b.complete,h.invoke(a,b,function(){'function'==typeof c&&c.apply(null,arguments),'function'==typeof d&&d.apply(null,arguments)})},on:f,off:f,checkJsApi:f,config:f,trigger:f},a.dispatchEvent(new Event('QingReady'))}})(document,window,window.qing||(window.qing={}))},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(12),e=c(13),f=c(1),g=c(5);(function(a,b,h){function i(a){var e={call:function(b){c.i(d.a)(m,b)?a.invoke.apply(null,arguments):l.call.apply(null,arguments)},on:a.on,handleMessageFromXT:l.handleMessageFromXT};e.invoke=e.call,b.XuntongJSBridge=e;var i='eventPrefix_',k={},n=function(a){k[a]||(k[a]=!0,e.on(a,function(b){j(i+a,{eventData:b})}))};h._bridge={call:function(a,b){if(b=b||{},'getTicket'===a)c.i(f.a)(h,b);else if(a.match(/^storage\./))c.i(g.a)(h,e,a,b);else{var d=b.success,i=b.complete;delete b.success,delete b.error,delete b.complete,'toast'===a&&(a='ui.toast',b.message=b.msg,delete b.msg),'request'===a&&(a='cloudoffice.request'),('ui.changeNavBarStyle'===a||'ui.changeNavStyle'===a)&&(h.checkVersion('0.9.71')?a='ui.changeNavStyle':a='ui.changeNavBarStyle'),e.call(a,b,function(){'function'==typeof d&&d.apply(null,arguments),'function'==typeof i&&i.apply(null,arguments)})}},on:function(a,b){b&&(n(a),'function'==typeof b&&(b={success:b}),document.addEventListener(i+a,function(a){'function'==typeof b.success&&b.success(a.eventData),'function'==typeof b.complete&&b.complete(a.eventData)}))},off:function(a,b){document.removeEventListener(i+a,b)},checkJsApi:function(a){return'storage'===a||/^storage\./.test(a)?(h.isAndroid||h.isIos)&&h.checkVersion('0.9.76'):!0},config:function(){},trigger:function(b,c){a.trigger(b,c)}},j('QingReady',h._bridge)}if(!b.__hasQingMobile){b.__hasQingMobile=!0;var j=function(a,b){var d=document.createEvent('HTMLEvents');c.i(e.a)(d,b),d.initEvent(a),document.dispatchEvent(d)},k={map:{},index:1,indexStep:2,register:function(a){this.index+=this.indexStep;var b=''+this.index;return'function'==typeof a&&(this.map[b]=function(a){this.cb.call(null,a)}.bind({map:this.map,id:b,cb:a})),b},invoke:function(a,b){var c=this.map[a+''];'function'==typeof c&&c(b)}},l={call:function(a,b,c){var d,e=k.register(c);b='undefined'==typeof b?'':encodeURIComponent(JSON.stringify(b)),d='xuntong:'+a+':'+e+':'+b;var f=h.isAndroid,g=function(){var a=navigator.userAgent.split(';')[0],b=a.slice(a.indexOf('Qing/')+5);return parseFloat(b.slice(2))}();if(f&&9.59<=g)return void window.prompt(d);var i=window.XTBridgeIframes=window.XTBridgeIframes||function(){var a,b,c=[];for(b=0;9>b;b++)a=document.createElement('IFRAME'),a.setAttribute('height','1px'),a.setAttribute('width','1px'),a.style.display='none',document.documentElement.appendChild(a),c.push(a);return c}();l.callbackIndex=l.callbackIndex||0;var j=l.callbackIndex;l.callbackIndex+=1;var m=i[j%9];m.setAttribute('src',d)},handleMessageFromXT:function(a,b){if('string'==typeof b&&b.match(/^\s*\{/))try{b=JSON.parse(b),b&&'string'==typeof b.success&&(b.success='true'===b.success)}catch(a){console.error(a)}k.invoke(a,b)}},m=['cloudoffice.request','cloudoffice.showCardNotify','cloudoffice.clearCardNotify','cloudoffice.getRoleType','cloudoffice.checkAppAuth','cloudoffice.shareText','cloudoffice.downloadPic','cloudoffice.checkWorkbenchUpdate','ui.changeNavBarStyle','ui.changeNavStyle','ui.toast','runtime.jsReady','cloudoffice.textShareClosed','cloudoffice.dataReport','ui.webViewScrollTo','runtime.auth','storage.getItem','storage.setItem','storage.removeItem','storage.clear','ui.webViewPaddingTop'],n=window.CloudHubJSBridge;n&&n.isReady?i(n):window.__onJSBridgeReady=i}})(document,window,window.qing||(window.qing={}))},function(a,b){'use strict';b.a=function(a){var b=new XMLHttpRequest,c=/^(2\d{2}|304)$/;a.method||(a.method='GET'),a.error||(a.error=function(){}),a.success||(a.success=function(){}),b.open(a.method,a.url),b.onreadystatechange=function(){if(4===b.readyState)if(c.test(b.status))try{a.success(JSON.parse(b.responseText),b)}catch(b){a.error('JSON\u89E3\u6790\u5931\u8D25')}else a.error(b.responseText)},b.setRequestHeader('Content-type','application/x-www-form-urlencoded'),b.send(function(a){var b=encodeURIComponent;return'string'!=typeof a&&a?Object.keys(a).map(function(c){return b(c)+'='+b(a[c])}).join('&'):a}(a.data))}},function(a,b){'use strict';var c=Array.from;b.a=c?c:function(a){for(var b=a.length,c=[],d=0;d<b;d++)c.push(a[d]);return c}},function(a,b){'use strict';b.a=function(a,b){return a&&a.some&&a.some(function(a){return a===b})}},function(a,b){'use strict';function c(){var a,b=arguments,e=!1;return'boolean'==typeof b[0]&&(e=Array.prototype.shift.call(b)),a=Array.prototype.shift.call(b),Array.prototype.forEach.call(b,function(b){Object.keys(b).forEach(function(f){e&&'object'===d(b[f])&&'object'===d(a[f])?c(!0,a[f],b[f]):'undefined'!=typeof b[f]&&(a[f]=b[f])})}),a}b.a=c;var d='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a}},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.init=function(a){c.XuntongJSBridge={call:function(b){var c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},d=arguments[2];d&&(c.complete=d),a.call(b,c)}}};var c=window},function(a,b,c){a.exports=c(2)}]);
export default window.qing
