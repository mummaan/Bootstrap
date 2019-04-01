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
			$("#postingFormScholar").css("display", "none");
        }
        else if (this.value === 'learnOpp') {
			$("#postingFormJob").css("display", "none");
			$("#postingFormLearn").css("display", "block");
			$("#postingFormScholar").css("display", "none");
        }
		else if (this.value === 'scholarship') {
            $("#postingFormJob").css("display", "none");            
			$("#postingFormLearn").css("display", "none");
			$("#postingFormScholar").css("display", "block");
        }
		
    });
	
	//DELETE POST
	//$(".deleteBtn").click(function(){
	//	$(this).addClass("toBeDeleted");
	//});	
	
	//DELETE POST
	$(document).on('click', ".deleteBtn", function () {
		$(this).addClass("toBeDeleted");
	});
		
	$(".confirmDelete").click(function(){
		$('#deleteModal').modal('hide'); 
		//hide the modal
		$('body').removeClass('modal-open'); 
		//modal-open class is added on body so it has to be removed
		$('.modal-backdrop').remove();
		//need to remove div with modal-backdrop class
		$('.toBeDeleted').closest('.card').remove();
		//$(this).parents('.card').remove();
		//alert("Hello! You clicked me!");
	});
	
	
	//NEW POST
	$(".addPost").click(function(){
		$('#newPostModal').modal('hide'); 
		//hide the modal
		$('body').removeClass('modal-open'); 
		//modal-open class is added on body so it has to be removed
		$('.modal-backdrop').remove();
		//need to remove div with modal-backdrop class
		
		var jobCard=$('.jobCardTemplate').clone().addClass('jobCard');
    	$('.posting-row').prepend(jobCard);
		$('.jobCard').css('display', 'block');		
		$('.jobCard').removeClass('jobCardTemplate');
	});
	
});
