$(function(){
				slider();
				small_slide();
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
						
						$('#slide_list').css('left',-1499*iNow+'px');
						iNow=1;	
	
					}
						$('#slide_list').animate({'left':-1499*iNow+'px'});
						$('.dot').eq(iNow).addClass('dot_on').siblings().removeClass('dot_on')									
				},3000)
			}	
			function changePic(){
					var nowLeft=-iNow*1499;
					console.log(nowLeft);
					$('#slide_list').css('left',nowLeft);
				}
			$('#left').click(function(){
				clearInterval(timer);
				iNow--;
				$('.dot').eq(iNow).addClass('dot_on').siblings().removeClass('dot_on')
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
				$('.dot').eq(iNow).addClass('dot_on').siblings().removeClass('dot_on')
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
				
		$('.tab_head_item').mouseover(function(){
			var index=$('.tab_head_item').index(this);
			$(this).addClass('on').siblings('.tab_head_item').removeClass('on');
			$('.tab_body_item').eq(index).css('display','block').siblings('.tab_body_item').css('display','none')
			
		})

	function small_slide(){
		var siNow=0;
		var stimer;
		small_inter();
		function small_inter(){	
					stimer=setInterval(function(){
					siNow++;
					
					if(siNow>=3){
						siNow=0;
						schangePic();
						$('.module_roll').css('transition','');
						
					}else{
						$('.module_roll').css('transition','left 0.5s');
						schangePic();
					}										
				},2000)
			}	
			function schangePic(){
					var nowLeft=-siNow*750.5;
					console.log('s  '+nowLeft);
					$('.module_roll').css('left',nowLeft);
			}
			$('#tab_left').click(function(){
//				alert(1)
				clearInterval(stimer);
				siNow--;
				if(siNow<0){
						siNow =$('.m_roll_item').length-1;
						$('.module_roll').css('transition','');
					}
					console.log('向前'+siNow);
					schangePic();
					small_inter();
				
			})
			
			$('#tab_right').click(function(){
//				alert(5)
				clearInterval(stimer);
				siNow++;
				if(siNow>$('.m_roll_item').length-1){
						siNow =0;
						$('.module_roll').css('transition','');
					}
					console.log('向前'+siNow);
					schangePic();
					small_inter();
				
			})
	}
	
		$('.connect').hover(
		function(){
			$('#connect_main').css('display','block');	
		},
		function(){
			$('#connect_main').css('display','none');
		}	
	)
		
		
		$('.top').click(function () {
	        var speed=500;//滑动的速度
	        $('body,html').animate({ scrollTop: 0 }, speed);      
//			$('.top').css('display','none');
	          return false;
	 });
	
	
			$(window).scroll(function(){
			//回到顶部的显示和隐藏
			if($(window).scrollTop()>$(window).height()){
				$('.top').css('display','block');
			}else{
				$('.top').css('display','none');
			}	
			
		})
		
		$('.btn_left').click(function(){
			if($('#hotlist').css('left')!=0){
				//			alert(11);
			$('#hotlist').css('left','0px');
			}

		})
		$('.btn_righttt').click(function(){
//			alert(11);
			$('#hotlist').css('left','-1150px');
		})
			
			
	
})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	














