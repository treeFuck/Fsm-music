//用户名
var user = document.getElementById("user");
var url =decodeURI(window.location.href);
var username = url.split("?")[1];
//显示用户名
if (typeof(username) != "undefined" && username != "undefined") {
user.innerHTML = "欢迎你： " + username;
}
//跳转分类页面时携带用户名
function toClassify() {
	var url = "classify.html?" + username;
    url = encodeURI(url);
    window.open(url);
}



//播放歌曲 
  //audio节点
var music = document.getElementById("music"); 
  //歌曲图片节点 
var img = document.getElementById("music-img");
  //歌曲信息节点
var del = document.getElementById("musicDel");  
  //播放列表节点
var songlist = document.getElementById("songList").children;
  //记录第几首歌曲
var number = 0;  
  //歌曲【对象】数组
var musicArr = [];

function openPlayer(pObject) {
    //得到歌曲名
	var musicNames = pObject.getAttribute("value");  
	musicNameArr =musicNames.split(";");          
    //更新musicArr存储对象
    musicArr = [];
    for (var i = 0; i < musicNameArr.length; i++) {
    	musicArr[i] = getMusic(musicNameArr[i]);
    }
    //更新播放列表
    songlist[0].innerText = "当前播放列表：";
    for(var i = 1; i < songlist.length; i++) {
    	if(i < musicNameArr.length+1){
    		songlist[i].innerText = "《"+musicNameArr[i-1]+"》";
    	}else{
    		songlist[i].innerText = "";
    	}    	
    }
    //播放musicArr[0]
    number = 0;
    music.src = musicArr[number].musicSrc;
    img.src = musicArr[number].imgSrc;
    del.innerText = "《"+musicArr[number].musicName+"》"+"—— "+musicArr[number].musicSinger;
    music.play();      
    loop();            //默认循环播放
	
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
	if(musicArr.length != 0){
		number++;
	    if (number > musicArr.length -1) {
		    number = 0;
	    }
	    //更换歌曲信息
	    music.src = musicArr[number].musicSrc;
        img.src = musicArr[number].imgSrc;
        del.innerText = "《"+musicArr[number].musicName+"》"+"—— "+musicArr[number].musicSinger;
	    music.play();
	}else{
		alert("您还没有选择播放歌曲!");
	}
}
function pre() {  //上一曲
	if(musicArr.length != 0){
		number--;
	   if (number < 0) {
		    number = musicArr.length -1;
	    }
	    //更换歌曲信息
	    music.src = musicArr[number].musicSrc;
        img.src = musicArr[number].imgSrc;
        del.innerText = "《"+musicArr[number].musicName+"》"+"—— "+musicArr[number].musicSinger;
	    music.play();
	}else{
		alert("您还没有选择播放歌曲!");
	}
}
function loop() {  //循环播放
	timer2 = setInterval(function() {
		if(music.currentTime == music.duration) {
	        next();
	    }
	},10);
}



//搜索歌曲
  //搜索输入节点
var searchInput = document.getElementById("searchInput");
  //搜索结果显示节点
var searchResult = document.getElementById("searchResult");
  //用一个对象数组存储搜索歌曲结果
var musicObjArr = [];
function searchAll() {
    createXMLHttpRequest(); 
    xmlHttp.onreadystatechange = searchAllCallBack; 
    //获取到搜索框输入值  
    var input = searchInput.value;
    xmlHttp.open("POST","musicSearchAllServlet",true);
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    if(input != ""){//输入不为空时开始搜索
        xmlHttp.send("searchInput="+input); 
    }else{
        freesearchResult();
    }
}
function searchAllCallBack() {
    if(xmlHttp.readyState == 4 && xmlHttp.status==200){  
        var str = xmlHttp.responseText;
        //展示搜索结果
        searchResult.style.display = "block";
        searchResult.innerHTML = '';
        if(str !="[]"){
            musicObjArr = JSON.parse(str);  
            for(var i = 0; i < musicObjArr.length; i++){
                //给每一个结果加上点击播放函数和对应value值
                searchResult.innerHTML= searchResult.innerHTML+'<li onClick="openPlayer(this)" value = "'+musicObjArr[i].mName+'">《'+musicObjArr[i].mName+'》</li>';
            }
        }else{
            freesearchResult();
        }
    }   
}
//情空搜索结果
function freesearchResult() {
    musicObjArr = [];
    searchResult.style.display = "none";
    searchResult.innerHTML = '';
}






