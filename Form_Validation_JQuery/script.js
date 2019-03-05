$(document).ready(function(){
$("#bevTxt").hide();
$("#fn").hide();
$("#ln").hide();
$("#em").hide();
$("#ph").hide();
$("#zc").hide();
$("#cm").hide();
$("#bcm").hide();
$("#ti").hide();
$("#cb").hide();
});		

$(function(){
$("input[name='title']").change(function(){
	if($("#miss").is(':checked') || $("#mr").is(':checked') || $("#mrs").is(':checked'))
	$("#ti").css('display','none');
})
});	

$(function(){
	$("#beverageComment").keyup(function(){
		if($("#beverageComment").val()==""){
			$("#bcm").css('display','block');
			$("#bcm").css('color','red');
			}
			else{
				$("#bcm").css('display','none');
			}
	})
});	

$(function(){
	$("input[name='firstName']").keyup(function(){
		if(!($("#miss").is(':checked') || $("#mr").is(':checked') || $("#mrs").is(':checked'))){
		$("#ti").show();
		$("#ti").css('color','red');
		}
		var pat =/^[a-zA-Z ]+$/;
		var valfirst= $("#firstName").val();
		if(!RegExp(pat).test(valfirst)){
			$("#fn").css('display','block');
			$("#fn").css('color','red');
		}
		else{
			$("#fn").css('display','none');
		}
	})
});

$(function(){
	$("input[name='lastName']").keyup(function(){
		var pat =/^[a-zA-Z ]+$/;
		var valLast= $("#lastName").val();
		if(!RegExp(pat).test(valLast) || $("#lastName").val()==""){
			$("#ln").css('display','block');
			$("#ln").css('color','red');
		}
		else{
			$("#ln").css('display','none');
		}
		if($("#firstName").val()==""){
			$("#fn").css('display','block');
			$("#fn").css('color','red');
			}
		// if($("#lastName").val()==""){
		// 	$("#ln").css('display','block');
		// 	$("#ln").css('color','red');
		// 	}
		// 	else{
		// 		$("#ln").css('display','none');
		// 	}
	})
});

$(function(){
	$("input[name='emailId']").keyup(function(){
		var em = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if($("#lastName").val()==""){
			$("#ln").css('display','block');
			$("#ln").css('color','red');
			}
		if($("#emailId").val().match(em)){
			$("#em").css('display','none');
			$("#emailId").css('color','black');
			}
			else{
				$("#emailId").css('color','red');
				$("#em").css('display','block');
				$("#em").css('color','red');
			}
	})
});

$(function(){
	$("input[name='phoneNumber']").keyup(function(){
		var ph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			if($("#emailId").val()==""){
			$("#em").css('display','block');
			$("#em").css('color','red');
			}
		if($("#phoneNumber").val().match(ph)){
			$("#ph").css('display','none');
			$("#phoneNumber").css('color','black');
			}
			else{
				$("#phoneNumber").css('color','red');
				$("#ph").css('display','block');
				$("#ph").css('color','red');
			}
	})
});

$(function(){
	$("input[name='zipcode']").keyup(function(){
			if($("#phoneNumber").val()==""){
			$("#ph").css('display','block');
			$("#ph").css('color','red');
			}
		if($("#zipcode").val().length==6){
			$("#zc").css('display','none');
			$("#zipcode").css('color','black');
			}
			else{
				$("#zipcode").css('color','red');
				$("#zc").css('display','block');
				$("#zc").css('color','red');
			}
	})
});

$(function(){
	$("textarea[name='comments']").keyup(function(){
			if(!($("#fb").is(':checked') || $("#google").is(':checked') ||$("#yelp").is(':checked'))){
			$("#cb").css('display','block');
			$("#cb").css('color','red');
			}
		if($("#comments").val()==""){
			$("#cm").css('display','block');
			$("#cm").css('color','red');
			}
			else{
				$("#cm").css('display','none');
			}
	})
});

$(function(){
	$("textarea[name='beverageComment']").keyup(function(){
			if($("#zipcode").val()==""){
			$("#zc").css('display','block');
			$("#zc").css('color','red');
			}
		if($("#beverageComment").val()==""){
			$("#bcm").css('display','block');
			$("#bcm").css('color','red');
			}
			else{
				$("#bcm").css('display','none');
			}
	})
});

$(function(){
	$("#resetForm").click(function(){
	$("#firstName").val("");
	$("#lastName").val("");
	$("#emailId").val("");
	$("#phoneNumber").val("");
	$("#zipcode").val("");
	$("#comments").val("");
	$("#fb").prop('checked','false');
	$("#google").prop('checked','false');
	$("#yelp").prop('checked','false');
	$("#miss").prop('checked','false');
	$("#mr").prop('checked','false');
	$("#mrs").prop('checked','false');
	$("#beverageComment").hide();
	$("#ch").hide();
	$("#tbox").hide();
})
});

$(function(){
	$("input[name='social']").change(function(){
			if($("#beverageComment").val()==""){
			$("#bcm").css('display','block');
			$("#bcm").css('color','red');
			}
		if($("#fb").is(':checked') || $("#google").is(':checked') ||$("#yelp").is(':checked')){
			$("#cb").css('display','none');
			}
	})
});

$(function(){
	$("#thelist").change(function(){
		$("bev").val("");

		$("<input/>", {
			type: 'checkbox',
			value: 'checked',
			id: 'ch',
		click: function(){
		 if($("#ch").is(':checked')){
			 $("#bevTxt").css('display','inline');
		 }
		 else
		  $("#bevTxt").css('display','none');
		}
	}).appendTo("#bev");
		
		if($("#thelist").val()=="coffee")
		{
		// 	$("<input/>", {
		// 		type:'textbox',
		// 		id:"tbox",
		// 		value: 'Large- $4.75'
		// }).appendTo("#bev");
		$("<label id='tbox'>Large- $4.75</label>").appendTo("#bev");
		}
		else 	if($("#thelist").val()=="tea")
		{
			$("<label id='tbox'>Small- $2.15</label>").appendTo("#bev");
		}
		else 	if($("#thelist").val()=="coke")
		{
			$("<label id='tbox'>Can- $3.75</label>").appendTo("#bev");
		}
		else 	if($("#thelist").val()=="bubbleTea")
		{
			$("<label id='tbox'>Regular- $5.25</label>").appendTo("#bev");
		}
		else 	if($("#thelist").val()=="iceTea")
		{
			$("<label id='tbox'>Glass Bottle- $2.95</label>").appendTo("#bev");
		}
})
});

function validate(){
			 if(($("#miss").prop("checked")==false && $("#mr").prop("checked")==false && $("#mrs").prop("checked")==false) || 
			 $("#firstName").val()=="" || $("#lastName").val()=="" ||
			 $("#emailId").val()=="" || $("#phoneNumber").val()=="" ||
			 $("#zipcode").val()=="" || $("#comments").val()=="" ||
			 ($("#fb").prop("checked")==false && $("#google").prop("checked")==false && $("#yelp").prop("checked")==false) ||
			 $("#beverageComment").val()==""){

			 if($("#miss").prop("checked")==false && $("#mr").prop("checked")==false && $("#mrs").prop("checked")==false)
		   alert('Please choose title!')

		   if($("#firstName").val()=="")
		   alert('Please enter your first name!')

		   if($("#lastName").val()=="")
		   alert('Please enter your last name!')

		   if($("#emailId").val()=="")
		   alert('Please enter your Email ID!')

		   if($("#phoneNumber").val()=="")
		   alert('Please enter your phone number!')

		   if($("#zipcode").val()=="")
		   alert('Please enter your zip code!')

		   if($("#comments").val()=="")
		   alert('Please enter a comment!')

		   if($("#fb").prop("checked")==false && $("#google").prop("checked")==false && $("#yelp").prop("checked")==false)
			 alert('Please let us know how you heard about us!')
			 
			 if($("#beverageComment").val()=="")
			 alert('Please enter a beverage comment!')
		}
			else{
			 
				 if($("#miss").is(":checked"))
				 window.localStorage.setItem("title","Miss");
				 else if($("#mr").is(":checked")){
					window.localStorage.setItem("title","Mr");
				 }
				 else if($("#mrs").is(":checked")){
					window.localStorage.setItem("title","Mrs");
				 }

				 window.localStorage.setItem("firstName", $("#firstName").val());
				 window.localStorage.setItem("lastName", $("#lastName").val());
				 window.localStorage.setItem("emailId", $("#emailId").val());
				 window.localStorage.setItem("phoneNumber", $("#phoneNumber").val());
				 window.localStorage.setItem("zipcode", $("#zipcode").val());
				 window.localStorage.setItem("comments", $("#comments").val());
				 window.localStorage.setItem("bevComment", $("#beverageComment").val());					
				 if($("#fb").is(":checked"))
				 window.localStorage.setItem("fb", "yes");
				 else
				 window.localStorage.setItem("fb", "no");
				 if($("#yelp").is(":checked"))
				 window.localStorage.setItem("yelp", "yes");
				 else
				 window.localStorage.setItem("yelp", "no");
				 if($("#google").is(":checked"))
				 window.localStorage.setItem("google", "yes");
				 else
				 window.localStorage.setItem("google", "no");

				 if($("#thelist").val()=="coffee")
				 window.localStorage.setItem("chosenBev", "Coffee")
				 else if($("#thelist").val()=="tea")
				 window.localStorage.setItem("chosenBev", "Tea")
				 else if($("#thelist").val()=="iceTea")
				 window.localStorage.setItem("chosenBev", "Ice Tea")
				 else if($("#thelist").val()=="coke")
				 window.localStorage.setItem("chosenBev", "Coke")
				 else if($("#thelist").val()=="bubbleTea")
				 window.localStorage.setItem("chosenBev", "Bubble Tea")
			 		
				 window.open("D:\\MSIS\\Web Design\\Assignment\\Assignment_4_Tanmayee_Kalluri\\Assignment_4_Tanmayee_Kalluri\\Destination.html");
			} 
}