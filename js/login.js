$("#b_login").click(function() {
  $.get("http://app.mytfg.de/app/php/login.php", { user: $("#f_user").val(), pw: $("#f_pw").val() })
	.done(function(data) {
		if(data=="login_ok"){
			alert("Anmeldung erfolgreich!");
			
			// Anmeldedaten Abspeichern!
			
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
