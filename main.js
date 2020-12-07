var name_of_fruit_array= []
 function submit(){

    var display_name= [] ;

     for(var i=1;i<=5;i++){
         var name_of_fruit=document.getElementById("name_of_fruit_"+i).value;
         name_of_fruit_array.push(name_of_fruit);
     }
     var length=name_of_fruit_array.length;
        
     for(var j= 0;j<length;j++)
     {
       display_name.push(""+name_of_fruit_array[j]+"</h4>");
     }
      
       document.getElementById("div1").innerHTML= display_name;

       var non_comma=display_name.join(" ");
       document.getElementById("div1").innerHTML= non_comma;
       document.getElementById("button1").style.display="none";
       document.getElementById("button2").style.display="inline-block";

 }

