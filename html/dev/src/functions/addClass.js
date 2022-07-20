export default function (A) {

	let js_name = 'js-add';
	let js_add  = document.getElementsByClassName(js_name);
	
	for(let i = 0 ; i < js_add.length ; i++) {
		js_add[i].addEventListener("click", () => {
			if (js_add[i].classList.contains(A)){
				js_add[i].classList.remove(A);
			} else {
				js_add[i].classList.add(A);
			}
		})
	}
	
};