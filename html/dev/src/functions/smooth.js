export default function () {
	var scrollElm = (function() {
		if('scrollingElement' in document) return document.scrollingElement;
		if(navigator.userAgent.indexOf('WebKit') != -1) return document.body;
		return document.documentElement;
	})();

	const easing = (t,b,c,d) => {return c*(0.5-Math.cos(t/d*Math.PI)/2)+b;}

	let duration        = 500;
	let ignore          = 'js-noscroll';
	let smoothScrollElm = document.querySelectorAll('a[href^="#"]:not(' + ignore +')');
	let data_name  	    = 'data-anchor';

	Array.prototype.forEach.call(smoothScrollElm, function(elm) {
		elm.addEventListener('click', function(e) {
			e.preventDefault();
			let targetElm  = document.querySelector(elm.getAttribute('href'));
			if(!targetElm) return;
			let targetPos  = targetElm.getBoundingClientRect().top;
			if(this.getAttribute(data_name)) targetPos -= this.getAttribute(data_name); 
			let startTime  = Date.now();
			let scrollFrom = scrollElm.scrollTop;

			(function loop() {
			    var currentTime = Date.now() - startTime;
			    if(currentTime < duration) {
			      scrollTo(0, easing(currentTime, scrollFrom, targetPos, duration));
			      window.requestAnimationFrame(loop);
			    } else {
			      scrollTo(0, targetPos + scrollFrom);
			    }
			})();
		})
	});
};