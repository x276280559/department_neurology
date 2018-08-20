window.onload =function(){

//table切换
	function tabel(){
		var ListAll = document.querySelectorAll(".nav div");
		var Cont = document.querySelectorAll(".doctor");
		//console.log(Cont)
		for(var i = 0; i < ListAll.length; i++ ){
			(function(m){
				ListAll[m].addEventListener("touchend",function(){
	//				console.log(m)
					for(var p = 0; p < ListAll.length; p++ ){
						ListAll[p].className="";
					}
					ListAll[m].className="active";      //显示
					for(var j = 0; j < Cont.length; j++ ){
						//清除所有的样式，隐藏。
						Cont[j].style.display = "none"
						//获取点击其中一个的data值。
						var setId = this.dataset["register"]
						console.log(setId)
						//获取下拉其中一个的id
						var ContId = document.getElementById(setId)
						
						//显示
						ContId.style.display = "block"
					}
				})
			})(i)
			
			
		}
	}
//手机号认证
	function phone(){
		var Obthp = document.querySelector(".patient_bth");
		var Oiptp = document.querySelector(".inptval");
		var Oinptp =Oiptp.value;
		//console.log(Oinptp.value)
		var Obtht = document.querySelector(".doctor_bth");
		var Oiptt = document.querySelector(".inptvalS").value;
		var Oinptt =Oiptt.value;
//		console.log(Obthp)
//		console.log(Obtht)
		//点击验证手机号码:患者端
		Obthp.addEventListener("click",function(){
			var Oinptval = document.querySelector(".inptval").value;
			var Opswp = document.querySelector(".pswp").value;
			var Opsw2p = document.querySelector(".psw2p").value;
			
			var re = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
			if(Oinptval =="" || Oinptval == Oinptp){
				mui.toast("请输入手机号")
			}else if(re.test(Oinptval)==false){
				mui.toast("请输入正确的手机号")
				document.querySelector(".inptval").value ="";
			}else{
				if(Opswp ==""){
					mui.toast("密码不能为空")
				}else if(Opswp.length<6){
					mui.toast("密码不能小于六位数")
					document.querySelector(".pswp").value = "";
				}else{
					if(Opswp!==Opsw2p){
						mui.toast("两次密码输入不一致")
						document.querySelector(".pswp").value = "";
						document.querySelector(".psw2p").value = "";
					}else{
						var Bth_a = Obthp.querySelector("a");
						Bth_a.setAttribute("href","http://pws.hn-ym.cn/My_center/ys_information.html");
					}
				}
			}
		})
		//点击验证手机号码:医生端
		Obtht.addEventListener("click",function(){
			var OinptvalS = document.querySelector(".inptvalS").value;
			var Opswt = document.querySelector(".pswt").value;
			var Opsw2t = document.querySelector(".psw2t").value;
			
			var re = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
			if(OinptvalS =="" || OinptvalS == Oinptt){
				mui.toast("请输入手机号")
			}else if(re.test(OinptvalS)==false){
				mui.toast("请输入正确的手机号")
				document.querySelector(".inptvalS").value ="";
			}else{
				if(Opswt ==""){
					mui.toast("密码不能为空")
				}else if(Opswt.length<6){
					mui.toast("密码不能小于六位数")
					document.querySelector(".pswt").value = "";
				}else{
					if(Opswt!==Opsw2t||Opsw2t==""){
						mui.toast("两次密码输入不一致")
						document.querySelector(".pswt").value = "";
						document.querySelector(".psw2t").value = "";
					}else{
						var Bth_a = Obtht.querySelector("a");
						Bth_a.setAttribute("href","http://pws.hn-ym.cn/My_center/ys_information.html");
					}
				}
			}
		})
	}
	
	phone();
	tabel();

}	