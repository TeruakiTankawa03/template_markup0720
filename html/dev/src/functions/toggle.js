export default function () {
	
	let js_name01   = 'js-toggle__btn';
	let js_name02   = 'js-toggle__target';
	let js_toggle01 = document.getElementsByClassName(js_name01);
	let js_toggle02 = document.getElementsByClassName(js_name02);
	let data_name   = 'data-toggle';
	let time01      = 300;
	let time02      = '.3s';
	let c           = 'is-toggle';
	let h;
	let t;

	for(let i = 0 ; i < js_toggle01.length ; i++){
		js_toggle01[i].addEventListener("click", () => {
			toggle(js_toggle01[i].getAttribute(data_name));
	  })
	}

	const toggle = (_data) => {
		for(let i = 0 ; i < js_toggle02.length ; i++){
			if(js_toggle02[i].getAttribute(data_name) == _data){
				t = js_toggle02[i];
				if(!t.classList.contains(c)){
					const reset01 = () => {
						t.style.transition = 'height ' + time02;
						t.style.overflow = 'hidden';
						t.classList.add(c);
					}
					const reset02 = () => {
						t.removeAttribute('style');
						t.style.overflow = 'hidden';
						t.classList.remove(c);
					}
					if(document.defaultView.getComputedStyle(js_toggle02[i],null).height == '0px'){
						t.style.height = 'auto';
						h = t.clientHeight;
						t.style.height = 0;
						reset01();
						setTimeout(function(){
							t.style.height = h + 'px';
							setTimeout(function(){
								reset02();
			    			},time01);
		    			},1);
					}else{
						h = t.clientHeight;
						t.style.height = h + 'px';
						reset01();
						setTimeout(function(){
							t.style.height = 0 + 'px';
							setTimeout(function(){
								reset02();
								t.style.height = 0;
				    		},time01);
			    		},1);
					}
				}
			}
		}
	};

};