$(document).ready(function() {
	if(window.localStorage.getItem("my_user") != null) {
		$("#f_user").val( window.localStorage.getItem("my_user") );
	}
	if(window.localStorage.getItem("my_pw") != null) {
		$("#f_pw").val( window.localStorage.getItem("my_pw") );
	}
});

$("#b_login").click(function() {
	var my_pw = $("#f_pw").val();
	var my_user = $("#f_user").val();
	$.post("http://app.mytfg.de/app/php/login.php", { user: my_user, pw: my_pw })
		.done(function(data) {
			if(data=="login_ok"){
				window.localStorage.setItem("my_user", my_user);
				window.localStorage.setItem("my_pw", my_pw);
				alert("Anmeldung erfolgreich!");
				location.href='aufgterm.html';
			}
			else if(answer=="login_incorrect"){
				alert("Anmeldedaten falsch!");
			}
			else{
				alert("Anmeldung fehlgeschlagen!");
			}
		});
});
