function my_menu() {
	$(".h_menu").toggle();
}

function my_back() {
	history.back();
}

function my_logout() {
	window.localStorage.removeItem("my_user");
	window.localStorage.removeItem("my_pw");
	location.href='index.html';
}

function t_goto() {
	location.href="aufgterm.html";
}

function t_checknew() {
	var my_pw = window.localStorage.getItem("my_pw");
	var my_user = window.localStorage.getItem("my_user");
	
	if(window.localStorage.getItem("my_user") != null || window.localStorage.getItem("my_pw") != null) {
		var my_pw = window.localStorage.getItem("my_pw");
		var my_user = window.localStorage.getItem("my_user");
		var oldtimestamp = window.localStorage.getItem("t_timestamp");
		$.post("http://app.mytfg.de/app/php/t_checknew.php", { user: my_user, pw: my_pw })
			.done(function(data) {
				if(data != oldtimestamp || oldtimestamp != null || data != null){
					window.localStorage.setItem("t_timestamp", data);
					navigator.notification.alert("Neue Aufgabe", t_goto(),"MyTFG Aufgaben Terminal", "Anzeigen");
					navigator.notification.vibrate(milliseconds);
				}
			});
	}
//	else {
//		 Nix
//	}

}


$(".header_menu").click( function() {
	my_menu();
});

$(".header_back").click( function() {
	my_back();
});

$(".my_logout").click( function() {
	my_logout();
});

$(".my_settings").click( function() {
	location.href='settings.html';
});

