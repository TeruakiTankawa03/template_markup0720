export default function () {
	
	let js_input = document.getElementsByTagName('input');
	for(let i = 0 ; i < js_input.length ; i++) {
		js_input[i].addEventListener("keypress", (e) => {
			if(e.keyCode === 13){
				e.preventDefault();
				document.activeElement.blur();
				js_input[i].blur();
			}
		})
	}

};