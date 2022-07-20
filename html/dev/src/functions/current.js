export default function (A) {
	let js_name     = 'js-current';
	let js_current  = document.getElementsByClassName(js_name);
	let split       = 1;
	let url         = location.pathname.split("/")[split];

	for(let i = 0 ; i < js_current.length ; i++) {
		for(let j = 0 ; j < js_current[i].children.length ; j++) {
			for(let k = 0 ; k < js_current[i].children[j].getElementsByTagName('a').length ; k++) {
				if(location.href.match(js_current[i].children[j].getElementsByTagName('a')[k].getAttribute('href'))){
					js_current[i].children[j].getElementsByTagName('a')[k].removeAttribute('href');
					js_current[i].children[j].getElementsByTagName('a')[k].classList.add(A);
				}
			}
		}
	}
};