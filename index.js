
// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if(window.localStorage.getItem("color")){
//   //1=if color exqute
//   exp.style.backgroundColor =window.localStorage.getItem("color")
//    //2=remove active class for lis
//    lis.forEach((li) => {
//     li.classList.remove("active");
//    });
//    //3= add active class to current element
//    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active") ;
// }
// lis.forEach((li) => {
//   li.addEventListener("click",(e) => {
//    // console.log(e.currentTarget.dataset.color);
//    //remove active class for lis
//    lis.forEach((li) => {
//     li.classList.remove("active");
//    });
//     //add active class to current element
//     e.currentTarget.classList.add("active")
//     //add current  class to local storage
//     window.localStorage.setItem("color",e.currentTarget.dataset.color);
//     //change div backcolor
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
// });

// });


let lis = document.querySelectorAll(".wal1 ul li");
let exp = document.querySelector(".wal1 .experiment");
if(window.localStorage.getItem("color")){
  //1=if color exqute
  exp.style.backgroundColor =window.localStorage.getItem("color")
   //2=remove active class for lis
   lis.forEach((li) => {
    li.classList.remove("active");
   });
   //3= add active class to current element
   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active") ;
}

lis.forEach((li) => {
  li.addEventListener("click",(e) => {
   // console.log(e.currentTarget.dataset.color);
   //remove active class for lis
   lis.forEach((li) => {
    li.classList.remove("active");
   });
    //add active class to current element
    e.currentTarget.classList.add("active")
    //add current  class to local storage
    window.localStorage.setItem("color",e.currentTarget.dataset.color);
    //change div backcolor
    exp.style.backgroundColor = e.currentTarget.dataset.color;
});
});

let liff = document.querySelectorAll(".wal2 ul li");
let expf = document.querySelector("p");
if(window.localStorage.getItem("font")){
  //1=if color exqute
  expf.style.fontFamily  =window.localStorage.getItem("font")
   //2=remove active class for lis
   liff.forEach((li) => {
    li.classList.remove("active1");
   });
   //3= add active class to current element
  document.querySelector(`[data-fonts="${window.localStorage.getItem("font")}"]`).classList.add("active1") ;
}

liff.forEach((li) => {
  li.addEventListener("click",(e) => {
   // console.log(e.currentTarget.dataset.fonts);
    //remove active class for lis
    liff.forEach((li) => {
      li.classList.remove("active1");
     });
     //add active class to current element
     e.currentTarget.classList.add("active1")
    //add current  class to local storage
    window.localStorage.setItem("font",e.currentTarget.dataset.fonts);
    //change div backcolor
    expf.style.fontFamily = e.currentTarget.dataset.fonts;
});
});

let lifsize = document.querySelectorAll(".wal3 ul li");
let exps = document.querySelector("p");
if(window.localStorage.getItem("size")){
  //1=if color exqute
  exps.style.fontSize  =window.localStorage.getItem("size")
   //2=remove active class for lis
   lifsize.forEach((li) => {
    li.classList.remove("active2");
   });
   //3= add active class to current element
  document.querySelector(`[data-font="${window.localStorage.getItem("size")}"]`).classList.add("active2") ;
}

lifsize.forEach((li) => {
  li.addEventListener("click",(e) => {
   //console.log(e.currentTarget.dataset.font);
    //remove active class for lis
    lifsize.forEach((li) => {
      li.classList.remove("active2");
     });
     //add active class to current element
     e.currentTarget.classList.add("active2")
    //add current  class to local storage
    window.localStorage.setItem("size",e.currentTarget.dataset.font);
    //change div backcolor
    expf.style.fontSize = e.currentTarget.dataset.font;
});
});

