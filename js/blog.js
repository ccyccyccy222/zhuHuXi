// urlinfo = window.location.href;  //获取当前页面的url
// console.log(urlinfo)
// len = urlinfo.split("?");//获取url的长度
// newsidinfo = len[1];//取出参数字符串 这里会获得类似“id=1”这样的字符串
// console.log(newsidinfo);


// submit=()=>{

//页面预处理
const storage = window.sessionStorage;
let str0=storage.getItem("title");
if(str0!=null){
    let array0=str0.split(";");
    //计算存储字段中title的个数（id），前面是个空格
    for(let i=1;i<array0.length;i++){
        const sourceNode0 = document.querySelectorAll(".col-md-6"); // 获得被克隆的节点对象
        //前面有2个.col-md-6类，所以这一个的下标为2
        const clonedNode0 = sourceNode0[3].cloneNode(true); // 克隆节点

        let aArray=clonedNode0.getElementsByTagName("a");
        console.log("aArray[0]    aArray[1]");
        console.log(aArray[0]+"  "+aArray[1]);
        console.log(aArray[0].href+"  "+aArray[1].href);
        clonedNode0.getElementsByTagName("a")[0].href="blog-details-empty.html?id="+i;
        clonedNode0.getElementsByTagName("a")[1].href="blog-details-empty.html?id="+i;

        clonedNode0.getElementsByTagName("h3")[0].innerText=array0[i];
        console.log("页面预处理后标题");
        console.log(clonedNode0.getElementsByTagName("h3")[0].innerText);
        sourceNode0[3].parentNode.appendChild(clonedNode0); // 在父节点插入克隆的节点
        //    可以存储标题，但是里面内容没有存储
    }
}

function submit(){
    let title=document.getElementById("addTitle").value;
    let content=document.getElementById("addContent").value;

    let id=1;

    //把信息放进sessionStorage
    const storage = window.sessionStorage;
    let str1=storage.getItem("title");
    if(str1!=null){
        let array=str1.split(";");
        //计算存储字段中title的个数（id），前面是个空格
        id=array.length;
        console.log("存储字段中title的个数（id）");
        console.log(id);
        console.log(str1);
    //  null;啊啊;好好
    }
    str1=str1+";"+title;
    storage.setItem("title",str1);
    let str2=storage.getItem("content");
    str2=str2+";"+content;
    storage.setItem("content",str2);


    const sourceNode = document.querySelectorAll(".col-md-6"); // 获得被克隆的节点对象
    //前面有2个.col-md-6类，所以这一个的下标为2
    // const clonedNode = sourceNode[4].cloneNode(true); // 克隆节点
    const clonedNode = sourceNode[3].cloneNode(true); // 克隆节点

    let aArray=clonedNode.getElementsByTagName("a");
    console.log("aArray[0]    aArray[1]");
    console.log(aArray[0]+"  "+aArray[1]);
    console.log(aArray[0].href+"  "+aArray[1].href);
    clonedNode.getElementsByTagName("a")[0].href="blog-details-empty.html?id="+id;
    clonedNode.getElementsByTagName("a")[1].href="blog-details-empty.html?id="+id;

    console.log("clonedNode.getElementsByTagName(\"h3\").[0]innerText before");
    console.log(clonedNode.getElementsByTagName("h3")[0].innerText);
    clonedNode.getElementsByTagName("h3")[0].innerText=title;
    alert("添加成功！")
    //清空输入框
    document.getElementById("addTitle").value="";
    document.getElementById("addContent").value='';
    //模态框消失
    $('#myModal').modal("hide");

    sourceNode[3].parentNode.appendChild(clonedNode); // 在父节点插入克隆的节点
    console.log("sourceNode[3].parentNode");
    console.log(sourceNode[3].parentNode);

}

