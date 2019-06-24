$(function(){
		$('.more').mouseover(function(){
//		alert(1111)

		$('.General-Product-Type').css('display','block');
		$('.allProduct').css('height','643px');	
	
	})
	$('.more').click(function(){

		console.log($('.General-Product-Type').css('height'))
		if($('.General-Product-Type').css('height')!=0){
			$('.General-Product-Type').css('display','none');
			$('.allProduct').css('height','27px');
			$('.General-Product-Type').css('height',0);
		}

	})
	

	
	
	
	
	
})




















