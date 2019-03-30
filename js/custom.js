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
		$( ".sidebar-active" ).css( "color", "#83bf4a" );
		$( ".nav-link-side" ).animate({
			paddingTop: "8px",
			marginLeft: "-5px",
			paddingBottom: "15px"
		});
		$( ".nav-txt" ).fadeOut("100");
		$("#collapse-it").addClass("collapsed-sidebar");
		$("#collapse-it").removeClass("sidebar-expanded");
		$( "#collapse-it" ).addClass( "col-1");
		$('#collapse-it').removeClass("col-2");
		$( "#mainbody" ).addClass( "col-11");
		$('#mainbody').removeClass("col-10");
		$( "#maincalbody" ).addClass( "col-11");
		$('#maincalbody').removeClass("col-10");
		$( "#sidebar-btn" ).animate({
   			marginTop: "20px",
			marginLeft: "45px"
    	}, 500 );	
		$( ".profile-img" ).animate({
   			width: "80%",
			margin: "0px",
			marginLeft: "-10px",
			marginTop: "10px",
    	}, 800 );
		$( "#signout-btn" ).css("textAlign", "center" ).css("paddingRight", "5px" );
		$( ".btn-sign-out" ).css("marginLeft", "-10px" );
	}
	//EXPANDED VERSION
    else {
		$( ".nav-link-side" ).animate({
			height: "40px",
			paddingTop: "8px",
		});
        $( ".nav-txt" ).fadeIn("100");
		$("#collapse-it").removeClass("collapsed-sidebar");
		$("#collapse-it").addClass("sidebar-expanded"); 
		$( "#collapse-it" ).addClass( "col-2");
		$('#collapse-it').removeClass("col-1");
		$( "#mainbody" ).addClass( "col-10");
		$('#mainbody').removeClass("col-11");
		$("#sidebar-btn").css({'transform': 'rotate(0deg)'});
		$( "#sidebar-btn" ).animate({
   			marginTop: "20px",
			marginLeft: "150px"
    	}, 500 );	
		$( ".profile-img" ).animate({
   			width: "80%",
			marginLeft: "10px",
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
	
	
//Analytics
		$("#heatbtn").click(function() { 
			
		});

//CALENDAR
	
	$("#todayDate").html(Date);
	
});
