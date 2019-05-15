//返回主页时携带用户名
function toHomePage() {
	var url = "homepage.html?" + decodeURI(window.location.href).split("?")[1];
    url = encodeURI(url);
    window.open(url);
}



//分类点击，改变排版内容
var xmlHttp = false;
  //初始页面歌曲名列表
var musicArr = ["体面","我们","爱了很久的朋友","一生所爱","我真的受伤了","The truth that you leave","体面","我们"];
  //分类题目
var topic = document.getElementById("topic");
  //分类描述
var topicDel = document.getElementById("topicDel");
  //页面歌曲详情集合
var musiclist = document.getElementsByClassName("musicBox");
  //播放列表节点
var songlist = document.getElementById("songList").children;
  //记录页面歌曲详情节点的下标
var list = 0; 
  //（伪数据库）用一个对象存储分类描述
var topicDelArr = {
	中文:"呃……额……嗯……嗯嗯……",
	英文:"For you,a thousand times over",
	粤语:"佢话佢好钟意你啊",
	韩语:"오빠，사랑해요",
	流行:"放心，我不会让你out的",
	纯音乐:"电音穿婚，钢琴涤心",
	影视原声:"一首歌的时间，我还你一个故事",
	国外风标:"世界有圈，音乐无界",
	经典之声:"年少听不懂，听懂已非少年",
	伤感:"摸摸头，乖",
	安静:"安静是我的安静，繁华是世界的繁华",
	励志:"努力，再努力，然后注意身体",
	学习:"“好好学习，天天向上”",
	睡前:"安啦安啦，睡吧睡吧"
}

function changePage(pObject) {
	//更新分类题目
	var top = pObject.childNodes[0].data;
	topic.innerText = top;
	//更新分类描述
    topicDel.innerText = topicDelArr[top];
	//更新页面歌曲详情
    musicArr = pObject.getAttribute("value").split(";");
	for (var i = 0; i < musicArr.length; i++) {
		changeMusic(musicArr[i]);  
	}
	list = 0;
	//更新播放列表
    songlist[0].innerText = "当前播放列表：";
    for(var i = 1; i < songlist.length; i++) {
    	if(i < musicArr.length+1){
    		songlist[i].innerText = "《"+musicArr[i-1]+"》";
    	}else{
    		songlist[i].innerText = "";
    	}    	
    }
	//默认选择页面第一首歌
    index = 0;
	next();
	pre();
	music.pause();
}
function createXMLHttpRequest() {
    if (window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }else if (window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }  
}
function changeMusic(MusicName) {
	createXMLHttpRequest(); 
  
    xmlHttp.open("POST","musicSearchServlet",false);
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.send("musicName="+MusicName); //传递歌曲名
 
    var str = decodeURI(decodeURI(xmlHttp.responseText));
    if(str != "error") {
        var musicObj = JSON.parse(str);  //根据歌曲名生成歌曲对象，返回
        //将得到的歌曲对象数据插入
        musiclist[list].children[0].children[0].src = musicObj.imgSrc; 
        musiclist[list].children[1].children[0].children[1].innerText = "歌曲：" + musicObj.musicName;
        musiclist[list].children[1].children[1].children[1].innerText = "歌手：" + musicObj.musicSinger;
        musiclist[list].children[1].children[2].children[1].innerText = "播放量：" + musicObj.musicPlay;
        ++list;
   }
    else {
    	alert("Error!");
   }  
}



//播放歌曲 
  //audio节点
var music = document.getElementById("music"); 
  //歌曲图片节点 
var img = document.getElementById("music-img");
  //歌曲信息节点
var del = document.getElementById("musicDel"); 
  //播放播放歌曲序号
var index = 0;  

function openPlayer(pObject) { 
	//得到播放歌曲名序号
	index = parseInt(pObject.getAttribute("value")); 
	//由序号对应歌曲名生成歌曲对象 
	var Playobj = getMusic(musicArr[index]);  
	//播放歌曲 
    music.src = Playobj.musicSrc;     
    img.src = Playobj.imgSrc;
    del.innerText = "《"+Playobj.musicName+"》"+"—— "+Playobj.musicSinger;
    music.play(); 
    loop();//默认循环播放
}
function createXMLHttpRequest() {
    if (window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }else if (window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }  
}
function getMusic(MusicName) {//发送歌曲名字到服务器，请求返回歌曲具体信息
	createXMLHttpRequest(); 
  
    xmlHttp.open("POST","musicSearchServlet",false);//同步
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.send("musicName="+MusicName);
 
    var str = decodeURI(decodeURI(xmlHttp.responseText));
    if(str != "error") {
    	var musicObj = JSON.parse(str);
    	return musicObj; //返回一个歌曲对象
   }
    else {
    	alert("Error!");
   }  
}
function next() {  //下一曲
	index++;
    if (index > musicArr.length -1) {
	    index = 0;
    }
	//由下一序号对应歌曲名生成歌曲对象
   	var Playobj = getMusic(musicArr[index]);  
   	//播放歌曲 
    music.src = Playobj.musicSrc;     
    img.src = Playobj.imgSrc;
    del.innerText = "《"+Playobj.musicName+"》"+"—— "+Playobj.musicSinger;
    music.play();
}
function pre() {  //上一曲
	index--;
    if (index < 0) {
	    index = musicArr.length -1;
    }
	//由上一序号对应歌曲名生成歌曲对象 
   	var Playobj = getMusic(musicArr[index]);  
   	//播放歌曲 
    music.src = Playobj.musicSrc;     
    img.src = Playobj.imgSrc;
    del.innerText = "《"+Playobj.musicName+"》"+"—— "+Playobj.musicSinger;
    music.play();
}
function loop() {  //循环播放
	timer2 = setInterval(function() {
		if(music.currentTime == music.duration) {
	        next();
	    }
	},50);
}
//默认播放列表
songlist[0].innerText = "当前播放列表：";
for(var i = 1; i < songlist.length; i++) {
	if(i < musicArr.length+1){
		songlist[i].innerText = "《"+musicArr[i-1]+"》";
	}else{
		songlist[i].innerText = "";
	}    	
}
//默认选择页面第一首歌
next();
pre();
music.pause();
loop();//默认循环播放





