// document.getElementsByClassName("child-div-sect9").addEventListener("click", function(){
//     this.querySelector("p").style.display="block";
// })

//გამოაქ ყველა FAQ ელემენტი
var faqNum = document.querySelectorAll(".child-div-sect9");
//ეს ფორლუპია იმისთვის გვჭირდება, რომ ყველა დივზე დაჭერისას გაიმეოროს ერთიდა იგვე ბტრძანება: დააწერ და  გამოვა პარაგრაფი 
 for(let i = 0 ; i <faqNum.length ;i++){

    //ყველა ელემენტს დაამატებს კლიკზე ფუნქციას faqNum არის ცვლადი რომელიც მე-6 ხაზზე შევქმენით;
    faqNum[i].addEventListener("click", function(){

        // ეს იმის შვილია, არა რა მადონასი იმ კლასის 🙂 .child-div-sect9 ამის შვილი რადგანაცაა პარაგრაფი if-else ით გავუწერთ თუ არის დისფლეი ნან  გახდება 
        // დისფლეი ბლოკი, წინააღმდეგ შემთხვევაში გახდება  პირიქით
         if(this.querySelector("p").style.display=="block"){
            this.querySelector("p").style.display="none"
         }else{
            this.querySelector("p").style.display="block"
         }
     })
 }

