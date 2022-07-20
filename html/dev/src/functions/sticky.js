export default function (A) {
	let js_name      = 'js-sticky';
  	let y            = 100;

  	window.addEventListener('scroll', () => {
  		if(window.pageYOffset > y){
  			let js_sticky = document.getElementsByClassName(js_name);
			for(let i = 0 ; i < js_sticky.length ; i++) {
				js_sticky[i].classList.add(A);
			}
  		}else{
  			let js_sticky = document.getElementsByClassName(js_name);
			for(let i = 0 ; i < js_sticky.length ; i++) {
				js_sticky[i].classList.remove(A);
			}
  		}
	})
};