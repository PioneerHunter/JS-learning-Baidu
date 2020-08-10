
window.onload=function(){
    var Btn=document.getElementById("lot-btn");
    Btn.addEventListener("click",function(){
        var ev=ev||window.event;
        var t=ev.target||ev.srcElement;                  // 兼容IE
        var btn=document.getElementsByTagName("button"); // 遍历按钮
        var ra=document.getElementById("radio-a");       // A单选框，判断选中哪个
        var astr=document.getElementById("str-a");       // A字符串
        var bstr=document.getElementById("str-b");       // B字符串
        var an=document.getElementById("num-a").value;   // A数字
        var bn=document.getElementById("num-b").value;   // B数字
        var result=document.getElementById("result");    // 结果显示节点

        switch(t){
            case btn[0]:
                if(ra.checked){
                    result.innerHTML="结果："+astr.value.length
                }else{
                    result.innerHTML="结果："+bstr.value.length
                }
                break;
            case btn[1]:
                if(ra.checked){
                    result.innerHTML="结果："+astr.value[2];
                }else{
                    result.innerHTML="结果："+bstr.value[2];
                }
                break;
            case btn[2]:
                result.innerHTML="结果："+astr.value.concat(bstr.value);
                break;
            case btn[3]:
                result.innerHTML="结果："+astr.value.indexOf(bstr.value);
                break;
            case btn[4]:
                result.innerHTML="结果："+astr.value.lastIndexOf(bstr.value);
                break;
            case btn[5]:
                if(ra.checked){
                    result.innerHTML="结果："+astr.value.slice(an,bn);
                }else{
                    result.innerHTML="结果："+bstr.value.slice(an,bn);
                }
                break;
            case btn[6]:
                if(ra.checked){
                    result.innerHTML="结果："+astr.value.split('\n').length;
                }else{
                    result.innerHTML="结果："+bstr.value.split('\n').length;
                }
                break;
            case btn[7]:
                if(ra.checked){
                    result.innerHTML="结果："+astr.value.substr(an,bn);
                }else{
                    result.innerHTML="结果："+bstr.value.substr(an,bn);
                }
                break;
            case btn[8]:
                if(ra.checked){
                    result.innerHTML="结果："+astr.value.toUpperCase();
                }else{
                    result.innerHTML="结果："+bstr.value.toUpperCase();
                }
                break;
            case btn[9]:
                if(ra.checked){
                    result.innerHTML="结果："+astr.value.toLowerCase();
                }else{
                    result.innerHTML="结果："+bstr.value.toLowerCase();
                }
                break;
            case btn[10]:
                if(ra.checked){
                    result.innerHTML="结果："+astr.value.replace(/\s+/g,"");
                }else{
                    result.innerHTML="结果："+bstr.value.replace(/\s+/g,"");
                }
                break;
            case btn[11]:
                if(astr.value.match("a")){
                    result.innerHTML="结果："+astr.value.replace("a",bstr.value);
                }else{
                    result.innerHTML="结果："+bstr.value.replace("a",astr.value);
                }
                break;
        }
    });
}

