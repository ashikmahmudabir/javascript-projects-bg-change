
// var select = document.getElementById("select");

// select.addEventListener("change",function(){
//     var main = document.getElementsByClassName("main")[0];
//     var val =this.value;
//     if(val==2){
//        main.style.background="red";
//     }else if(val==3){
//         main.style.background="blue";
//     }
//     else if(val==4){
//         main.style.background="crimson";
//     }
//     else if(val==5){
//         main.style.background="violet";
//     }else if(val==6){
//         main.style.background="green";
//     }else{
//         main.style.background="black";
//     }
    
//     })

var mainBtn = document.getElementsByClassName("btn-style");
var main = document.getElementsByClassName("main")[0];
var btn = document.getElementsByClassName("btn");

// var btn1 = document.getElementsByClassName("btn1")
// var btn2 = document.getElementsByClassName("btn2")
// var btn6 = document.getElementsByClassName("btn3")
// var btn4 = document.getElementsByClassName("btn4")
// var btn5 = document.getElementsByClassName("btn5")
// var btn6 = document.getElementsByClassName("btn6")
// var btn7 = document.getElementsByClassName("btn7")


function showPlease(){

    var hideMenu = document.getElementsByClassName("MyUl")[0];
    hideMenu.classList.toggle("showP")

}


btn[0].addEventListener("click",function(){
    main.style.background="black";
})

btn[1].addEventListener("click",function(){
    main.style.background="red";
})

btn[2].addEventListener("click",function(){
    main.style.background="green";
})

btn[3].addEventListener("click",function(){
    main.style.background="yellow";
})

btn[4].addEventListener("click",function(){
    main.style.background="crimson";
})

btn[5].addEventListener("click",function(){
    main.style.background="violet";
})
btn[6].addEventListener("click",function(){
    main.style.background="blue";
})
btn[7].addEventListener("click",function(){
    main.style.background="dodgerblue";
})