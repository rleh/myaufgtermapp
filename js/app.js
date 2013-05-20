function my_menu() {
	$(".h_menu").toggle();
}

function my_back() {
	history.back();
}

function my_logout() {
	alert("mylogout");
}


$(".header_menu").click( function() {
	my_menu();
});

$(".header_back").click( function() {
	my_back();
});

$("#my_logout").click( function() {
	my_logout();
});

$("#my_settings").click( function() {
	location.href='settings.html';
});