$(function(){
	$.each(surport_main_list, function(index,data) {
		var str=`<li class="main_item">
					<a href="###">
						<img src="${data.src}" class="item_pic"/>
						<p>${data.name}</p>
					</a>					
				</li>`
			$('.main_list').append(str);
	});
	
	for(var i=1;i<=7;i++){
		$.each(generalProductList, function(index,data) {
		var str=`<li class="item2">
					<a href="###">
						<img src="${data.src}" class="pic_2"/>
						<span>${data.name}</span>
					</a>
				</li>`
			$('.generalProductList').append(str);
	});
	}
	
	$.each(aa, function(index,data) {
		var str=`<li>
					<a href="###">
						<h3>${data.name}</h3>
					</a>					
				</li>`
			$('.aa').append(str);
	});
	
	
	
	
	
})
























