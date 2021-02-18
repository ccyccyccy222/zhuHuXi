addLou = () => {
    const sourceNode = document.getElementById("comment0"); // 获得被克隆的节点对象
    const clonedNode = sourceNode.cloneNode(true); // 克隆节点
    clonedNode.setAttribute("id", "comment" + sourceNode.parentNode.children.length); // 修改一下id 值，避免id 重复
    //修改新节点的p
    let newP=document.getElementById("message").value;
    let oldP=clonedNode.getElementsByTagName("p");
    oldP[1].innerText=newP;
    document.getElementById("message").value="";
    let newLi=clonedNode.getElementsByTagName("li");
    // console.log("newLi");
    // console.log(newLi);
    // console.log("newLi[0].innerText");
    // console.log(newLi[0].innerText);
    newLi[0].innerText=sourceNode.parentNode.children.length+"楼";
    clonedNode.style.display="block";
    sourceNode.parentNode.appendChild(clonedNode); // 在父节点插入克隆的节点
    console.log(sourceNode.parentNode.children.length);
    console.log(sourceNode.parentNode.children);
}

addXiaoLou=()=>{
    // $('#myModal').on('show.bs.modal', function () {
    //     var $this = $(this);
    //     var $modal_dialog = $this.find('.modal-dialog');
    //     $this.css('display', 'block');
    //     // 点击事件传入event参数，通过enent.clientY可以取到当前点击处到页面顶端的高度
    //     var marginTop = event.clientY;
    //     // 但显示的地方就正好是点击处，还是不太满意，可以使用滚动条的高度来实现
    //     if (parent.$('.scrollbar').length > 0) {
    //         marginTop = parent.$('.scrollbar').scrollTop();
    //     }
    //     $modal_dialog.css({'margin-top': marginTop});
    // });
    // $("#myModal").modal({backdrop: true, keyboard: false});

    let message=document.getElementById("subMessage").value;
    console.log(message);
}


//显示模态框
function modalOpen() {
    //获取模态框对象   getElementsByClassName获取到的是一个数组对象
    let modal = document.getElementsByClassName("modal-box")[0];
    //获取浏览器当前宽高
    let documentWidth = window.innerWidth;
    let documentHeight = window.innerHeight;
    //获取模态框宽度
    let modalWidth = modal.offsetWidth;
    //模态框距离浏览器右侧的距离就是（浏览器宽度-模态框宽）/ 2.0
    //注意，需要把结果转为字符串类型
    modal.style.left = ((documentWidth - modalWidth) / 2.0).toString();
    //设置为可见
    modal.style.visibility = "visible";
}

//模态框关闭
function modalClose() {
    //获取模态框
    let modal = document.getElementsByClassName("modal-box")[0];
    //设置为不可见
    modal.style.visibility = "hidden";
}


