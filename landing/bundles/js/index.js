
$( document ).ready(function() {

	var isMobileLoginModalOpen = false;
	var isMobileMenuModalOpen = false;

	$("#icon-menu").click(function() {
		 isMobileMenuModalOpen = showMobileModal($(this),'menu',isMobileMenuModalOpen)
	})
	$("#icon-login").click(function() {
		isMobileLoginModalOpen = showMobileModal($(this),'login',isMobileLoginModalOpen)
	})

	function showMobileModal(that,val,bool) {	
		if(!bool){
			that.css('backgroundColor','#fff');
			$('.mobile-'+val+'-modal').show();
			return true;	
		}else{
			that.css('backgroundColor','#eeeeee');
			$('.mobile-'+val+'-modal').hide();
			return false
		}
	}
});