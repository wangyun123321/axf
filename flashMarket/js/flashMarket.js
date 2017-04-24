  define(['text!../flashMarket/flashMarket.html','dataHelper','common'],function(html,DB,Common){
  	
  	
  	var currentData = null;
  	function loadData(category) {
  		//网络请求
  			$.get("http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category="+category, function(data) {
								currentData = JSON.parse(data).data;
								currentData.forEach(function(item){
										$(`<li>
											<div class="li-img"><img src="${item.img}" alt=""></div>
											<div class="brief">
													<p>${item.name}</p>
													<p><span><img src="flashMarket/img/jingxuan.png" alt=""></span><span><img src="flashMarket/img/zeng.png" alt=""></span></p>
													<p>${item.specifics}</p>
													<p><${item.price}><del>${item.market_price} </del></p>
											</div>
											<div class="isAdd">
													</span><span class="add"><img src="flashMarket/img/add.png" alt=""></span>
											</div>
										</li>`).appendTo($('.content ul'));
								})
						});
  	}
	
	return{
				
			init : function(){
				
				$('#container').html(html);
				$('#header').load("/common/common.html", function(){
					Common.init();
				});
				
				//加载数据
				loadData("热销榜");	
				$(".menu ul li a").on('click', function (e) {
					var category = $(this).text();
					$('.content ul').empty();
					loadData(category);
				});
				
				//给+绑定事件
				$('.content ul').on('click',".add",function () {
						 var index = $(this).parent().parent().index();
						var  currentItem = currentData[index];
//						 if(!currentItem){
//						 		return;
//						 }
						 //存储数据到localStorage中
//						 var arr = [currentItem];
//						 localStorage.setItem('cart', JSON.stringify(arr));
						 
						 
						 //存储商品
						 DB.saveItem(currentItem);
						 
						 
//						var date = new Date().getTime();
//					
//						if(localStorage.length!=0){
//							//遍历localStorage
//							for(var tempStorage in localStorage){
//								var storageItem = JSON.parse(localStorage.getItem(tempStorage));
//								
//								if(storageItem .name === currentItem.name){
//									currentItem.count++;
//									window.localStorage.setItem(tempStorage,JSON.stringify(currentItem));
//									return;
//								}
//						}
//						currentItem.count=1;
//						window.localStorage.setItem('currentItem'+date,JSON.stringify(currentItem));
//					}else{
//						currentItem.count=1;
//						window.localStorage.setItem('currentItem'+date,JSON.stringify(currentItem));
//					}
				});
			},
		}
	
	
});
        