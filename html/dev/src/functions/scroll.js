export default function (A) {

	let js_name   = 'js-scroll';
  	let js_scroll = document.getElementsByClassName(js_name);
  	let data_name = 'data-scroll';

  	const scroll = () => {
	  	for(let i = 0 ; i < js_scroll.length ; i++) {
			if((window.pageYOffset + window.innerHeight) > (window.pageYOffset + js_scroll[i].getBoundingClientRect().top) &&
				window.pageYOffset < (window.pageYOffset + js_scroll[i].getBoundingClientRect().bottom)){
				js_scroll[i].classList.add(A);
			}else{
				if(!js_scroll[i].getAttribute(data_name)){
					js_scroll[i].classList.remove(A);
				}
			}
		}
	};

	scroll();
	window.addEventListener('scroll', () => {
		scroll();
	})

};