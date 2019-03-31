// JavaScript Document

$(document).ready(function(){
	"use strict";
	

	//$("#jobOpp").click(function(){
	  		//$("#postingForm").empty();
			//alert("Hello! You clicked me!");
	 // });
	
	$('input:radio[name=options]').change(function() {
        if (this.value === 'jobOpp') {
			$("#postingFormJob").css("display", "block");
			$("#postingFormLearn").css("display", "none");
			
        }
        else if (this.value === 'learnOpp') {
			$("#postingFormJob").css("display", "none");
			$("#postingFormLearn").css("display", "block");
        }
		else if (this.value === 'scholarship') {
            alert("Get Mon3Y");
			$("#postingForm").empty();
        }
		
    });

});
