//登录注册
var xmlHttp = false;

function createXMLHttpRequest() {
    if (window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }else if (window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }  
}
// 注册提交
function singUpSubmit() {
    createXMLHttpRequest(); 
    xmlHttp.onreadystatechange = signUpCallBack;   
    nameStr = username.value;
    passStr = pass.value;
    xmlHttp.open("POST","RegServlet",true);
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.send("name="+nameStr+"&pass="+passStr);
}
function signUpCallBack() {
    if(xmlHttp.readyState == 4 && xmlHttp.status==200){  
        var str = xmlHttp.responseText;
        console.log(str);
        if(str == "success"){     
            alert("恭喜你！注册成功");
            toLogin();
        }else if(str == "error"){
        	judgepass.innerHTML="<font color=\'#c81313\'>error : 输入不能为空</font>";
        }
    }      
}
//登录提交
function loginSubmit() {
    createXMLHttpRequest();                     
     xmlHttp.onreadystatechange = loginCallBack;   
     nameStr = username.value;
     passStr = pass.value;
     xmlHttp.open("POST","LoginServlet",true);
     xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
     xmlHttp.send("name="+nameStr+"&pass="+passStr);
}
function loginCallBack(){
    if(xmlHttp.readyState == 4 && xmlHttp.status==200){  
        var str = xmlHttp.responseText;
        console.log(str);
        if(str == "success"){     
            var url = "homepage.html?"+username.value;
            url = encodeURI(url);
            window.open(url);
        }else if(str == "no-existed"){
        	judgepass.innerHTML="<font color=\'#c81313\'>error : 密码输入错误</font>";
        }
        else{
        	judgepass.innerHTML="<font color=\'#c81313\'>error : 输入不能为空</font>";
        }
    }       
}
//用户名输入预判断
function judgeUser(){
    createXMLHttpRequest(); 
    xmlHttp.onreadystatechange = judgeUserCallBack;
    nameStr = username.value;
    xmlHttp.open("POST","userJudgeServlet",true);
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.send("name="+nameStr);
}
function judgeUserCallBack (){
    if(xmlHttp.readyState == 4 && xmlHttp.status==200){  
        var str = xmlHttp.responseText;
        if(str == "no-exist"){                                       //用户不存在时               
            if(form_h.childNodes[0].data == "SIGN UP"){             //如果是注册
                form_button.onclick = function() {singUpSubmit()}; //允许提交
                judgeuser.innerHTML="<font color=\'#3ba522\'>no problem</font>";
            }else{                                                  //如果是登陆
               form_button.onclick = function() {};                //禁止提交 
               judgeuser.innerHTML="<font color=\'#c81313\'>error : 该用户不存在</font>";
            } 
        }else if(str == "existed"){                                  //用户存在时
            if(form_h.childNodes[0].data == "SIGN UP"){             //如果是注册
                form_button.onclick = function() {};               //禁止提交
                judgeuser.innerHTML="<font color=\'#c81313\'>error : 该用户已经存在</font>";
            }else{                                                  //如果是登录
                form_button.onclick = function() {loginSubmit()};  //允许提交
                judgeuser.innerHTML="<font color=\'#3ba522\'>no problem</font>";
            }   
        }else{                                                      // 输入为空时
            form_button.onclick = function() {};                   //禁止提交
            judgeuser.innerHTML="<font color=\'#c81313\'>error : 输入不能为空</font>"; 
        }
    }    
}
//清空用户名判断栏
var judgeuser = document.getElementsByClassName("judge")[0];
var judgepass = document.getElementsByClassName("judge")[1];

function freeUserJudge(){ 
    judgeuser.innerHTML="";
}
function freePassJudge(){
    judgepass.innerHTML="";
}



//登录注册页面跳转
var form_h = document.getElementById("form_h");
var form_button =document.getElementById("form_button");
var form = document.getElementsByClassName("form_container")[0];
var username = document.getElementById("nameInput");
var pass = document.getElementById("passInput");
//跳到登录
function toLogin() {
    form.style.left = "50%";
    form_h.innerHTML = "LOGIN";
    form_button.onclick = function() {loginSubmit()};     
    username.value = "";
    pass.value = "";
    freeUserJudge();
    freePassJudge();
}
//跳到注册
function toSingUp() {    
    form.style.left = "5%";
    form_h.innerHTML = "SIGN UP";
    form_button.onclick = function() {singUpSubmit()};
    username.value = "";
    pass.value = "";
    freeUserJudge();
    freePassJudge();
}