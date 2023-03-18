function cekLogin(){
	//tangkap request form
	let frm  = window.document.getElementById("formulir");
	let uname = frm.username.value;
	let pass = frm.password.value;
	if(uname == "mimin" && pass == "mimin123"){
		alert("Selamat Datang Mimin, Anda Administrator")
	}
	else if(uname == "budi" && pass == "budi123"){
		alert("Selamat Datang Budi, Anda Operator")
	}
	else{
		alert("Maaf Anda Gagal Login" )
	}
}
		
function kosongin(){
	//tangkap request form
	let frm  = window.document.getElementById("formulir");
	frm.username.value = "";
}

function kosongin2(){
	//tangkap request form
	let frm  = window.document.getElementById("formulir");
	frm.password.value = "";
}