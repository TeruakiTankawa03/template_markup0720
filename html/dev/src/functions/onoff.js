export default function (A, query) {

	let js_name01  = 'js-open';
  	let js_name02  = 'js-onoff';
  	let js_name03  = 'js-close';
	let js_open    = document.getElementsByClassName(js_name01);
	let js_onoff   = document.getElementsByClassName(js_name02);
	let js_close   = document.getElementsByClassName(js_name03);
	let data_name  = 'data-onoff';

	if(query.onoff){
		open(query.onoff);
	}

	for(let i = 0 ; i < js_open.length ; i++) {
		js_open[i].addEventListener("click", () => {
			if(js_open[i].classList.contains(A)) close(js_open[i].getAttribute(data_name));
			else open(js_open[i].getAttribute(data_name));
	  })
	}
	for(let i = 0 ; i < js_close.length ; i++) {
		js_close[i].addEventListener("click", () => {
			close(js_close[i].getAttribute(data_name));
	  })
	}

	const open = (_this) => {
		for(let i = 0 ; i < js_open.length ; i++) {
			if(js_open[i].getAttribute(data_name) == _this){
				js_open[i].classList.add(A);
			}
		}
		for(let i = 0 ; i < js_onoff.length ; i++) {
			if(js_onoff[i].getAttribute(data_name) == _this){
				js_onoff[i].classList.add(A);
			}
		}
		for(let i = 0 ; i < js_close.length ; i++) {
			if(js_close[i].getAttribute(data_name) == _this){
				js_close[i].classList.add(A);
			}
		}
	}

	const close = (_this) => {
		for(let i = 0 ; i < js_open.length ; i++) {
			if(js_open[i].getAttribute(data_name) == _this){
				js_open[i].classList.remove(A);
			}
		}
		for(let i = 0 ; i < js_onoff.length ; i++) {
			if(js_onoff[i].getAttribute(data_name) == _this){
				js_onoff[i].classList.remove(A);
			}
		}
		for(let i = 0 ; i < js_close.length ; i++) {
			if(js_close[i].getAttribute(data_name) == _this){
				js_close[i].classList.remove(A);
			}
		}
	}

};