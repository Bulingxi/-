$(function(){
	
	
		$('#tab_right').click(function(){
			var nowleft=-99*2;
			$('#list_box').css('left',nowleft);
		})
		$('#tab_left').click(function(){
			$('#list_box').css('left',0);
		})
		
		$('.thumb_item').mouseover(function(){
			var index=$('.thumb_item').index(this)+1;
			var path='img/thumb_pic/thumb_pic'+index+'.jpg';
			$('.big_pic').attr("src",path);
			$('#pic2').attr("src",path);
			
			$(this).addClass('active').siblings('.thumb_item').removeClass('active');
		})
		
		$('.product_album_view').mousemove(function(event){
				$('#bigarea').css('display','block');
				$('#sbox').css('display','block');	
				console.log(event.clientX,event.clientY);
//				console.log($('.product_album_view').offset().left,$('#product_album_view').offset().top);
			
				var nowleft=Math.floor(event.pageX-$('.product_album_view').offset().left)-61;
				var nowtop=Math.floor(event.pageY-$('.product_album_view').offset().top-61);
				console.log(nowleft,nowtop);
				
				if(nowleft<0){
					nowleft=0;
				}
				if(nowleft>375){
					nowleft=375;
				}
				if(nowtop<=0){
					nowtop=0;
				}
				if(nowtop>375){
					nowtop=375;
				}
				$('#sbox').css({"left":nowleft,"top":nowtop});
				$('#pic2').css({"top":-nowtop*3.1});
				$('#pic2').css({"left":-nowleft*3.1});
			})
			$('.product_album_view').mouseout(function(){
				$('#bigarea').css('display','none');
				$('#sbox').css('display','none');
			})
			
	//		
		$('.btn').hover(
			function(){
				$(this).css({'backgroundColor':'#00a8ff',"color":"white"});
			},
			function(){
				$(this).css({'backgroundColor':'white',"color":"#666"});
			}
		)
		
		$('.increase').click(function(){
			var value=$('.num').val();
			value++;
			$('.num').attr("value",value);						
		})
		
		$('.decrease').click(function(){
			var value=$('.num').val();
			value--;
			if(value<=1){
				value=1;
			$(this).css({'backgroundColor':'white',"color":"#666"});
			}
			$('.num').attr("value",value);						
		})
	$('.top').click(function () {
	        var speed=500;//滑动的速度
	        $('body,html').animate({ scrollTop: 0 }, speed);      
//			$('.top').css('display','none');
	          return false;
	 });	
	$(document).scroll(function(){
		var top=$(document).scrollTop();
		if(top>500){
			$('.scroll_nav').css('display','block');
//			$('.top').css('display','block');
			
		}else{
			$('.scroll_nav').css('display','none');
		}
	})
	
	$('.connect').hover(
		function(){
			$('#connect_main').css('display','block');	
		},
		function(){
			$('#connect_main').css('display','none');
		}	
	)
		
		$('.spec_link').click(function(){
			$(this).addClass('blue').siblings().removeClass('blue');
		})
		
		
	
})	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	













