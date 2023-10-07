window.addEventListener("scroll", () => {
   let scrolltop = document.getElementById("top");
   const scrollValue = window.scrollY;
   
   if (scrollY > 100) {
      scrolltop.style.display = "grid";
   } else {
      scrolltop.style.display = "none";
   }
});

 
var tablinks = document.getElementsByClassName("tab-links")
   var tabcontents = document.getElementsByClassName("tab-contents")

   function opentab(tabname){
      for(tablink of tablinks){
         tablink.classList.remove("active-links");
      }
      for(tabcontent of tabcontents){
         tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-links");
      document.getElementById(tabname).classList.add("active-tab");
   }


  

   function closemenu(){
      document.getElementById("sidemenu").style.right = "-200px";
   }
   
   function openmenu(){
      document.getElementById("sidemenu").style.right = "0px";
   }
