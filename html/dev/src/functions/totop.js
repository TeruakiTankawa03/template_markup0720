export default function (A) {

  	let js_name      = 'js-totop';
  	let sticky_name  = 'is-sticky';
  	let bd           = document.body.clientHeight;
  	let ft_elm       = document.getElementsByClassName('ft');
  	let tt_elm       = document.getElementsByClassName(js_name);
  	let y            = 100;
  	let ft           = 0;

  	for(var i = 0 ; i < ft_elm.length ; i++) {
  		ft = bd - ft_elm[i].clientHeight;
  	}

	window.addEventListener('scroll', () => {

		let js_totop = document.getElementsByClassName(js_name);

		if(window.pageYOffset > y){
			for(let i = 0; i < js_totop.length ; i++) {
				js_totop[i].classList.add(A);
			}
		}else{
			for(let i = 0 ; i < js_totop.length ; i++) {
				js_totop[i].classList.remove(A);
			}
		}

		if((window.pageYOffset + window.innerHeight) > ft){
			for(let i = 0; i < js_totop.length ; i++) {
				js_totop[i].classList.add(A);
			}
		}else{
			for(let i = 0; i < js_totop.length ; i++) {
				js_totop[i].classList.remove(A);
			}
		}
	
	})

};