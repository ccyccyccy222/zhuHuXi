window.onload = function(){
    const Words = document.getElementById("words");
    const Who = document.getElementById("who");
    const TalkSub = document.getElementById("talksub");
    const TalkWords = document.getElementById("talkwords");

    TalkSub.onclick = function(){
        //定义空字符串
        var str = "";
        if(TalkWords.value == ""){
            // 消息为空时弹窗
            alert("消息不能为空");
            return;
        }
        if(Who.innerText == "患者说:"){
            // console.log("患者说");
            //如果Who.innerText为患者说，那么是 患者说
            str = '<div class="btalk"><span>患者说 :' + TalkWords.value +'</span></div>';
        }
        else{
            // console.log("医生说");
            console.log(Who.innerText);
            str = '<div class="btalk"><span>医生说 :' + TalkWords.value +'</span></div>' ;
        }
        // str = '<div class="btalk"><span>医生说 :' + TalkWords.value +'</span></div>' ;
        document.getElementById("talkwords").value='';
        Words.innerHTML = Words.innerHTML + str;
    }


}
