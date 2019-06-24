$(function(){
	slider();
				function slider(){
				//1.布局
				// ul 定位 top 0 left 0
				//2. setInterval 改变 ul 定位的left值
				var iNow=0;
				var timer;
				inter();
	$('.dot').click(function(){
		var index=$('.dot').index(this);
		$(this).addClass('dot_on').siblings().removeClass('dot_on')
			clearInterval(timer);
			iNow=index;
			console.log('点击'+ index );
			changePic(index);
			inter();
	})
	
	function inter(){	
					timer=setInterval(function(){
					
					iNow++;
					$('.dot').eq(0).addClass('dot_on').siblings().removeClass('dot_on')
					if(iNow>$('.slide_item').length-1){
						iNow=0;
						
						$('#slide_list').css('left',-1226*iNow+'px');
						iNow=1;	
	
					}
						$('#slide_list').animate({'left':-1226*iNow+'px'});
						$('.dot').eq(iNow).addClass('dot_on').siblings().removeClass('dot_on')									
				},3000)
			}	
			function changePic(){
					var nowLeft=-iNow*1226;
					console.log(nowLeft);
					$('#slide_list').css('left',nowLeft);
				}
			$('#left').click(function(){
				clearInterval(timer);
				iNow--;
				if(iNow<0){
						iNow =$('.slide_item').length-1;
						$('#slide_list').css('transition','');
					}
					console.log('向前'+iNow);
					changePic();
					inter();
				
			})
			
			$('#right').click(function(){
				clearInterval(timer);
				iNow++;
				if(iNow>$('.slide_item').length-1){
						iNow =0;
						$('#slide_list').css('transition','');
					}
					console.log('向前'+iNow);
					changePic();
					inter();
				
			})	
			$('.slide_item').mouseover(
					function(){
						clearInterval(timer);
					})
			$('.slide_item').mouseout(
					function(){
						inter();
					})			
			}
	
	
	
	
	
	
	
	
	
	
	
	
	
})





















