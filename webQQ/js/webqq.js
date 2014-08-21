$(function(){
	/*alert("d");*/
	$(".sou1").click(function(){
		if($("#pannelMenuList-5").css("display")==("block")){
			$("#pannelMenuList-5").hide();
		}
		else
			$("#pannelMenuList-5").show();
		
	});

	$("#online_state_setting").click(function(){
		if($("#zhuangtai").css("display")==("block")){
			$("#zhuangtai").hide();
		}
		else
			$("#zhuangtai").show();
		
	});

	$(".sou2").click(function(){
		$("#container").hide();
	});

	$("#session").click(function(){
		$("#panelBody1").show();
		$("#panelBody2").hide();
		$("#panelBody3").hide();
		$("#panelBody4").hide();
	})

	$("#contact").click(function(){
		$("#panelBody2").show();
		$("#panelBody1").hide();
		$("#panelBody3").hide();
		$("#panelBody4").hide();
	})

	$("#plugin").click(function(){
		$("#panelBody3").show();
		$("#panelBody1").hide();
		$("#panelBody2").hide();
		$("#panelBody4").hide();
	})

	$("#setting").click(function(){
		$("#panelBody4").show();
		$("#panelBody1").hide();
		$("#panelBody2").hide();
		$("#panelBody3").hide();
	})

	/*$(".list_group0").click(function(){
		if($("#groupBodyUl-0").css("display")==("block")){
			$("#groupBodyUl-0").hide();
		}
		else
			$("#groupBodyUl-0").show();
		
	});*/
	
});