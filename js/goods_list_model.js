$(function(){
	
	$.each(grid_data, function(index,data) {
		var str=`<li class="grid_item">
									<div class="goods_pic">
										<a href="http://127.0.0.1:8020/ASUS/information.html">
											<img src="${data.src}" class="pic"/>
										</a>
									</div>
									<div class="goods_info">
										<h3 class="goods_name">
											<a href="http://127.0.0.1:8020/ASUS/information.html">
												${data.goods_name}
											</a>
										</h3>
									</div>
									<div class="goods_price">
										${data.price}
									</div>
									<div class="goods_active">
										<button class="in">加入购物车</button>
									</div>
								</li>`
						$('.grid_list').append(str);
	
	

	});
	
		$.each(goods_lists_main, function(index,data) {
		var str=`<li class="grid_item">
									<div class="goods_pic">
										<a href="http://127.0.0.1:8020/ASUS/information.html">
											<img src="${data.src}" class="pic"/>
										</a>
									</div>
									<div class="goods_info">
										<h3 class="goods_name">
											<a href="http://127.0.0.1:8020/ASUS/information.html">
												${data.goods_name}
											</a>
										</h3>
									</div>
									<div class="goods_price">
										${data.price}
									</div>
									<div class="goods_active">
										<button class="in">加入购物车</button>
									</div>
								</li>`
						$('.goods_main_list').append(str);
		});
	
})














