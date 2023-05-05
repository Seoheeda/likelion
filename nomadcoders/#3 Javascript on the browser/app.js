
// >> getElementById
// const h1 = document.getElementById("h1");
// console.dir(h1);

// console.log(h1.id);
// console.log(h1.className);


// >> h1 does not exist. cannot get the innerText of null. 

// const h1 = document.getElementById("something");
// h1.innerText = "Got you!"

// console.log(h1.className)


const h1 = document.querySelector("div.hello:first-child h1");

 
// console.log(h1)

// h1.style.color = "blue"


// function handleh1Click(){
//     console.log("h1 was clicked!")
// }

// h1.addEventListener("click", handleh1Click);


// console.dir(h1)

// function handleh1Click(){
//     const currentColor = h1.style.color;
//     let newColor; //let can be updated
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }


// function handleh1Click(){
//     const clickedClass = "active";
//     if(h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }

// h1.addEventListener("click", handleh1Click);


function handleh1Click(){
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleh1Click);


// function handleMouseEnter(){
//     h1.innerText="Mouse is here!";
// }

// h1.addEventListener("mouseenter",handleMouseEnter);

// function handleMouseLeave(){
//     h1.innerText = "Mouse is gone!";
// }

// h1.addEventListener("mouseleave",handleMouseLeave);


// h1.onclick = handleh1Click;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;


// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// window.addEventListener("resize", handleWindowResize);

// function handleWindowCopy(){
//     alert("copier!");
// }

// window.addEventListener("copy", handleWindowCopy);


// function handleWindowOffline(){
//     alert("SOS no WIFI!");
// }

// window.addEventListener("offline", handleWindowOffline);

// function handleWindowOnline(){
//     alert("ALL GOOD!")
// }

// window.addEventListener("online", handleWindowOnline);
