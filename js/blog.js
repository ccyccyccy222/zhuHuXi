// urlinfo = window.location.href;  //获取当前页面的url
// console.log(urlinfo)
// len = urlinfo.split("?");//获取url的长度
// newsidinfo = len[1];//取出参数字符串 这里会获得类似“id=1”这样的字符串
// console.log(newsidinfo);


// submit=()=>{

function submit(){
    let title=document.getElementById("addTitle").value;
    let content=document.getElementById("addContent").value;


    const sourceNode = document.querySelectorAll(".col-md-6"); // 获得被克隆的节点对象
    //前面有2个.col-md-6类，所以这一个的下标为2
    const clonedNode = sourceNode[5].cloneNode(true); // 克隆节点

    console.log("clonedNode.getElementsByTagName(\"h3\").[0]innerText before");
    console.log(clonedNode.getElementsByTagName("h3")[0].innerText);
    clonedNode.getElementsByTagName("h3")[0].innerText=title;
    // if(image!=null){
    //     console.log("In here");
    //     console.log(image);
    //     console.log("clonedNode.getElementsByTagName(\"img\")[0]");
    //     console.log(clonedNode.getElementsByTagName("img")[0]);
    //     console.log("clonedNode.getElementsByTagName(\"img\")[0].src");
    //     console.log(clonedNode.getElementsByTagName("img")[0].src);
    //     //用图片选择器进行了选择
    //     clonedNode.getElementsByTagName("img")[0].src=image;
    // }
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

