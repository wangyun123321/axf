define(['text!../home/home.html','lazyload','common','weixin'],function(html,Lz,Common,wx){
	
	return{
		
		//初始化
		init : function(){
			$('#container').html(html);
			$("img").lazyload({
				effect : "fadeIn"
			});
			$('#header').load("/common/common.html",function(){
				Common.init();
			});
		},
		
		//轮播
		swiper : function () {
			  var mySwiper = new Swiper ('.swiper-container', {
		  	initialSlide:3,
		    direction: 'horizontal',
		    loop: true,
		    autoplay:1000,
		    speed:1000,
		   
		    
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    
		    // 如果需要前进后退按钮
		    // nextButton: '.swiper-button-next',
		    // prevButton: '.swiper-button-prev',
		    
		    // 如果需要滚动条
		    // scrollbar: '.swiper-scrollbar',
		  })
		},
	}
});

