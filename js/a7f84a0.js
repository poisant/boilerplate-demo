window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){var a=arguments;a.callee=a.callee.caller;a=[].slice.call(a);typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a)}};
(function(a){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),b;b=d.pop();)a[b]=a[b]||c})(function(){try{return console.log(),window.console}catch(a){return window.console={}}}());

