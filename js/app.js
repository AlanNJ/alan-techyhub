TweenMax.to(".land", 4, {
    delay: 1,
    top: "-110%",
    ease: Expo.easeInOut
})

TweenMax.from("h1", 3, {
    delay: 2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".text h2", 2,{
    delay:3,
    opacity:0,
    x:50,
    ease: Expo.easeInOut


})

TweenMax.from(".text p",3,{
    delay:4,
    opacity:0,
    x:100,
    ease:Expo.easeOut

})
TweenMax.from(".nav h2", 3,{
    delay:3,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})

TweenMax.from(".nav ion-icon", 3,{
    delay:3,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})

TweenMax.from(".button", 2,{
    delay:4.4,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})
TweenMax.from(".media  ul li",4,{
    delay:4,
    opacity:0,
    y:40,
    ease: "bounce.out"
})

TweenMax.from(".copyright", 5,{
    delay:4.4,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})

TweenMax.from(".event", 4, {
    delay:5,
    opacity:0,
    x:20,
    ease:Expo.easeOut
})

const learnMore = function(e){
    document.querySelector('.event').style.display = 'block';
    document.querySelector("#first").style.display = "none";
    
    window.scrollBy(0,828);
    document.body.style.background = "black";
    e.preventDefault();
    
    
    
}

const Undo = function(e){
    if(e.target.classList.contains('del')){
        e.target.parentElement.parentElement.style.display = 'none';
        document.querySelector('#first').style.display = 'inline-block'
        window.onscroll = function(){
            console.log(window.pageYOffset)    
        }
        e.preventDefault()
        
    }
}

const Premium = function(){
    document.querySelector(".notification").style.display = "flex";
    window.scrollBy(0,280)
    document.querySelector('#second').style.background = 'linear-gradient(135deg, rgb(106, 219, 157) 0%, rgb(23, 167, 88) 100%)';
    
}


document.querySelector("#first").addEventListener("click", learnMore)

document.body.addEventListener('click',Undo);

document.querySelector("#second").addEventListener('click', Premium)

    




