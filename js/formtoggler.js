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
	//Cancel Delete
	$(".cancelDelete").click(function(){
		$('#deleteModal').modal('hide'); 
		//hide the modal
		$('body').removeClass('modal-open'); 
		//modal-open class is added on body so it has to be removed
		$('.modal-backdrop').remove();
		//need to remove div with modal-backdrop class
		$('.toBeDeleted').removeClass('toBeDeleted');
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
	
	
	//UNPUBLISH AND PUBLISH
	$(document).on('click', ".publish-toggle", function () {
		
		//IF  UNPUBLISHED, PUBLISH
		if ($(this).closest(".card").hasClass("unpublished")){
			$(this).closest(".card").removeClass("unpublished");
			$(this).closest(".unpublished-text").css("display", "none");
			$(this).closest(".published-text").css("display", "block");
			var currentdate = new Date(); 
    		var datetime = "Published: " + currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " at "  + currentdate.getHours() + ":"  + currentdate.getMinutes();
			$(this).closest(".published-text").html(datetime);
		}
		//IF  PUBLISHED, THEN UNPUBLISH
		else{
			$(this).closest(".unpublished-text").css("display", "block");
			$(this).closest(".published-text").css("display", "none");
			$(this).closest(".card").addClass("unpublished");
		}
});
	
	
	
	//Every time #examplesearch is typed into
	$("#examplesearch").on("keyup", function() {
		
              //Set all cards to display:none
              $('#postings').css("display", "none");
                
			  //searchValue= #exampleSearch value
              var searchValue = $(this).val();
		
			  // for each #postings AND .job-post-title...
              $('#postings .job-post-title').each(function () {
                
				//text highlighter; transforms text to lowercase
                var pageValue = $(this).text().toLowerCase();
            
				//#postings AND .job-post-title UHHHHHHHHHHHH??!??
                $(this).toggle( !! $(this).text().toLowerCase().match(searchValue)).html(
                    
					//replace pageValue with...
                    pageValue.replace(searchValue, function(match) {
                    
                            return '<mark>'+match+'</mark>'}, 'gi')
                );
				  
				  
            });
              $("#postings").filter(function() {
                //case-sensetive
                $("#postings").toggle($(this).text().toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
              
            // if (emptyPage == true){
            //  $('.card').text('No postings found!');
            //  //alert("No results found");
            // }
            
            });
            });
	

});