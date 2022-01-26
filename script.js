// document.getElementsByClassName("child-div-sect9").addEventListener("click", function(){
//     this.querySelector("p").style.display="block";
// })

//გამოაქ ყველა ფაქ 
var faqNum = document.querySelectorAll(".child-div-sect9");
//ეს ფორლუპია
 for(let i = 0 ; i <faqNum.length ;i++){

    //ყველა ელემენტს დაამატებს კლიკზე ფუნქციას
    faqNum[i].addEventListener("click", function(){

        // ეს იმის შვილია, არა რა მადონასი იმ კლასის 🙂
         if(this.querySelector("p").style.display=="block"){
            this.querySelector("p").style.display="none"
         }else{
            this.querySelector("p").style.display="block"
         }
     })
 }

 