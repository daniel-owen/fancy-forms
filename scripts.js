$(document).ready(function(){
	// add a listener for the form submission...when we want the validation to happen
	$('.sign-up-form').submit(function(event){
		event.preventDefault();
		// console.log("Submitted");
		// 1. password must be 6 characters
		var password = $('.password').val();
		if (password.length < 6){
			$('.password').focus();
			$('.pass-error').html('Your password must be at least 6 characters');
		}

		// 2. fields must be non-empty
		function fieldsFilled(){
			$('input').each(function(){
				if ($(this).val() == ''){
					$('.form-error-message').html('All fields are mandatory');
				}
			});
		}
		fieldsFilled();

		// 3. agree to terms checkbox must be checked
		var checkBoxStatus = $('.privacy').prop('checked');
		if (checkBoxStatus == false){
			$('.privacy').focus();
			$('.terms-error').html('You must agree to the terms and policies');
		}

		// 4. valid email address
		var emailAdd = $('.email').val();
		function emailValidation(){
			var atPos = emailAdd.indexOf('@');
			var dotPos = emailAdd.indexOf('.');
			var domainPart = emailAdd.slice(emailAdd.indexOf('@'));
			var domainDotPos = domainPart.lastIndexOf('.');
			console.log(domainPart);
			if (atPos < 1 || domainDotPos > domainPart.length-3 || dotPos < 1){
				$('.email').focus();
				$('.email-error').html('Please enter a valid email address');
			}
		}
		emailValidation();

		// 5. make sure number is a number, or follows a formula
		var phoneNum = $('.phone').val();
		function phoneValidation(){
			if (phoneNum.length !== 10 || isNaN(phoneNum) == true){
				$('.phone').focus();
				$('.phone-error').html('Please enter a valid phone number');
			}
		}
		phoneValidation();

		// 6. passwords must be the same
		var password2 = $('.password2').val();
		if(password !== password2){
			$('.password2').focus();
			$('.pass-error').html('Your passwords must be the same');
		}
	});
});