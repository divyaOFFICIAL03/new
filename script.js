
var divmain= document.createElement("div");
divmain.setAttribute("id","full")
var title=document.createElement("lable");
title.setAttribute("id","title")
title.innerHTML="You Want Book !!"
var br0= document.createElement("br");
var div= document.createElement("div");
var lab1=document.createElement("lable");
lab1.innerHTML="Enter : Sample(name or title or author name)"
lab1.setAttribute("id","lable")
var br1= document.createElement("br");
var input1=document.createElement("input");
input1.style.height="25px"
input1.setAttribute("id","input")
input1.style.borderRadius="15px"
var btn1=document.createElement("button");

btn1.setAttribute("id","btn")
btn1.addEventListener("click",f2)
btn1.innerHTML="Search";
var br01= document.createElement("br");
var result=document.createElement("lable");
result.innerHTML="Result :"
result.setAttribute("id","lable")








div.append(title,br0,lab1,br1,input1,btn1,br01,result)
divmain.append(div)
document.body.append(divmain)

    
    async function f2 (){
        try {
            var people1= document.getElementById("input").value
        var hh=people1
     
        var res = await fetch("https://www.anapioficeandfire.com/api/characters?page=10&pageSize=20");
        
        var res2 = await res.json();
            var hh=people1
            
        res2.map((x)=>{
            if ( "name" === hh || "titles"===hh ){       
            var br=document.createElement("br")
            var res2=document.createElement("label")
            res2.setAttribute("id","value");
            res2.innerHTML=`Author Name:${x.name}`
            var br2=document.createElement("br")
            var res3=document.createElement("label")
            res3.innerHTML=`Book title :${x.titles}`
            res3.setAttribute("id","value");
            var br3=document.createElement("br")
            var res4=document.createElement("label")
            res4.innerHTML=`Book culture :${x.culture}`
            var br4=document.createElement("br")
            var res5=document.createElement("label")
            res4.setAttribute("id","value");
            res5.innerHTML=`Author gender :${x.gender}`
            res5.setAttribute("id","value");
            
            div.append(br,res2,br2,res3,br3,res4,br4,res5)
        }else{
            
                if(x.name==hh){
                    var br5=document.createElement("br")
                    var res6=document.createElement("label")
                    res6.innerHTML=`Author Name :${x.name}`;
                    res6.setAttribute("id","value");
                    var br6=document.createElement("br");
                    var res7=document.createElement("label")
                    res7.innerHTML=`Book title :${x.titles}`
                    res7.setAttribute("id","value");
                    div.append(br5,res6,br6,res7)
                }
            
        }
     })
          
         
        
        
    
  
            
        } catch (error) {
            console.log(error)
        }  
 }
