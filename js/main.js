let mainLi = [...document.querySelectorAll(".mainLi")]
let subAccess = document.getElementById("subAccess")
let subAccessInterDiv = document.getElementById("subAccessInterDiv")
let subAccessInterDivDetail = document.getElementById("subAccessInterDivDetail")
let subAccessUl = document.getElementById("subAccessUl")
let subAccessInterDivDetailSub = document.getElementById("subAccessInterDivDetailSub")
let scrollHeader = document.getElementById("scrollHeader")
subAccessUl.addEventListener("mouseenter",()=>{
    subAccessUl.style.top = "-43px"
    subAccessUl.style.transition = ".7s"
    subAccess.style.top ="150%" 
    subAccess.style.transition =".7s"
    subAccessInterDiv.style.display ="none"
    subAccessInterDivDetailSub.style.display ="none"
    subAccessInterDiv.style.transition ="1s"
})
subAccess.addEventListener("mouseleave",()=>{
    subAccessUl.style.position = "absolute"
    subAccessUl.style.width = "95%"
    subAccessUl.style.top = "43px"
    subAccess.style.top ="30%" 
    subAccess.style.backgroundColor ="#f0f3f600"
    subAccess.style.height = "0"
    subAccess.style.transition ="1s"
    subAccessInterDiv.style.transition ="1s"
    subAccessInterDiv.style.top ="40%"
    subAccessInterDiv.style.height ="12vh"
    subAccessInterDivDetail.style.display ="none"
})
mainLi.map(function(showSubLi){
    showSubLi.addEventListener("mouseenter",()=>{
        subAccess.style.height = "28vh"
        subAccess.style.transition ="1s"
        subAccess.style.backgroundColor ="#F0F3F6"
        subAccessInterDiv.style.top ="52%"
        subAccessInterDiv.style.transition ="1s"
        subAccessInterDiv.style.display ="flex"
        // subAccessInterDiv.style.backgroundColor ="blue"
        subAccessInterDiv.style.transition ="1s"
        subAccessInterDivDetail.style.display ="none"
        
    })

})
subAccessInterDiv.addEventListener("mouseenter",()=>{
    subAccess.style.height = "57vh"
    subAccessInterDiv.style.top ="25%"
    subAccessInterDivDetail.style.display ="flex"
    subAccessInterDivDetail.style.top ="46%"

})
window.addEventListener("scroll",()=>{
    
    let myScroll = Math.floor(window.scrollY)
    console.log(myScroll);
    if(myScroll>150){
        scrollHeader.style.display ="flex"
        
    }
    if(myScroll<150){
        scrollHeader.style.display ="none"
        
    }
})

















// mainLi.map(function(menuMain){
//     menuMain.addEventListener("mouseover",()=>{
//         subAccess.style.top ="200%"
//         subAccess.style.transition =".5s"
//     })

// })
// mainLi.map(function(menuMain){
//     menuMain.addEventListener("mouseleave",()=>{
//         subAccess.style.top ="-150%"
//         subAccess.style.transition =".5s"

//     })

// })