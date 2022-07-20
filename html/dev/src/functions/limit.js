export default function () {
	
	let js_name01 = 'js-limit';
  	let js_limit  = document.getElementsByClassName(js_name01);
  	let limit     = 4718592;

  	for(let i = 0 ; i < js_limit.length ; i++) {
		js_limit[i].addEventListener("change", (e) => {
			let s = js_limit[i].files[0].size;
			if(s > limit){
				e.preventDefault();
				js_limit[i].value = "";
			}else{
			}
		})
	}

};