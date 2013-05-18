function loadList() {
  hideall();
	$("#t_liste").show();
	$("#t_liste").load("php/liste.php");
	//alert("Neu Geladen");
}

function hideall() {
	$("#t_liste").hide();
	$("#t_view").hide();
	$("#t_edit").hide();
	$("#t_new").hide();
	$("#t_blabla").hide();
}


$(document).ready( function() {
	loadList(); 
});

/*
$(".tr_liste").click( function() {
	var id = $(this).attr('id');
	alert(id);
	hideall();
	$("#t_view").show();
	$("#t_view").load("php/view.php?id="+id);
});
*/

$("#b_refresh").click( function() {
	loadList();
});


$("#b_logout").click( function() {
	alert("Erfolgreich Abgemeldet!");
});


$("#b_settings").click( function() {
	location.href='settings.html';;
});


/*
$(".view_title").click( function() {
	var id = $(this).attr('id');
	hideall();
	$("#t_edit").show();
	$("#t_edit").load("php/edit.php?id="+id);	
});
*/
