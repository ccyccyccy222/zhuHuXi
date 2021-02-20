xiYan = () => {
    let already = document.getElementById("alreadyNum").innerText;
    let num1 = parseInt(already) + 1;
    document.getElementById("alreadyNum").innerText = num1.toString();

    let noYet = document.getElementById("noYetNum").innerText;
    let num2 = parseInt(noYet) - 1;
    document.getElementById("noYetNum").innerText = num2.toString();
}

click1 = () => {
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
}

click2 = () => {
    document.getElementById("div2").style.display = "block";
    document.getElementById("div1").style.display = "none";
}

submitPlan = () => {
    let plan;
    let yan = '';
    let yanNum = 0;
    let noYet;
    let array = document.getElementsByName("exampleRadios");
    console.log(array);
    //NodeList(3)
    let key = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].checked) {
            key = i;
            break;
        }
    }
    let h = document.getElementsByTagName("h5");
    let already = document.getElementById("alreadyNum").innerText;
    switch (key) {
        case 0:
            //        维持每日烟量不变
            yan = document.getElementById("input1").value;
            yanNum = parseInt(yan);
            // console.log("document.getElementsByTagName(\"h5\")")
            // console.log(h);
            h[1].innerText = "当前戒烟计划：维持每日" + yan + "支烟";
            noYet = yanNum - parseInt(already);
            document.getElementById("noYetNum").innerText = noYet.toString();
            break;
        case 1:
            //维持烟量，余量结转
            yan = document.getElementById("input1").value;
            yanNum = parseInt(yan);
            // console.log("document.getElementsByTagName(\"h5\")")
            // console.log(h);
            h[1].innerText = "当前戒烟计划：维持每日" + yan + "支烟，余量结转";
            noYet = yanNum - parseInt(already);
            document.getElementById("noYetNum").innerText = noYet.toString();
            break;
        case 2:
            // 烟量逐日减少
            let start = document.getElementById("input2Qi").value;
            let end = document.getElementById("input2Jian").value;
            let startNum = parseInt(start);
            let endNum = parseInt(end);
            // console.log("document.getElementsByTagName(\"h5\")")
            // console.log(h);
            h[1].innerText = "当前戒烟计划：起始日烟支数" + startNum + "；每日减少"+endNum+"支烟";
            noYet=startNum - parseInt(already);
            document.getElementById("noYetNum").innerText = noYet.toString();
            break;
    }

    //模态框消失
    $('#planModal').modal("hide");
    alert("设置成功！");
}
