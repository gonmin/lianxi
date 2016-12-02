$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "data.json",
		dataType: "json",
		success: function(data){
			var html= "";
			$.each(data,function(index,value){
				html += '<li><p class="price">' + value["price"]+'</p><p class="name">'+value["name"] +'</p>'+
									'<p class="comment">已有<span class="num">'+value["comment"] +'</span>人评论</p>'+
								'</li>';
				$('.product ul').html(html);
			})
		}
	})
})