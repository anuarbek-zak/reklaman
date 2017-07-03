
$( document ).ready(function() {

	var isMobileLoginModalOpen = false;

		$('#icon-login').click(function() {
			if(!isMobileLoginModalOpen){
				$(this).css('backgroundColor','#fff');
				$('.mobile-login-modal').show();
				isMobileLoginModalOpen=true	
			}else{
				isMobileLoginModalOpen=false;
				$(this).css('backgroundColor','#eeeeee');
				$('.mobile-login-modal').hide();
			}
			
		})
});