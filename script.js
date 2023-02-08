var tablinks=document.getElementsByClassName("tab-links");
var tabcontent=document.getElementsByClassName("tab-contents");

function showtab(tabname){
    //first remove active classes from all
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontents of tabcontent){
        tabcontents.classList.remove("active-tab");
    }
    //add active classes in the current
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab")
}


// ----------menu----------
var side =document.getElementById("side-menu");

function openbar(){
    side.style.right="0";
}

function closebar(){
    side.style.right="-250px";
}


