//Declares all heading offest 
let myInterest = document.querySelector(".interest").offsetTop;
let myExperiance = document.querySelector(".experiance").offsetTop;
let myGallery = document.querySelector(".gallery").offsetTop;

//check the index of the clicked
var g = document.querySelector(".navbar-nav");
for (var i = 0, len = g.children.length; i < len; i++)
{
    (function(index){ g.children[i].onclick = function(){
        //Check where to scroll if the button clicked
        if(index === 0){window.scrollTo({top: myInterest, behavior: 'smooth'})}
        else if (index === 1){window.scrollTo({top: myExperiance, behavior: 'smooth'})}
        else {window.scrollTo({top: myGallery, behavior: 'smooth'})}
    }})(i);
}