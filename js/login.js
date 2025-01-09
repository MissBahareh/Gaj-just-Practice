// let changTab = [...document.querySelectorAll(".changTab")]
// changTab.map(function(changeD){
//     changeD.addEventListener("mouseenter",()=>{
//         // changeD.style.transform = "translateX(20px)"
//         // changeD.style.transition =".7s"

//     })
//     changeD.addEventListener("mouseleave",()=>{
//         // changeD.style.transform = "translateX(0)"
//         // changeD.style.transition =".7s"

//     })

// })
// let cover1 = document.getElementById("cover1")
// let cover2 = document.getElementById("cover2")
// let svgin = document.getElementById("svgin")
// let svgout = document.getElementById("svgout")
// let changTab = [...document.querySelectorAll(".changTab")]
// changTab.map(function(changeD){
//     changeD.addEventListener("click",(e)=>{
//         // console.log(e.target.id );
        
//         if(e.target.id === "coverin"){
//             cover2.style.display ="flex"
//             cover1.style.display ="none"
//             svgin.style.fill = "green"
//             svgout.style.fill = "white"
//         }
//         else if(e.target.id === "coverout"){
//             cover1.style.display ="flex"
//             cover2.style.display ="none"
//             svgin.style.fill = "white"
//             svgout.style.fill = "green"

//         }
        
        
        
//     })
// })
// #coverin
// #coverout

let cover1 = document.getElementById("cover1")
let login = document.getElementById("login")
let singout = document.getElementById("singout")
let btnChTab = [...document.querySelectorAll(".btnChTab")]
let loginTab = document.getElementById("loginTab")
let singoutTab = document.getElementById("singoutTab")
let backP = [...document.querySelectorAll("#backP")]
let backHome = document.getElementById("backHome")
let backBtn = document.querySelector(".backBtn")
let svgBackHome = document.querySelector("#svgBackHome")
let usernameo = document.getElementById("usernameo")
let Tusernameo = document.getElementById("Tusernameo")
let mobileo = document.getElementById("mobileo")

let username = document.getElementById("username")
let mobile = document.getElementById("mobile")


btnChTab.map(function(change){
    change.addEventListener("click",(e)=>{
        cover1.style.transform = "translateY(-100%)"
        cover1.style.transition ="1s"
        if(e.target.id === "login"){
            loginTab.style.display ="flex"
            singoutTab.style.display = "none"
            loginTab.style.transition ="1s"
            loginTab.style.transform = "translateY(0%)"
            singoutTab.style.transform = "translateY(0%)"


        }
        else if(e.target.id === "singout"){
            singoutTab.style.display = "flex"
            loginTab.style.display ="none"
            singoutTab.style.transition ="1s"
            singoutTab.style.transform = "translateY(0%)"
            loginTab.style.transform = "translateY(0%)"
            
            
        }
    })

})
backP.map(function(backPage){
    backPage.addEventListener("click",()=>{
        cover1.style.transform = "translateY(0%)"
        cover1.style.transition ="1s"
        singoutTab.style.transition ="1s"
        loginTab.style.transition ="1s"
        singoutTab.style.transform = "translateY(100%)"
        loginTab.style.transform = "translateY(100%)"

    })
    

})
backHome.addEventListener("mouseenter",()=>{
    backBtn.style.top ="-80px"
    backBtn.style.right ="-80px"
    backBtn.style.transition = ".5s"
    svgBackHome.style.fill ="white"
    svgBackHome.style.transition = ".7s"

})
backHome.addEventListener("mouseleave",()=>{
    svgBackHome.style.fill ="#85C441"
    backBtn.style.top ="-200px"
    backBtn.style.right ="-200px"
    backBtn.style.transition = ".5s"
})

mobileo.addEventListener("keydown",(e)=>{
    if(e.keyCode === 9 || e.keyCode === 13){
        if(mobileo.value.trim() !== ""){
            mobileo.style.boxShadow = "2px 2px 20px rgba(255, 255, 255, 0)"


        }
        else{
            mobileo.style.boxShadow = "2px 2px 20px red"


        }

    }
})
Tusernameo.addEventListener("keydown",(e)=>{
    if(e.keyCode === 9 || e.keyCode === 13 ){
      if(Tusernameo.value === usernameo.value){
        Tusernameo.style.boxShadow = "2px 2px 20px rgba(255, 255, 255, 0)"
        usernameo.style.boxShadow = "2px 2px 20px rgba(255, 255, 255, 0)"
        if(Tusernameo.value.trim() == "" && usernameo.value.trim() == "" && mobileo.value.trim() == ""){
            Tusernameo.style.boxShadow = "2px 2px 20px red"
            usernameo.style.boxShadow = "2px 2px 20px red"
            mobileo.style.boxShadow = "2px 2px 20px red"

        }
        if(Tusernameo.value == "" && usernameo.value == "" && mobileo.value == ""){
            Tusernameo.style.boxShadow = "2px 2px 20px red"
            usernameo.style.boxShadow = "2px 2px 20px red"
            mobileo.style.boxShadow = "2px 2px 20px red"

        }
      }
      else{
        usernameo.style.boxShadow = "2px 2px 20px rgba(255, 255, 255, 0)"
        Tusernameo.style.boxShadow = "2px 2px 20px red"
        mobileo.style.boxShadow = "2px 2px 20px red"

      }
    }

})

mobile.addEventListener("keydown",(e)=>{
    if(e.keyCode === 9 || e.keyCode === 13){
        if(mobile.value.trim() !== ""){
            mobile.style.boxShadow = "2px 2px 20px rgba(255, 255, 255, 0)"
        }
        else{
            mobile.style.boxShadow = "2px 2px 20px red"
        }
    }
})
username.addEventListener("keydown",(e)=>{
    if(e.keyCode === 9 || e.keyCode === 13){
        if(username.value.trim() !== ""){
            username.style.boxShadow = "2px 2px 20px rgba(255, 255, 255, 0)"
            
        }
        else{
            username.style.boxShadow = "2px 2px 20px red"
        }

    }
    

})
