		 window.onload=function(){
			 document.getElementById("bevTxt").style.display="none";
			 document.getElementById("fn").style.display="none";
			 document.getElementById("ln").style.display="none";
			 document.getElementById("em").style.display="none";
			 document.getElementById("ph").style.display="none";
			 document.getElementById("zc").style.display="none";
			 document.getElementById("cm").style.display="none";
			 document.getElementById("bcm").style.display="none";
			 document.getElementById("ti").style.display="none";
			 document.getElementById("cb").style.display="none";
		 }
		 function validateTitle(){
			 if(document.getElementById("miss").checked==true || document.getElementById("mr").checked==true || document.getElementById("mrs").checked==true){
				document.getElementById("ti").style.display="none";
			 }
		 }
		 function validateBeverageComment(){
			 if(document.getElementById("zipcode").value==""){
				document.getElementById("zc").style.display="block";
			  document.getElementById("zc").style.color="red";
			 }
			 if(event.target.value==""){
			 document.getElementById("bcm").style.display="block";
			 document.getElementById("bcm").style.color="red";
			 }
			 else
			 document.getElementById("bcm").style.display="none";
		 }
		 function validateFirstName(){
			 if(document.getElementById("miss").checked==false && document.getElementById("mr").checked==false && document.getElementById("mrs").checked==false){
				document.getElementById("ti").style.display="block";
			  document.getElementById("ti").style.color="red";
			 }
			 if(event.target.value==""){
			 document.getElementById("fn").style.display="block";
			 document.getElementById("fn").style.color="red";
			 }
			 else
			 document.getElementById("fn").style.display="none";
		 }
		 function validateLastName(){
			 if(document.getElementById("firstName").value==""){
			 document.getElementById("fn").style.display="block";
			 document.getElementById("fn").style.color="red";
			 }
			 if(event.target.value==""){
			 document.getElementById("ln").style.display="block";
			 document.getElementById("ln").style.color="red";
			 }
			 else
			 document.getElementById("ln").style.display="none";
		 }
		 function validateComment(){
			 if(document.getElementById("fb").checked==false && document.getElementById("google").checked==false && document.getElementById("yelp").checked==false){
				document.getElementById("cb").style.display="block";
			  document.getElementById("cb").style.color="red";
			 }
			if(event.target.value==""){
			 document.getElementById("cm").style.display="block";
			 document.getElementById("cm").style.color="red";
			 }
			 else
			 document.getElementById("cm").style.display="none";
		 }
	   function validatePhoneNumber(){
			 if(document.getElementById("emailId").value==""){
				document.getElementById("em").style.display="block";
			  document.getElementById("em").style.color="red";
			 }
			var ph = event.target.value;
			var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  			if(ph.match(phoneno)) {
					document.getElementById("phoneNumber").style.color="black";
					document.getElementById("ph").style.display="none";
  			}
  			else {
				document.getElementById("phoneNumber").style.color="red";
				document.getElementById("ph").style.display="block";
			  document.getElementById("ph").style.color="red";
  			}
	   }
	   function validateZipCode(){
			 if(document.getElementById("phoneNumber").value==""){
				document.getElementById("ph").style.display="block";
			  document.getElementById("ph").style.color="red";
			 }
			var zip = event.target.value;
  			if(zip.length==6) {
					document.getElementById("zipcode").style.color="black";
					document.getElementById("zc").style.display="none";
  			}
  			else {
				document.getElementById("zipcode").style.color="red";
				document.getElementById("zc").style.display="block";
			  document.getElementById("zc").style.color="red";
  			}
	   }
	   function validateEmail(){
		var email = event.target.value;
		var em = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  			if(document.getElementById("lastName").value==""){
					document.getElementById("ln").style.display="block";
			    document.getElementById("ln").style.color="red";
				}
				if(email.match(em)) {
					document.getElementById("emailId").style.color="black";
					document.getElementById("em").style.display="none";
  			}
  			else {
				document.getElementById("emailId").style.color="red";
				document.getElementById("em").style.display="block";
			  document.getElementById("em").style.color="red";
  			}
		 }

		 function validateBox(){
			 if(document.getElementById("beverageComment").value==""){
				document.getElementById("bcm").style.display="block";
			  document.getElementById("bcm").style.color="red";
			 }
			if(document.getElementById("fb").checked==true || document.getElementById("google").checked==true || document.getElementById("yelp").checked==true){
				document.getElementById("cb").style.display="none";
			 }
		 }

	   function validate(){
			 if((document.getElementById("miss").checked==false && document.getElementById("mr").checked==false && document.getElementById("mrs").checked==false) || 
			 document.getElementById("firstName").value=="" || document.getElementById("lastName").value=="" ||
			 document.getElementById("emailId").value=="" || document.getElementById("phoneNumber").value=="" ||
			 document.getElementById("zipcode").value=="" || document.getElementById("comments").value=="" ||
			 (document.getElementById("fb").checked==false && document.getElementById("google").checked==false && document.getElementById("yelp").checked==false) ||
			 (document.getElementById("miss").checked==false && document.getElementById("mr").checked==false && document.getElementById("mrs").checked==false) ||
			 document.getElementById("beverageComment").value==""){
			 if(document.getElementById("miss").checked==false && document.getElementById("mr").checked==false && document.getElementById("mrs").checked==false)
		   alert('Please choose title!')

		   if(document.getElementById("firstName").value=="")
		   alert('Please enter your first name!')

		   if(document.getElementById("lastName").value=="")
		   alert('Please enter your last name!')

		   if(document.getElementById("emailId").value=="")
		   alert('Please enter your Email ID!')

		   if(document.getElementById("phoneNumber").value=="")
		   alert('Please enter your phone number!')

		   if(document.getElementById("zipcode").value=="")
		   alert('Please enter your zip code!')

		   if(document.getElementById("comments").value=="")
		   alert('Please enter a comment!')

		   if(document.getElementById("fb").checked==false && document.getElementById("google").checked==false && document.getElementById("yelp").checked==false)
			 alert('Please let us know how you heard about us!')
			 
			 if(document.getElementById("beverageComment").value=="")
			 alert('Please enter a beverage comment!')
		}
			else{
			 
				 if(document.getElementById("miss").checked==true)
				 window.localStorage.setItem("title","Miss");
				 else if(document.getElementById("mr").checked==true){
					window.localStorage.setItem("title","Mr");
				 }
				 else if(document.getElementById("mrs").checked==true){
					window.localStorage.setItem("title","Mrs");
				 }

				 window.localStorage.setItem("firstName", document.getElementById("firstName").value);
				 window.localStorage.setItem("lastName", document.getElementById("lastName").value);
				 window.localStorage.setItem("emailId", document.getElementById("emailId").value);
				 window.localStorage.setItem("phoneNumber", document.getElementById("phoneNumber").value);
				 window.localStorage.setItem("zipcode", document.getElementById("zipcode").value);
				 window.localStorage.setItem("comments", document.getElementById("comments").value);
				 window.localStorage.setItem("bevComment", document.getElementById("beverageComment").value);					
				 if(document.getElementById("fb").checked==true)
				 window.localStorage.setItem("fb", "yes");
				 else
				 window.localStorage.setItem("fb", "no");
				 if(document.getElementById("yelp").checked==true)
				 window.localStorage.setItem("yelp", "yes");
				 else
				 window.localStorage.setItem("yelp", "no");
				 if(document.getElementById("google").checked==true)
				 window.localStorage.setItem("google", "yes");
				 else
				 window.localStorage.setItem("google", "no");

				 if(document.getElementById("thelist").value=="coffee")
				 window.localStorage.setItem("chosenBev", "Coffee")
				 else if(document.getElementById("thelist").value=="tea")
				 window.localStorage.setItem("chosenBev", "Tea")
				 else if(document.getElementById("thelist").value=="iceTea")
				 window.localStorage.setItem("chosenBev", "Ice Tea")
				 else if(document.getElementById("thelist").value=="coke")
				 window.localStorage.setItem("chosenBev", "Coke")
				 else if(document.getElementById("thelist").value=="bubbleTea")
				 window.localStorage.setItem("chosenBev", "Bubble Tea")
			 		
				 window.open("file:///D:/MSIS/Web%20Design/Assignment/Assignment_Questions/Assignment%204/Destination.html");	 
			}
			 
	   }

		function resetForm(){
			document.getElementById("miss").checked=false;
			document.getElementById("mr").checked=false;
			document.getElementById("mrs").checked=false;
			document.getElementById("firstName").value="";
			document.getElementById("lastName").value="";
			document.getElementById("emailId").value="";
			document.getElementById("phoneNumber").value="";
			document.getElementById("zipcode").value="";
			document.getElementById("comments").value="";
			document.getElementById("fb").checked=false;
			document.getElementById("yelp").checked=false;
			document.getElementById("google").checked=false;
		}

		function selectBeverage()
		{
			document.getElementById("bev").innerHTML = "";
				var checkbox=document.createElement('input');
			  checkbox.type="checkbox";
			  checkbox.name="check";
			  checkbox.value="checked";
			  checkbox.id="check";
				checkbox.onclick=function(){
					if(document.getElementById("check").checked){;
					document.getElementById("bevTxt").style.display="inline";
					}
					else{
						document.getElementById("bevTxt").style.display="none";
					}
				}
	
	  	var x = document.createElement("LABEL");
	  	x.id="lab";
	  	var b = document.createElement("br");
			var t;
	  	if(document.getElementById("thelist").value=='coffee'){
			t = document.createTextNode("Large- $4.75");
			  x.setAttribute("for", "coffee");
			  x.appendChild(t);
			  document.getElementById("myForm").insertBefore(x,document.getElementById("bev"));
			  document.getElementById("myForm").insertBefore(checkbox,document.getElementById("lab"));
			  document.getElementById("myForm").insertBefore(b,document.getElementById("zip"));
	
			}
		else if(document.getElementById("thelist").value=='tea'){
			t = document.createTextNode("Small- $2.15");
			  x.setAttribute("for", "tea");
			  x.appendChild(t);
			  document.getElementById("myForm").insertBefore(x,document.getElementById("bev"));
			  document.getElementById("myForm").insertBefore(checkbox,document.getElementById("lab"));
			  document.getElementById("myForm").insertBefore(b,document.getElementById("zip"));
			}	  
		else if(document.getElementById("thelist").value=='coke'){
			t = document.createTextNode("Can- $3.75");
			  x.setAttribute("for", "coke");
			  x.appendChild(t);
			  document.getElementById("myForm").insertBefore(x,document.getElementById("bev"));
			  document.getElementById("myForm").insertBefore(checkbox,document.getElementById("lab"));
			  document.getElementById("myForm").insertBefore(b,document.getElementById("zip"));
			}	
		else if(document.getElementById("thelist").value=='bubbleTea'){
			t = document.createTextNode("Regular- $5.25");
			  x.setAttribute("for", "bubbleTea");
			  x.appendChild(t);
			  document.getElementById("myForm").insertBefore(x,document.getElementById("bev"));
			  document.getElementById("myForm").insertBefore(checkbox,document.getElementById("lab"));
			  document.getElementById("myForm").insertBefore(b,document.getElementById("zip"));
			}	
		else if(document.getElementById("thelist").value=='iceTea'){
			t = document.createTextNode("Glass Bottle- $2.98");
			  x.setAttribute("for", "iceTea");
			  x.appendChild(t);
			  document.getElementById("myForm").insertBefore(x,document.getElementById("bev"));
			  document.getElementById("myForm").insertBefore(checkbox,document.getElementById("lab"));
			  document.getElementById("myForm").insertBefore(b,document.getElementById("zip"));
			}
		}
