$(function(){
	
				channel_slider();
//				small_slide();
				function channel_slider(){
				//1.布局
				// ul 定位 top 0 left 0
				//2. setInterval 改变 ul 定位的left值
				var iNow=0;
				var timer;
				inter();
				
				$('.dot').click(function(){
					var index=$('.dot').index(this);
						clearInterval(timer);
						iNow=index;
						console.log('点击'+ index );
						changePic(index);
						inter();
				})
				
				function inter(){	
					timer=setInterval(function(){
					iNow++;
					
					if(iNow>=$('.slide_item').length){
						iNow=0;
						changePic();
						$('#slide_list').css('transition','');
						
					}else{
						$('#slide_list').css('transition','left 0.5s');
						changePic();
					}										
				},2000)
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