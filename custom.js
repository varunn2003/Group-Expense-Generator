function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
}
function setHeader(){
    var value = document.getElementById("name").value;
    document.getElementById("username").innerHTML = value; 
}
function change(){
 
    var newTitle = document.getElementById('inputTextField').value;
    if( newTitle.length==0 ){
        $('.alertError').show();
    return;
    }
    
    var title = document.getElementById('title');
    title.innerHTML = newTitle;
 }
  
 $('#inputTextField').keyup(function() {
     $('.alertError').hide();
 }); 
 noofrows=0;
    pros=[];
    total=0;
    avg=0;


    function isUnique(val){
      for(i=0;i<pros.length;i++){
        if(val==pros[i]){
          return true;
        }
      }return false;
    }


    function addrecord(){

      err=document.getElementById("error");
      id=document.getElementById("pro").value;
      pn=document.getElementById("name").value;
      pr=document.getElementById("price").value;
      if(!isUnique(id)){
        err.innerHTML=""
        noofrows+=1
        table=document.getElementById("mytable1");
        row=table.insertRow(noofrows);
        pro=row.insertCell(0)
        name1=row.insertCell(1)
        price=row.insertCell(2)
        pros.push([id,pn,pr])
        total+=parseInt(pr);
        pro.innerHTML=document.getElementById("pro").value
        name1.innerHTML=document.getElementById("name").value

        price.innerHTML=document.getElementById("price").value
      }
      else{
      err.innerHTML="product already exists";
      }
      
    }
    function findtotal(){
      document.getElementById("tot").innerHTML=parseInt(total);
    }
    function findavg(){
      document.getElementById("avg").innerHTML=parseInt(total/pros.length);
    }
 noOfRows=0
        function stu(){
            var a=document.getElementById("n2").value
            table=document.getElementById("mytab") 
            row=table.insertRow(noOfRows)
            col1=row.insertCell(0)
            col2=row.insertCell(1)
            col1.innerHTML=document.getElementById("n1").value
            col2.innerHTML=document.getElementById("n2").value
            table=document.getElementById("mytab1")
            row=table.insertRow(noOfRows)
            col1=row.insertCell(0)
            col2=row.insertCell(1)
            col1.innerHTML=document.getElementById("n1").value 
            col2.innerHTML=document.getElementById("n2").value 
        }
