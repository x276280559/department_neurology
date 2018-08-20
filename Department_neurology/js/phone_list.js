
$(document).ready(function(){
	var OinptAll = document.querySelectorAll(".txt");
	var OradioAll = document.querySelectorAll(".radio");
	
	
//手机认证
	var Obth = document.querySelector(".bth");
	var Oinpt = document.querySelector("#phone").value;
	//点击验证手机号码
	Obth.addEventListener("click",function(){
		
		var Oinptval = document.querySelector("#phone").value;
		console.log(Oinptval)
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
		var Putval =[];
		for(var i =0;i<OinptAll.length;i++){
			if(OinptAll[i].value !==""){
				Putval.push(OinptAll[i].value);
			}
		}
//		console.log(Putval)
//		console.log(Putval.length)
		if(!flag ==1){
			mui.toast("请选择性别")
		}
		
		if(Putval.length !==5){
			mui.toast("所有内容均为必填项，不能为空")
		}else{
			if(Oinptval =="" || Oinptval == Oinpt){
					mui.toast("请输入手机号")
				}else if(re.test(Oinptval)){
					document.querySelectorAll(".txt").value ="";
					document.querySelector("#phone").value ="";
					var mask_layer_box = document.querySelector(".mask_layer_box")
					mask_layer_box.style.display = "block";
					//点击关闭
					var LoginColos = document.querySelector(".regester_in");
					LoginColos.addEventListener("click",function(){
						mask_layer_box.style.display = "none";
						
					})
				}else{
					mui.toast("请输入正确格式的手机号")
			}
		}	
	})
})