/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/
/*
function diyTrim(str) {
    var result = "";
    if(str==null) return "";
    // do something
    // 去除前面的空格,一个个循环删除
    while(str[0]==" "||str.charCodeAt(0)==12288){ // 12288（Unicode）为空格
        str=str.substr(1,str.length);
    }
    // 去除后面的空格
    while(str[str.length-1]==" "||str.charCodeAt(str.length-1)==12288){
        str=str.substr(0,str.length-1);
    }
    result=str;
    return result;
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->
*/
/*
去掉字符串str中，连续重复的地方
*/

function removeRepetition(str) {
    var result = "";
    if(str==null) return "";
    // do something
    var hash={};
    for(var i=0, elem; i<str.length;i++){
        elem=str[i];
        // 如果单个字符第一次出现为假，则给hash。。赋值为真，
        // 当遇到重复字符时，其为真，不再进入if语句,去重
        if(!hash[elem]){
            hash[elem]=true;
            result=result+elem;
        }
    }
    return result;
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc
