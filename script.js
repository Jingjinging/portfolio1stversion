/*jQuery script for portfolio*/


function openNav() {
    document.getElementById("myMobilenav").style.width = "250px";
	
    document.getElementById("main").style.marginLeft = "250px";
       
}

function closeNav() {
    document.getElementById("myMobilenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}



$(".sidebyside").hide();
let imgClicker=1;
	
	$(".JLjl").click(function(){
		if (imgClicker < 2) {
			$(".sidebyside").show();
			imgClicker++;
			$("#logo").attr("src", "pictures/Jljl"+imgClicker+".png");
			
		
		}
		else {
			$(".sidebyside").hide();
			imgClicker=1;
			$("#logo").attr("src", "pictures/Jljl"+imgClicker+".png");
			
			
		}
})
	




$("li").mouseenter(function(){
		
		$(this).css("border", "0.1px solid #525151");
		
	
	})

$("li").mouseleave(function(){
		
		$(this).css("border", "0");
	
	})


$("#closemain").hide();
$("#openb").click(function(){
		
		$("#closemain").show();
		$("#openb").hide();

	
	})
	

$("#closemain").click(function(){
		
		$("#openb").show();
		$("#closemain").hide();

	
	})



	
	
	