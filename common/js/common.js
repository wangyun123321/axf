define(['text!../common/common.html','weixin'], function (html,wx) {
	return {
		init : function () {
			console.log("888");
			//扫一扫
			document.querySelector('.photo').addEventListener('click', function () {
				wx.scanQRCode({
					needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
   					 scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
   				 	success: function (res) {
    				var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
					}
				});
			});
			
			//定位
			document.querySelector('.address').addEventListener('click', function () {
				wx.openLocation({
   					 latitude: 0, // 纬度，浮点数，范围为90 ~ -90
   				 	longitude: 0, // 经度，浮点数，范围为180 ~ -180。
   					 name: '', // 位置名
    				address: '', // 地址详情说明
   					 scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
   					 infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
				});
			});
		}
	}

});