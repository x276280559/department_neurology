$(document).ready(function(){
	//点击table切换功能
	var ListAll = document.querySelectorAll(".nav div");
	var Cont = document.querySelectorAll(".cont");
	for(var i = 0; i < ListAll.length; i++ ){
		(function(m){
			ListAll[m].addEventListener("touchend",function(){
						//console.log(m)
				for(var p = 0; p < ListAll.length; p++ ){
					ListAll[p].className="";
				}
				ListAll[m].className="active";
				for(var j = 0; j < Cont.length; j++ ){
					//清除所有的样式，隐藏。
					Cont[j].style.display = "none"
					//获取点击其中一个的data值。
					var setId = this.dataset["cont"]
					//console.log(setId)
					//获取下拉其中一个的id
					var ContId = document.getElementById(setId)
					//显示
					ContId.style.display = "block"
				}
			})
		})(i)
	}
	//点击评论、留言事件功能
	$(".content").on("click",".c_b .comment",function(event){
		event.stopPropagation();
		//console.log("haha")	
		$(".mask_layer_t").css("display","block")
		$(".Srk").css("display","block")
	})
	//点击遮罩层关闭事件
	$("body").on("click",".mask_layer_t",function(event){
		event.preventDefault();
		event.stopPropagation();
			//console.log("haha")	
		$(".mask_layer_t").css("display","none")
		$(".Srk").css("display","none")
	})
	//发送按钮切换背景颜色事件
	var vl = '';
	$(".Srk").bind("input propertychange",".Srk_l input",function(event){
		event.preventDefault();
		event.stopPropagation();
		//console.log("haha")
		vl = $(".Srk_l input").val();
		//判断内容是否为空
		if(vl !== ""){
			$(".Srk_r input").css("background","#009944");
			$(".Srk_r input").css("color","#FFFFFF");
		}else{
			$(".Srk_r input").css("background","#CCCCCC");
			$(".Srk_r input").css("color","#999999");
		}
		return vl;
	})
	//发送按钮事件
	$(".Srk").on("click",".Srk_r input",function(event){
		event.preventDefault();
		event.stopPropagation();
		console.log(vl)
		if(vl != ''){
			$(".mask_layer_t").css("display","none")
			$(".Srk").css("display","none")
			var k =$(".Srk_l input").val("");
			$(".Srk_r input").css("background","#CCCCCC");
			$(".Srk_r input").css("color","#999999");
			vl = '';
				//console.log(k)
			mui.toast("评论成功")
//			return k = vl;
		}else{
			mui.toast("请输入内容")
		}
		
	})
})