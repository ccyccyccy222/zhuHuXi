urlinfo = window.location.href;  //获取当前页面的url
console.log(urlinfo)
len = urlinfo.split("?");//获取url的长度
newsidinfo = len[1];//取出参数字符串 这里会获得类似“id=1”这样的字符串
console.log(newsidinfo);
// newsids = newsidinfo.split("&");//对获得的参数字符串按照“=”进行分割
// parameter1 = newsids[0];  //得到参数值 os：标识安卓还是ios，1=ios、2=安卓
// os = parameter1.split("=")[1];
// parameter2 = newsids[1];   //1=普通屏幕、2=iPhone X、3=iPhone XR、4=iPhoneX Max
// dim = parameter2.split("=")[1];
// parameter3 = newsids[2];  //version：广告页版本，1=第一种版本、2=第二种版本，每个版本显示的图片都是不一样的
// version = parameter3.split("=")[1];
// console.log("获取到的参数值是" + os, dim, version);
