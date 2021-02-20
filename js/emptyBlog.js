const test = window.location.search;
// alert(test);
//获取当前id
let a=test.split("?id=");
console.log("test.split(?id=)");
console.log(a[1]);

//获取title
let divArray1=document.querySelectorAll(".about-author");
let h=divArray1[0].getElementsByTagName("h4");
console.log("getElementsByTagName(\"h4\")");
console.log(h);
//h[0]

const storage = window.sessionStorage;
let str1=storage.getItem("title");
let array1=str1.split(";");
let str2=storage.getItem("content");
let array2=str2.split(";");
console.log("array1[a[1]] array2[a[1]]");
console.log(array1[a[1]]+" "+array2[a[1]]);
// console.log(array1.split(";"));
// let array2;
// for(let i=0;i<array1.length;i++){
//     console.log("array1["+i+"].split(\";\")");
//     console.log(array1[i].split(";"));
//     array2[i]=array1[i].split(";");
//     console.log("array2["+i+"]");
//     console.log(array2[i]);
// }
// for(let i=0;i<array2.length;i++){
//     console.log("array2[i].split(\"title=\")[1]");
//     console.log(array2[i].split("title=")[1]);
// }
// console.log(store.getState());
// console.log(store.getState().blogDetails);
h[0].innerText=array1[a[1]];
console.log(h[0].innerText);
console.log("h[0].innerText");

//获取content
let divArray2=document.querySelectorAll(".comment-content");
let p=divArray2[1].getElementsByTagName("p");
console.log("getElementsByTagName(\"p\")");
console.log(p[1]);
p[1].innerText=array2[a[1]];

//修改评论数
let liLocation = document.getElementById("comment1");
let arraySpan=liLocation.getElementsByTagName("span");
// console.log("arraySpan");
// console.log(arraySpan);
// console.log("arraySpan[1].innerText");
// console.log(arraySpan[1].innerText);
// let number=parseInt(arraySpan[1].innerText);
// number+=1;
arraySpan[1].innerText="0";

