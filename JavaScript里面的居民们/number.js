window.onload=function(){
    var a=document.getElementById("lot-btn");
    a.addEventListener("click",function(ev){
        var ev=ev||window.event;
        var t=ev.target||ev.srcElement; // 兼容IE
        var btn=document.getElementsByTagName("button"); // 遍历按钮
        var result=document.getElementById("result");    // 输出结果
        var anum=document.getElementById("num-a").value; // A里的内容，值
        var bnum=document.getElementById("num-b").value; // B里的内容，值
        var radioa=document.getElementById("radio-a");   // 选中A
        var radiob=document.getElementById("radio-b");   // 选中B
        switch(t){
            case btn[0]: // 判断当前选中的输入框输入内容是否为数字
                isNumber(anum,bnum);
                break;
            case btn[1]: // 把 A 四舍五入为 B 个小数位数的数字
                isNumber(anum,bnum);
                // 插曲：anum只接受了A框的值，而不是地址，得改变value才能改变A框内容
                // af.value=Number(anum).toFixed(Number(bnum));
                result.innerHTML="结果："+Number(anum).toFixed(Number(bnum));
                break;
            case btn[2]: // 当前选中数字的绝对值
                isNumber(anum,bnum);
                if(radioa.checked){ // 
                    result.innerHTML="结果："+Math.abs(anum);
                }else if(radiob.checked){
                    result.innerHTML="结果："+Math.abs(bnum);
                }
                break;
            case btn[3]: // 对当前选中的数字进行上舍入
                if(radioa.checked){ // 
                    result.innerHTML="结果："+Math.ceil(anum);
                }else if(radiob.checked){
                    result.innerHTML="结果："+Math.ceil(bnum);
                }
                break;
            case btn[4]: // 对当前选中的数字进行下舍入
                if(radioa.checked){ // 
                    result.innerHTML="结果："+Math.floor(anum);
                }else if(radiob.checked){
                    result.innerHTML="结果："+Math.floor(bnum);
                }
                break;
            case btn[5]: // 把当前选中的数字四舍五入为最接近的整数
                if(radioa.checked){ // 
                    result.innerHTML="结果："+Math.round(anum);
                }else if(radiob.checked){
                    result.innerHTML="结果："+Math.round(bnum);
                }
                break;
            case btn[6]: // 返回 A 和 B 中的最高值
                var max=anum>bnum?anum:bnum;
                result.innerHTML="结果："+max;
                break;
            case btn[7]: // 返回 A 和 B 中的最低值
                var min=anum<bnum?anum:bnum;
                result.innerHTML="结果："+min;
                break;
        }
    });

    //
    function isNumber(x,y){
        isFinite(x)&&isFinite(y)?console.log("it's number"):console.log("it isn't number");
    }
}