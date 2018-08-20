
$(document).ready(function(){
//手机认证
	var Obth = document.querySelector(".bth");
	var Oinpt = document.querySelector("#phone").value;
	//点击验证手机号码
	Obth.addEventListener("click",function(){
		
		var Oinptval = document.querySelector("#phone").value;
		var OinptAll = document.querySelectorAll(".txt");
		var OradioAll = document.querySelectorAll(".radio");
	
	
		//console.log(Oinptval)
		var re = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
		//设标杆旗
		var flag = 0;
		//单选判断值
		for(var j =0;j<OradioAll.length;j++){
			if(OradioAll[j].checked ==true){
				flag =1;
				break;
			}
		}
		//判断text中是否有值
		var Putval =new Array();
		for(var i =0;i<OinptAll.length;i++){
			//当OinptAll[i].value不为空时，添加进数组中。
			if(OinptAll[i].value !==""){
				Putval.push(OinptAll[i].value);
			}
		}
		console.log(Putval)
		if(!flag ==1){
			mui.toast("请选择性别")
		}
		console.log(Putval.length)
		console.log(Putval.length==4)
		if(Putval.length<4){
			mui.toast("内容不能为空,请重新输入")
		}else{
			if(Oinptval ==""){
					mui.toast("请输入手机号")
			}else if(re.test(Oinptval)){
					mui.toast("修改成功，请到phone_list2.js中48行中更改地址。")
					var Bthclick = $(".bth a");
					//Bthclick.attr("href","https://www.baidu.com/?tn=93153557_hao_pg")
				}else{
					mui.toast("请输入正确格式的手机号")
					document.querySelectorAll(".txt").value ="";
					document.querySelector("#phone").value ="";
			}
		}	
	})
})