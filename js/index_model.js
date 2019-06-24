$(function(){

//特色
			$.each(special_item_info, function(index,data) {			
			var str=`<div id="special_item">
					<div id="s_itemtop">
						<a href="http://127.0.0.1:8020/ASUS/information.html"><img src="${data.top_pic}" class="s_pic"/></a>
					</div>
					<div id="s_itembottom">
						<i class="s_left"><a href="http://127.0.0.1:8020/ASUS/information.html"><img src="${data.left_pic}"/></a> </i>
						<i class="s_right"><a href="http://127.0.0.1:8020/ASUS/information.html"><img src="${data.right_pic}"/></a></i>
					</div>
				</div>`
				$('#sBox').append(str);
				
		});
		//爆款清单
		$.each(hot_goods_info, function(index,data) {
			var str2=`<li class="hot_sale_item">
							<div id="hot_sale_pic">
								<a href="http://127.0.0.1:8020/ASUS/information.html">
									<img src="${data.src}"/>
								</a>
							</div>
							<div id="hot_sale_name">
								<a href="http://127.0.0.1:8020/ASUS/information.html">
									<p class="index_good_tit common_intro">${data.good_tit}</p>
									<p class="index_good_des common_intro">${data.good_des}</p>
								</a>
							</div>
							<div id="hot_sale_price">${data.price}</div>
						</li>`
					$('#hotlist').append(str2);
		});
		//1F游戏专区
		$.each(hs_good_s1_list, function(index,data) {
			var str3=`<div id="s1_list_item">
						<a href="http://127.0.0.1:8020/ASUS/information.html">
							<div id="s1_list_pic">							
								<img src="${data.src}"/>							
							</div>
							</a>
							<div id="s1_goods_info">
							<a href="http://127.0.0.1:8020/ASUS/information.html">
								<p class="index_good_tit common_intro">${data.good_tit}</p>
								<p class="index_good_des common_intro">${data.good_des}
							</a>
							</div>
							<div id="hot_sale_price">${data.price}</div>
							<a href="http://127.0.0.1:8020/ASUS/information.html"><div id="s1_list_item_gray"></div> </a>
						</div>`
					$(".s1_list1").append(str3);
		});
		
		$.each(hs_good_s1_list2, function(index,data) {
			var str3=`<div id="s1_list_item">
						<a href="#">
							<div id="s1_list_pic">							
								<img src="${data.src}"/>							
							</div>
							</a>
							<div id="s1_goods_info">
							<a href="#">
								<p class="index_good_tit common_intro">${data.good_tit}</p>
								<p class="index_good_des common_intro">${data.good_des}
							</a>
							</div>
							<div id="hot_sale_price">${data.price}</div>
							<a href="http://127.0.0.1:8020/ASUS/information.html"><div id="s1_list_item_gray"></div> </a>
						</div>`
					$(".s1_list2").append(str3);
		});
		
		$.each(hs_good_s1_list3, function(index,data) {
			var str3=`<div id="s1_list_item">
						<a href="http://127.0.0.1:8020/ASUS/information.html">
							<div id="s1_list_pic">							
								<img src="${data.src}"/>							
							</div>
							</a>
							<div id="s1_goods_info">
							<a href="#">
								<p class="index_good_tit common_intro">${data.good_tit}</p>
								<p class="index_good_des common_intro">${data.good_des}
							</a>
							</div>
							<div id="hot_sale_price">${data.price}</div>
							<a href="http://127.0.0.1:8020/ASUS/information.html"><div id="s1_list_item_gray"></div> </a>
						</div>`
				$(".s1_list3").append(str3);
		});
		
		//3F电竞专区
		
		$.each(s1_list_dj1, function(index,data) {
			var str4=`<div id="s1_list_item">
						<a href="http://127.0.0.1:8020/ASUS/information.html">
							<div id="s1_list_pic">							
								<img src="${data.src}"/>							
							</div>
							</a>
							<div id="s1_goods_info">
							<a href="#">
								<p class="index_good_tit common_intro">${data.good_tit}</p>
								<p class="index_good_des common_intro">${data.good_des}
							</a>
							</div>
							<div id="hot_sale_price">${data.price}</div>
							<a href="http://127.0.0.1:8020/ASUS/information.html"><div id="s1_list_item_gray"></div> </a>
						</div>`
				$(".s1_list_dj1").append(str4);
				$(".s1_list_diy1").append(str4);
		});
		
		$.each(s1_list_dj2, function(index,data) {
			var str4=`<div id="s1_list_item">
						<a href="#">
							<div id="s1_list_pic">							
								<img src="${data.src}"/>							
							</div>
							</a>
							<div id="s1_goods_info">
							<a href="#">
								<p class="index_good_tit common_intro">${data.good_tit}</p>
								<p class="index_good_des common_intro">${data.good_des}
							</a>
							</div>
							<div id="hot_sale_price">${data.price}</div>
							<a href="http://127.0.0.1:8020/ASUS/information.html"><div id="s1_list_item_gray"></div> </a>
						</div>`
				$(".s1_list_dj2").append(str4);
				$(".s1_list_diy3").append(str4);
				$(".s1_list_diy5").append(str4);
		});
		
		
		$.each(s1_list_dj3, function(index,data) {
			var str4=`<div id="s1_list_item">
						<a href="#">
							<div id="s1_list_pic">							
								<img src="${data.src}"/>							
							</div>
							</a>
							<div id="s1_goods_info">
							<a href="#">
								<p class="index_good_tit common_intro">${data.good_tit}</p>
								<p class="index_good_des common_intro">${data.good_des}
							</a>
							</div>
							<div id="hot_sale_price">${data.price}</div>
							<a href="http://127.0.0.1:8020/ASUS/information.html"><div id="s1_list_item_gray"></div> </a>
						</div>`
				$(".s1_list_dj3").append(str4);
				$(".s1_list_zj2").append(str4);
		});
		
		$.each(s1_list_dj4, function(index,data) {
			var str4=`<div id="s1_list_item">
						<a href="#">
							<div id="s1_list_pic">							
								<img src="${data.src}"/>							
							</div>
							</a>
							<div id="s1_goods_info">
							<a href="#">
								<p class="index_good_tit common_intro">${data.good_tit}</p>
								<p class="index_good_des common_intro">${data.good_des}
							</a>
							</div>
							<div id="hot_sale_price">${data.price}</div>
							<a href="http://127.0.0.1:8020/ASUS/information.html"><div id="s1_list_item_gray"></div> </a>
						</div>`
				$(".s1_list_dj4").append(str4);
				$(".s1_list_diy2").append(str4);
				$(".s1_list_diy4").append(str4);
		});
		//4F整机电脑
		
		$.each(s1_list_zj1, function(index,data) {
			var str4=`<div id="s1_list_item">
						<a href="#">
							<div id="s1_list_pic">							
								<img src="${data.src}"/>							
							</div>
							</a>
							<div id="s1_goods_info">
							<a href="#">
								<p class="index_good_tit common_intro">${data.good_tit}</p>
								<p class="index_good_des common_intro">${data.good_des}
							</a>
							</div>
							<div id="hot_sale_price">${data.price}</div>
							<a href="http://127.0.0.1:8020/ASUS/information.html"><div id="s1_list_item_gray"></div> </a>
						</div>`
				$(".s1_list_zj1").append(str4);
		});
		
		
		$.each(s1_list_zj3, function(index,data) {
			var str4=`<div id="s1_list_item">
						<a href="#">
							<div id="s1_list_pic">							
								<img src="${data.src}"/>							
							</div>
							</a>
							<div id="s1_goods_info">
							<a href="#">
								<p class="index_good_tit common_intro">${data.good_tit}</p>
								<p class="index_good_des common_intro">${data.good_des}
							</a>
							</div>
							<div id="hot_sale_price">${data.price}</div>
							<a href="http://127.0.0.1:8020/ASUS/information.html"><div id="s1_list_item_gray"></div> </a>
						</div>`
				$(".s1_list_zj3").append(str4);
		});

//		//g_item
//		$.each(g_item, function(index,data) {
//			var str4=`<li class="g_item low">
//						<span class="num_1 good_num">${data.good_num}</span>
//						<div id="goods_pic" style="display: none;"><a href="#"><img src="${data.src}"/></a></div>
//						<div id="goods_info">
//							<h3 class="goods_name"><a href="#">${data.good_name}</a></h3>
//							<div id="goods_price" style="display: none;">${data.price}</div>
//						</div>
//						</li>`
//				$('#goods_list').append(str4);
//		});


//		键鼠/服务产品
		
		$.each(hs_s2_list_goods, function(index,data) {
			var str5=`<div class="hs_s2_list_goods">
							<div class="hs_s2_good_pic">
								<a href="http://127.0.0.1:8020/ASUS/information.html">
									<img src="${data.src}"/>
								</a>
							</div>
							<div class="hs_s2_good_info">
								<a href="http://127.0.0.1:8020/ASUS/information.html">
									<p class="index_good_tit common_intro">${data.good_tit}</p>
								</a>
							</div>
							<div class="hs_s2_good_price">
								<span>${data.price}</span>
							</div>
						</div>`
				$(".hs_index_s2_list").append(str5);
		});


		//header
		$.each(nav_1, function(index,data) {
			var str6=`<li class="show_li">
							<a href="http://127.0.0.1:8020/ASUS/goods_list.html" class="show_a">
								<p><img src="${data.src}" style="width: 40px;height: 40px;"/></p>
								<p style="padding-top:5px ;">${data.name}</p>
							</a>
						</li>`
				$('.nav_1').append(str6);
		});
















})