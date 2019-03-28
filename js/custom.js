// JavaScript Document

$(document).ready(function(){
	"use strict";

	
//Login Card ----------------------------------
$("#card").flip({
	trigger: "manual"
});

$("#flip-btn").click(function(){
	$("#card").flip(true);
});
	
$("#unflip-btn").click(function(){
	$("#card").flip(false);
});

	
	
//Collapsible Sidebar -------------------------
//$("#sidebar-btn").click(function(){
 //   $("#collapse-it").toggleClass("collapsed-sidebar");
//  });

	
	$("#sidebar-btn").click(function() {     
    
	//COLLAPSED VERSION
	if($('#collapse-it').hasClass("sidebar-expanded")){
        $( ".nav-item-side" ).animate({
			borderLeft: "0px",
			marginTop: "10px",
			paddingBottom: "10px"
		});
		$( ".sidebar-active" ).css( "borderLeft", "0px" );
		$( ".sidebar-active" ).css( "backgroundColor", "#434c55" );
		$( ".nav-link" ).animate({
			paddingTop: "8px",
		});
		$( ".nav-txt" ).fadeOut("100");
		$("#collapse-it").addClass("collapsed-sidebar");
		$("#collapse-it").removeClass("sidebar-expanded");
		$( ".profile-bar" ).animate({
   			width: "100px",
    	}, 500 );
		$( "#collapse-it" ).animate({
   			maxWidth: "100px",
    	}, 500 );
		$( "#sidebar-btn" ).animate({
   			marginTop: "20px",
			marginLeft: "35px"
    	}, 500 );	
		$( ".profile-img" ).animate({
   			width: "80%",
    	}, 800 );
		$( "#signout-btn" ).css("textAlign", "center" ).css("paddingRight", "0px" );
		
	}
	//EXPANDED VERSION
    else {
		$( ".nav-link" ).animate({
			height: "40px",
			paddingTop: "8px",
		});
        $( ".nav-txt" ).fadeIn("100");
		$("#collapse-it").removeClass("collapsed-sidebar");
		$("#collapse-it").addClass("sidebar-expanded"); 
		$( ".profile-bar" ).animate({
   			width: "310px",
    	}, 500 );
		$( "#collapse-it" ).animate({
   			maxWidth: "310px",
    	}, 500 );
		$("#sidebar-btn").css({'transform': 'rotate(0deg)'});
		$( "#sidebar-btn" ).animate({
   			marginTop: "20px",
			marginLeft: "200px"
    	}, 500 );	
		$( ".profile-img" ).animate({
   			width: "80%",
    	}, 800 );
		$( ".sidebar-active" ).css( "borderLeft", "solid thick #83bf4a" );
		$( ".sidebar-active" ).css( "backgroundColor", "#525d69" );
	}   
	});
	
	var value = 0;
		$("#sidebar-btn").rotate({
			bind:
			{
				click: function(){
					value +=180;
					$(this).rotate({ animateTo:value});
				}
			}
		});
   	
});

