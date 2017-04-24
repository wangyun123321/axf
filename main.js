//配置
requirejs.config({
	baseUrl : "./libs/",
	paths : {
		'jquery' : 'jquery',
		'flexible' : 'flexible',
		'underscore' : 'underscore',
		'backbone' : 'backbone',
		'swiper' : 'swiper',
		'lazyload' : 'jquery.lazyload.min',
		'text' : 'text',
		'weixin' : 'weixin',
//		'weixin' : 'http://res.wx.qq.com/open/js/jweixin-1.2.0',
		'home' : '../home/js/home',
		'flashMarket' : '../flashMarket/js/flashMarket',
		'shoppingCar' : '../shoppingCar/js/shoppingCar',
		'dataHelper' : 'dataHelper',
		'mine' : '../mine/js/mine',
		'common' : '../common/js/common'
	}
	
});

//引入模块
requirejs(['jquery', 'underscore','backbone','flexible','swiper','weixin'],function ($, _,Backbone,Rem,Swiper,wx) {
	wx.ready(function () {
		wx.config({
			debug : true,
			appId : appId,
			timestamp : timestamp,
			nonceStr : nonceStr,
			signature : signature,
			jsApiList : [
				'scanQRCode',
  	   		 	'getLocation'
			]
		});
				
		wx.error(function(res) {
			alert(res);
		});
			
	});
			
			
	
	
	var Router = Backbone.Router.extend({
		routes : {
			'' : 'homeFunc',
		'home' : 'homeFunc',
		'flashMarket' : 'flashFunc',
		'shoppingCar' : 'carFunc',
		'mine' : 'mineFunc',
		},
		
		homeFunc : function () {
			requirejs(['home'],function(Home){
				Home.init();
				Home.swiper();
			});
		},
		
		flashFunc : function() {
			requirejs(['flashMarket'],function(Flash){
				Flash.init();
			});
		},
		
		mineFunc : function() {
			requirejs(['mine'],function(Mine){
				Mine.init();
			});
		},
		
		carFunc : function() {
			requirejs(['shoppingCar'],function(ShoppingCar){
				ShoppingCar.init();
			});
		}
		
	});
	 new Router();
    Backbone.history.start();
	
});


