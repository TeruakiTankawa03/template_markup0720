export default function () {
	
	if(document.documentMode && navigator.msSaveOrOpenBlob){
		window.addEventListener("click", (e) => {
			let a = e.target
			if(!a.hasAttribute("download")) return
			e.preventDefault()
			let filename = a.getAttribute("download")
			let xhr = new XMLHttpRequest()
			xhr.open("GET", a.href)
			xhr.responseType = "blob"
			xhr.send()
			xhr.onload = () => {
				navigator.msSaveOrOpenBlob(xhr.response, filename)
			}
		})
	}

};