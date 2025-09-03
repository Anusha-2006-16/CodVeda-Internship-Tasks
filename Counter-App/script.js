let val=document.querySelector(".val");
let incre=document.querySelector(".increment");
let decr=document.querySelector(".decrement");
let reset=document.querySelector(".reset");


let arr=JSON.parse(localStorage.getItem("counterHistory")) || [];
let num=arr.length>0?arr[arr.length-1]:0;
val.innerHTML=num;


incre.addEventListener("click",()=>{
      num+=1;
    val.innerHTML=num;
    arr.push(num);
    localStorage.setItem("counterHistory",JSON.stringify(arr));
})
decr.addEventListener("click",()=>{
    if(num<=0)
    {
        alert("Counter cannot cannot go below zero");
        val.innerHTML=`${0}`;
        return;
    }
   else{
     num-=1;
     val.innerHTML=num;
    
    arr.push(num);
    localStorage.setItem("counterHistory",JSON.stringify(arr));
   }
})
reset.addEventListener("click",()=>{
    num=0;
    val.innerHTML=num;
    arr.push(num);
    localStorage.setItem("counterHistory",JSON.stringify(arr));
})