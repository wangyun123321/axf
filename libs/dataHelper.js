define([], function () {
	 //1、取出对应的而字符串，并解析为对象
	 var readAllItem = function(){
	 	return JSON.parse(localStorage.getItem("cart")) || [];
	 }
	//存储商品到localStorage中
	var saveData = function(arr){
		 localStorage.setItem('cart', JSON.stringify(arr));
	}
	return{
		saveItem : function(obj){
			var arr = readAllItem();
			//判断购物车中是否存在当前商品，如果存在直接进行++操作，不存在，就进入flag=false
			var flag = false;
    		arr.forEach(function(item){
				if(item.name === obj.name){
					item.count++;
					//console.log(item.count);
					flag = true;
				}
			 });
	 		if(flag === false){
	 	
				//给currentItem添加一个count属性
		 		//记录购物车商品数量
				 obj.count = 1;
								 
				//2、把新商品push到数组中
		 		arr.push(obj);
			}
						
		 	//3、把商品重新保存到localStorage中
			saveData(arr);
		},
		removeItem	: function(obj){
			var arr = readAllItem();
			arr.forEach(function(item, i){
					if(item.name===obj.name){
						
						//如果当前商品数量为1时，则直接从数组中移除
						if(item.count === 1){
							arr.splice(i,1);
						}else{
							item.count--;
							//
						}
						
					}
			});
				
		saveData(arr);
		},
		readAllItem : readAllItem
	}
	
});
