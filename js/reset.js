// JavaScript Document

$(document).ready(function(){
	"use strict";
	//PASSWORD RESET REQUEST
	$("#resetPassword").click(function(){
		$(".resetForm").empty();
		$("#resetPassword").remove();
		$(".resetForm").html('<p>A link to reset your password has been sent to your email.</p>');
	});
	
	//PASSWORD RESET
	$("#resetPasswordSuccess").click(function(){
		$(".resetForm").empty();
		$("#resetPasswordSuccess").remove();
		$(".resetForm").html('<p>Your password has been successfully reset. Try <a href="login.html" class="login-link">logging in</a> again.</p>');
	});
});