let mainLi = [...document.querySelectorAll(".mainLi")]
let subAccess = document.getElementById("subAccess")
let subAccessInterDiv = document.getElementById("subAccessInterDiv")
let subAccessInterDivDetail = document.getElementById("subAccessInterDivDetail")
let subAccessUl = document.getElementById("subAccessUl")
let subAccessInterDivDetailSub = document.getElementById("subAccessInterDivDetailSub")
let scrollHeader = document.getElementById("scrollHeader")
let menuBar = document.getElementById("menuBar")
let clickSpan = document.getElementById("clickSpan")
let divSr1 = document.getElementById("divSr1")
let d2 = document.getElementById("d2")
let d3 = document.getElementById("d3")
let imgesss = document.getElementById("imges")
let mainImg = document.getElementById("mainImg")
let lowHeight = document.getElementById("lowHeight")
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
    // console.log(myScroll);
    if(myScroll>130){
        scrollHeader.style.display ="flex"
        divSr1.style.height = "45vh"
        divSr1.style.top = "-22%"
        d2.style.top ="24%"
        d3.style.top ="35%"
        lowHeight.style.display = "none"
        imgesss.style.display = "flex"
        mainImg.style.display = "flex"
        
    }
    if(myScroll<130){
        scrollHeader.style.display ="none"
        // menuBar.style.paddingTop ="0"
        
    }
    if(myScroll>300){
        divSr1.style.top = "-22%"
        divSr1.style.height = "30vh"
        divSr1.style.borderRadius = "20px"
        divSr1.style.transition = ".7s"
        d2.style.transition = ".7s"
        d2.style.top ="9%"
        d3.style.transition = ".7s"
        d3.style.top ="20%"
        d3.style.height = "25vh"
        lowHeight.style.display = "flex"
        imgesss.style.display = "none"
        mainImg.style.display = "none"
        
        
    }
    if(myScroll<200){
        divSr1.style.top = "-27%"
        divSr1.style.height = "45vh"
        divSr1.style.borderRadius = "30px"
        divSr1.style.transition = ".7s"
        d2.style.transition = ".7s"
        d2.style.top ="20%"
        d3.style.transition = ".7s"
        d3.style.top ="32%"
        d3.style.height = "28vh"
        lowHeight.style.display = "none"
        imgesss.style.display = "flex"
        mainImg.style.display = "flex"
        
        
    }
    if(myScroll>1350){
        divSr1.style.opacity = "0"
        // divSr1.style.height = "30vh"
        // divSr1.style.borderRadius = "20px"
        divSr1.style.transition = ".7s"
        d2.style.transition = ".7s"
        d2.style.opacity = "0"
        d3.style.transition = ".7s"
        d3.style.opacity = "0"
        // d3.style.height = "25vh"
    }
    if(myScroll<1350){
        divSr1.style.opacity = "1"
        // divSr1.style.height = "30vh"
        // divSr1.style.borderRadius = "20px"
        divSr1.style.transition = ".7s"
        d2.style.transition = ".7s"
        d2.style.opacity = "1"
        d3.style.transition = ".7s"
        d3.style.opacity = "1"
        // d3.style.height = "25vh"
    }
        
        
})