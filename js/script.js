$(document).ready(function(){
	$("section").hide();
	$(".about").fadeIn(300);
	$(".slogans").fadeIn(300);
	$(".gallery").fadeIn(300);
	offerTableAlign();
	menu(700, 200);
});
function offerTableAlign(){
	$(".offer tr td:odd").addClass("text-right");
}
function menu(d1, d2){
	$("#menu-omnie").click(function(){
		$("section").fadeOut(d2);
		$(".about").fadeIn(d1);
		$(".slogans").fadeIn(d1);
		$(".gallery").fadeIn(d1);
	});
	$("#menu-oferta").click(function(){
		$("section").fadeOut(d2);
		$(".offer").fadeIn(d1);
	});
	$("#menu-salon").click(function(){
		$("section").fadeOut(d2);
		$(".gallery-salon").fadeIn(d1);
	});
	$("#menu-kontakt").click(function(){
		$("section").fadeOut(d2);
		$(".contact").fadeIn(d1);
	});
//	menu-kontakt
}