function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

window.onload=function(){
  document.getElementById("button").disabled=true;
  document.getElementById("button").style.background="gray";
  document.getElementById('dropDownTextArea0').style.display="none";
  document.getElementById('dropDownTextArea1').style.display="none";
  document.getElementById('dropDownTextArea2').style.display="none";

}
function addStudent(){
 var tab= document.getElementById("myTable");

  var checkbox=document.createElement('input');
  checkbox.type="checkbox";
  checkbox.name="check";
  checkbox.value="checked";
  checkbox.id="check"//here
  checkbox.onclick=function(){
    var butt=document.createElement("input");
  butt.type="button";
  butt.name="butt";
  butt.value="butt";
  butt.id="butt";
 
    if(this.checked == false){
      this.parentNode.parentNode.style.background="white";
      this.parentNode.parentNode.cells[8].children[0].hidden=true;
    }
    if(this.checked == true){
      this.parentNode.parentNode.style.background="yellow";
      var butt=document.createElement("input");
      butt.type="button";
      butt.name="butt";
      butt.value="Delete";
      butt.id="butt"
      butt.onclick=function (){
        var i= this.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i);
         
       }
       this.parentNode.parentNode.cells[8].appendChild(butt);
}
var counter=0;

      var count=document.getElementsByName("check");
      
      for(var i=0;i<count.length;i++){
        if(document.getElementsByName("check").item(i).checked== true){
        counter++;
        break;
        }
      }
      if(counter>0){
        document.getElementById("button").disabled=false;
        document.getElementById("button").style.background="orange";
      }
      else{
        document.getElementById("button").disabled=true;
        document.getElementById("button").style.background="gray";
      }
  }

  var img= document.createElement('img');
  var nl = document.createElement('br');
  
  var newRow1= tab.insertRow(-1);
  var cell0= newRow1.insertCell(0);
  var rowCont0 = document.createTextNode("");
  cell0.appendChild(checkbox);
  cell0.appendChild(nl);
  cell0.appendChild(img);

  img.src="down.png";
  img.style.width="25px";
  img.onclick=function(){
    if(newRowAdvisor.style.display == '')
    newRowAdvisor.style.display="none";
  else 
    newRowAdvisor.style.display='';
  }

  var cell1= newRow1.insertCell(1);
  cell1.appendChild(document.createTextNode('Student 4'));

  var cell2= newRow1.insertCell(2);
  let rowCont2 = document.createTextNode('Teacher 4');
  cell2.appendChild(rowCont2);

  var cell3= newRow1.insertCell(3);
  cell3.appendChild(document.createTextNode('Approved'));

  var cell4= newRow1.insertCell(4);
  cell4.appendChild(document.createTextNode('Fall'));

  var cell5= newRow1.insertCell(5);
  cell5.appendChild(document.createTextNode('TA'));

  var cell6= newRow1.insertCell(6);
  cell6.appendChild(document.createTextNode('34489'));

  var cell7= newRow1.insertCell(7);
  cell7.appendChild(document.createTextNode('90%'));

  var cell8= newRow1.insertCell(8);
  var newRowAdvisor= tab.insertRow(-1);
  var cell0= newRowAdvisor.insertCell(0);
  cell0.colSpan="8";
  cell0.name="dropDownTextArea"
  cell0.appendChild(document.createTextNode('Advisor:')); 
  cell0.appendChild(document.createElement('br'));
  cell0.appendChild(document.createElement('br'));
  cell0.appendChild(document.createTextNode('Award Details'));
  cell0.appendChild(document.createElement('br'));
  cell0.appendChild(document.createTextNode('Summer 1-2014(TA)'));
  cell0.appendChild(document.createElement('br'));
  cell0.appendChild(document.createTextNode('Budget Number:'));
  cell0.appendChild(document.createElement('br'));
  cell0.appendChild(document.createTextNode('Tuition Number:'));
  cell0.appendChild(document.createElement('br'));
  cell0.appendChild(document.createTextNode('Comments:'));
  cell0.appendChild(document.createElement('br'));
  cell0.appendChild(document.createElement('br'));
  cell0.appendChild(document.createTextNode('Award Status:'));
  cell0.appendChild(document.createElement('br'));
  cell0.appendChild(document.createElement('br'));
  cell0.appendChild(document.createElement('br'));  
}

function checkboxSelection(r){
  var butt=document.createElement("input");
  butt.type="button";
  butt.name="butt";
  butt.value="butt";
  butt.id="butt";
 
    if(r.checked == false){
    r.parentNode.parentNode.style.background="white";
    r.parentNode.parentNode.cells[8].children[0].hidden=true;
    }
    if(r.checked == true){
      r.parentNode.parentNode.style.background="yellow";
      var butt=document.createElement("input");
      butt.type="button";
      butt.name="butt";
      butt.value="Delete";
      butt.id="butt"
      butt.onclick=function (){
        var i= this.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i);
         
       }
      r.parentNode.parentNode.cells[8].appendChild(butt);
}
var counter=0;

      var count=document.getElementsByName("check");
      
      for(var i=0;i<count.length;i++){
        if(document.getElementsByName("check").item(i).checked== true){
        counter++;
        break;
        }
      }
      if(counter>0){
        document.getElementById("button").disabled=false;
        document.getElementById("button").style.background="orange";
      }
      else{
        document.getElementById("button").disabled=true;
        document.getElementById("button").style.background="gray";
      }
}

function collapseRow(t){
  if(document.getElementById("dropDownTextArea"+t).style.display == '')
  document.getElementById("dropDownTextArea"+t).style.display="none";
  else 
  document.getElementById("dropDownTextArea"+t).style.display='';
}

function deleteRow(r){
 var i= r.parentNode.parentNode.rowIndex;
 document.getElementById("myTable").deleteRow(i);
}