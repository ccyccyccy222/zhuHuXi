wuyanActive=()=>{
    document.getElementById("wuYanTask").style.display="block";
    document.getElementById("jieYanTask").style.display="none";
    document.getElementById("tieBaTask").style.display="none";

}

jieYanActive=()=>{
    document.getElementById("wuYanTask").style.display="none";
    document.getElementById("jieYanTask").style.display="block";
    document.getElementById("tieBaTask").style.display="none";

}

tieBaActive=()=>{
    document.getElementById("wuYanTask").style.display="none";
    document.getElementById("jieYanTask").style.display="none";
    document.getElementById("tieBaTask").style.display="block";
}
