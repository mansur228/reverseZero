function logo(){

}

function ajax(place , path){
	const xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", `${path}/page.php`);
	xmlhttp.send();
	xmlhttp.onload = function() {
		document.querySelector(place).innerHTML = this.responseText;
		document.getElementById('script').src = `${path}/script.js`
		document.getElementById('style').href = `${path}/style.css`
		
		
		let logo = document.getElementsByClassName('logo')
		for(let i = 0; i < logo.length; i++){
			logo[i].innerHTML = `
				<p>REVERSE ZERO</p>
			`
		}
		// for(let i = 0; i < logo.length; i++){
		// 	logo[i].innerHTML = `
		// 		<p>REVERSE</p>
		// 		<p>ZERO</p>
		// 	`
		// }
	}
	

	
	
}
ajax('#wrapper' , 'modules/landing');
