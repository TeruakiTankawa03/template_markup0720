export default function (A) {
	let js_name01   = 'js-loader';
	let js_name02   = 'js-loader__g';
	let js_name03   = 'js-loader__p';
	let js_name04   = 'js-done';
	let js_loader01 = document.getElementsByClassName(js_name01);
	let js_loader02 = document.getElementsByClassName(js_name02);
	let js_loader03 = document.getElementsByClassName(js_name03);
	let js_loader04 = document.getElementsByClassName(js_name04);
	let images      = document.getElementsByTagName('img'); // ページ内の画像取得
	let imgCount    = 0;
	let baseCount   = 0;
	let gaugeMax    = 100;
	let time01      = 10;
	let time02      = 1;
	let current;

	for (let i = 0 ; i < images.length ; i++) {
	  let img     = new Image();
	  img.onload  = () => {imgCount += 1;}
	  img.onerror = () => {imgCount += 1;}
	  img.src     = images[i].src;
	};

	let loader = setInterval(() => {
	  if(baseCount <= imgCount) {
	    baseCount         += 1;
	    current           = Math.floor(baseCount / images.length * 100);
	    for(let i = 0 ; i < js_loader03.length ; i++) js_loader03[i].innerHTML = current;
	    for(let i = 0 ; i < js_loader02.length ; i++) js_loader02[i].style.width = Math.floor(gaugeMax / 100 * current) + '%';
	    
	    if(baseCount == images.length) {
	    	setTimeout(() => {
	    		for(let i = 0 ; i < js_loader01.length ; i++) js_loader01[i].classList.add(A);
	    		for(let i = 0 ; i < js_loader04.length ; i++) js_loader04[i].classList.add(A);
	    	},time02);
	      clearInterval(loader);
	    }
	  }
	}, time01);
};