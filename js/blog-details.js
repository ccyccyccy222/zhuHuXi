//bug:新建帖子的新建楼无法回复，估计是id 名冲突造成的，不过懒得改了......

addLou = () => {

    const sourceNode = document.getElementById("comment0"); // 获得被克隆的节点对象
    const clonedNode = sourceNode.cloneNode(true); // 克隆节点

    let slength = sourceNode.parentNode.children.length;
    console.log("sourceNode.parentNode.children.length");
    console.log(slength);

    // 修改一下id 值，避免id 重复
    clonedNode.setAttribute("id", "comment" + slength);
    //修改新节点的p
    let newP = document.getElementById("message").value;
    let oldP = clonedNode.getElementsByTagName("p");
    oldP[0].innerText = newP;
    document.getElementById("message").value = "";
    //修改新节点的楼层
    let newLi = clonedNode.getElementsByTagName("li");
    // console.log("newLi");
    // console.log(newLi);
    // console.log("newLi[0].innerText");
    // console.log(newLi[0].innerText);
    newLi[0].innerText = slength + "楼";
    //修改新节点的a
    let oldA = clonedNode.getElementsByTagName("a");
    oldA[0].href = "#collapseExample" + slength;
    console.log("oldA[0].href");
    console.log(oldA[0].href);
    //修改新节点的input
    let oldInput = clonedNode.getElementsByTagName("input");
    console.log("oldInput[0]");
    console.log(oldInput[0]);
    oldInput[0].setAttribute("id", "collapseInput" + slength);
    //修改新节点的button
    let oldButton = clonedNode.getElementsByTagName("button");
    console.log("oldButton[0]");
    console.log(oldButton[0]);
    oldButton[0].setAttribute("id", "button" + slength);
    //修改新节点的折叠div
    let oldDiv = clonedNode.getElementsByTagName("div");
    // oldDiv[0].href="#collapseExample"+slength;
    console.log("oldDiv[4]");
    console.log(oldDiv[4]);
    oldDiv[4].setAttribute("id", "collapseExample" + slength);
    //修改新节点的作者
    let oldAuthor=clonedNode.getElementsByTagName("h2");
    oldAuthor[0].innerText="钟小山";
    console.log("oldAuthor[0].innerText:"+oldAuthor[0].innerText);
    //让新节点显示
    clonedNode.style.display = "block";
    sourceNode.parentNode.appendChild(clonedNode); // 在父节点插入克隆的节点
    console.log(slength);
    console.log(sourceNode.parentNode.children);
}

addXiaoLou = (ev) => {
    ev  =  ev  ||  window.event; // 事件
    const target = ev.target || ev.srcElement; // 获得事件源
    const dragObj = target.getAttribute('id');
    // alert(dragObj);
    let a=dragObj.split("button");
    console.log(a[1]);

    //因为之前有一个none的样本里也有ul class="children"，所以实际楼数要减一
    let array = document.querySelectorAll(".children");
    console.log(array.length);
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        index += array[i].children.length;
    }
    console.log("addXiaoLou index");
    console.log(index);

    //子回复
    //子回复不支持再回复
    let message = document.getElementById("collapseInput" + a[1]).value;
    document.getElementById("collapseInput" + a[1]).value = "";
    console.log(message);

    const sourceNode = document.getElementById("subLi0"); // 获得被克隆的节点对象
    const clonedNode = sourceNode.cloneNode(true); // 克隆节点
    clonedNode.setAttribute("id", "subLi" + index); // 修改一下id 值，避免id 重复
    //修改新节点的作者
    let oldAuthor=clonedNode.getElementsByTagName("h2");
    oldAuthor[0].innerText="钟小山";
    console.log("小楼：oldAuthor[0].innerText:"+oldAuthor[0].innerText);


    //如果是从空白页开始，则那个子回复是设置为不可见的
    clonedNode.style.display="block";
    let oldP = clonedNode.getElementsByTagName("p");
    oldP[0].innerText = message;
    array[a[1]].appendChild(clonedNode); // 在父节点插入克隆的节点
    //增加评论数
    let liLocation = document.getElementById("comment" + a[1]);
    let arraySpan=liLocation.getElementsByTagName("span");
    console.log("arraySpan");
    console.log(arraySpan);
    console.log("arraySpan[0].innerText");
    console.log(arraySpan[0].innerText);
    let number=parseInt(arraySpan[0].innerText);
    number+=1;
    arraySpan[0].innerText=number.toString();
}




