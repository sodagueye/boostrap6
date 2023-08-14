// header Scroll
let nav =document.querySelector(".navbar");
windows.conscroll=function(){
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
        
   
}
// nav hide
let navBar=document.querySelectorAll("nav.link");
let navCollapse =document.querySelector(".navbar-collapse.collapse")