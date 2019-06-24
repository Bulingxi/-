$(function(){
	$('.connect').hover(
		function(){
			$('#connect_main').css('display','block');	
		},
		function(){
			$('#connect_main').css('display','none');
		})	
	
	$('.changelie').click(function(){
				$('.gallery_show').toggleClass('gallery_show gallery_show_lie');
				$('.gallery_grid').toggleClass('gallery_grid gallery_grid_lie');
				$('.grid_list').toggleClass('grid_list grid_list_lie');
				$('.grid_item').toggleClass('grid_item lie');
				$('.pic').toggleClass('pic pic_lie');
				$('.goods_pic').toggleClass('goods_pic goods_pic_lie');
				$('.goods_info').toggleClass('goods_info goods_info_lie');
				$('.goods_price').toggleClass('goods_price goods_price_lie');
				$('.goods_active').toggleClass('goods_active goods_active_lie');
								
			})
})
	
































