define(['text!../shoppingCar/shoppingCar.html','dataHelper'],function(html,DB){
		//给+号添加事件
			$(document).on('click','.add',function(){
				//
				var index = $(this).parent().parent().index();
				console.log(index);
				var currentItem = DB.readAllItem()[index];
				if(!currentItem){
					return;
				}
				var arr = DB.readAllItem();
				 //存储商品
				DB.saveItem(currentItem);
				
				//重新显示数据
				showGoods();
				
			});
			
			//给减号添加事件
			$(document).on('click','.sub',function(){
				var index = $(this).parent().parent().index();
				var currentItem = DB.readAllItem()[index];
				
				//取出数据
				
				
				//remove商品
				DB.removeItem(currentItem);
				showGoods();
			
			});
			
	
	
	
	
	function showGoods(){
		//读取localStorage中的数据，并解析，放在页面上显示
			var arr = DB.readAllItem();;
			var goodsList = $('.flashMarket .goods-list');
			
			//清空商品
			goodsList.empty();
			//解析
			arr.forEach(function(item){
				$(`
					<li class="buygoods clear">
					<div class="checkbox">
						<input type="checkbox" id="ck">
					</div>
					<div class="li-img"><img src="${item.img}" alt=""></div>
					<div class="brief">
						<p>${item.name}</p>
						<p><span><img src="shoppingCar/img/jingxuan.png" alt=""></span><span><img src="shoppingCar/img/zeng.png" alt=""></span></p>
						<p>${item.specifics}</p>
						<p>${item.price}<del>${item.market_price}</del></p>
					</div>
					<div class="isAdd">
						<span class="sub"><img src="shoppingCar/img/sub.png" alt="">
						</span><span class="count">${item.count}</span>
						<span class="add"><img src="shoppingCar/img/add.png" alt=""></span>
					</div>
				</li>	
				`).appendTo(goodsList);
			})
	}
	
	
	
	return{
		init : function(){
			$('#container').html(html);
			
			//显示商品
			showGoods();
			
		
			
			
			
			
			
			
			
			
			
			
			
			
//			for(var tempLocalStorage in localStorage){
//				//console.log(tempLocalStorage);
//				var storageItem = JSON.parse(window.localStorage.getItem(tempLocalStorage));
//				//console.log(storageItem.name);
//				$(`
//					<li class="buygoods clear">
//					<div class="checkbox">
//						<input type="checkbox" id="ck">
//					</div>
//					<div class="li-img"><img src="${storageItem.img}" alt=""></div>
//					<div class="brief">
//						<p>${storageItem.name}</p>
//						<p><span><img src="shoppingCar/img/jingxuan.png" alt=""></span><span><img src="shoppingCar/img/zeng.png" alt=""></span></p>
//						<p>${storageItem.specifics}</p>
//						<p>${storageItem.price}<del>${storageItem.market_price}</del></p>
//					</div>
//					<div class="isAdd">
//						<span class="sub"><img src="shoppingCar/img/sub.png" alt=""></span><span class="count">${storageItem.count}</span><span class="add"><img src="shoppingCar/img/add.png" alt=""></span>
//					</div>
//				</li>	
//				`).appendTo($('.flashMarket ul'));
//			};
			
//			//给加号添加事件
//		
//			$('.buygoods').parent().on('click','.add',function(){
//				//if($(this).parent().prev('.brief').firstChild().text()==)
//			var	count = parseInt($(this).prev().text());
//				count++;
//				$(this).prev().text(count);
//				var li = $this.parentNode.previousSibling;
//				console.log(li);
//				//console.log($(this).parent().prev('.brief:first-child'));
//			});
			
		}
	}
	
	
});