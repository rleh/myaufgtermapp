$(".header_menu").click( function() {
	my_menu();
});

$(".header_back").click( function() {
	my_back();
});

function my_menu() {
	$(".h_menu").toggle();
}

function my_back() {
	history.back();
}