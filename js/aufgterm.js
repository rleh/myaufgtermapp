function t_list() {
	t_hideall();
	$("#t_liste").show();
	$("#t_liste").load("http://app.mytfg.de/php/liste.php");
	//alert("Neu Geladen");
}

function t_hideall() {
	$("#t_liste").hide();
	$("#t_view").hide();
	$("#t_edit").hide();
	$("#t_new").hide();
}

function t_trclick(id) {
	//alert("VIEW MODE!");
	t_hideall();
	$("#t_view").show();
	$("#t_view").load("http://app.mytfg.de/php/view.php?id=".id);
}


$(document).ready( function() {
	//alert("Document ready");
	t_list(); 
});

$("#l_refresh").click( function() {
	t_list();
});
