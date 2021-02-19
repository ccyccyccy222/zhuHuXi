const test = window.location.search;
// alert(test);
//获取当前id
let a=test.split("?id=");
console.log("test.split(?id=)");
console.log(a[1]);

//获取title
let divArray1=document.querySelectorAll(".abt-auth-content");
let h=divArray1[0].getElementsByTagName("h4");
console.log("getElementsByTagName(\"h4\")");
console.log(h);
//h[0]

console.log(store.getState());
console.log(store.getState().blogDetails);
// h[0].innerText=store.getState().blogDetails[a[1]-1].title;
// console.log(h[0].innerText);
// console.log("h[0].innerText");
//
// //获取content
// let divArray2=document.querySelectorAll(".comment-content");
// let p=divArray2[1].getElementsByTagName("p");
// console.log("getElementsByTagName(\"p\")");
// console.log(p);
// //h[0]
//
// let store = createStore(reducer);
// h[0].innerText=store.getState().blogDetails[a[1]-1].title;
// console.log(h[0].innerText);
// console.log("h[0].innerText");
