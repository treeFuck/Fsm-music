// 轮播图
var allLi = document.getElementsByClassName("photoslist");    //图片组
var allbar = document.getElementsByClassName("bar");    //下标组
var aName = ["list1","list2","list3","list4","list5","list6","list7","list8"];  //存放图片元素id名字
var index = 0;        //展示第index张图片
//建立一个歌曲名数组，模拟歌单
var listArr = ["够钟;无赖;浮夸","体面;我们;我真的受伤了","Faded;I Am You;Love The Way You Lie"];
var list = document.getElementById("listOnClik");

function nextPic(){   //向右翻页
	aName.unshift(aName[allLi.length-1]); //将图片id名数组最后一个复制到数组第一个位置
	aName.pop();  //删除数组最后一个元素
	for(var i = 0, len = allLi.length; i<len; i++){
		allLi[i].setAttribute("id",aName[i]);  //重设元素id
	}
	index ++;
	if (index > allLi.length-1) {index = 0};
	setColor();
	list.setAttribute("value",listArr[index % 3]);//更换歌单
}
function prePic(){   //向左翻页
	 aName.push(aName[0]); //将图片id名数组第一个复制到数组最后一个位置
	aName.shift();  //删除数组第一个元素
	for(var i = 0, len = allLi.length; i<len; i++){
		allLi[i].setAttribute("id",aName[i]);  //重设元素id
	}
	index --;
	if (index < 0) {index = allLi.length-1};
	setColor();
	list.setAttribute("value",listArr[index % 3]);//更换歌单
}
function setColor() {
    for(var i = 0, len = allLi.length; i<len; i++){
        allbar[i].style.backgroundColor="#ccc";
    };
    allbar[index].style.backgroundColor = "#45c17c";
} 

setColor();