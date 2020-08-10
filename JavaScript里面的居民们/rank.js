
var arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
console.log(arr1.sort(function(a,b){
    return (a-b);
}));

var arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
console.log(arr2.sort(function(a,b){
    return a[0]-b[0];
}));

var arr3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]]; 
console.log(arr3.sort(function(a,b){
    return b[1]-a[1];
}));

var arr4 = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];
console.log(arr4.sort(function(a,b){
    return a.value-b.value;
}));

var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}

/* For。。。in循环，数组则迭代出所有数组元素，对象则迭代出所有属性
 * in关键字还可用于判断某元素或属性是否属于某数组或对象
 * let的首次试用
 */ 
function toString(obj){ 
    let arr1=[];
    for(let i in obj){
        let arr2=[];
        arr2.push(i);
        for(let j in obj[i]){
            arr2.push(obj[i][j]);
        }
        arr1.push(arr2);
    }
    return arr1;
}
console.log(toString(scoreObject));

var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];

function arrTurnObj(softNum = 0) {
    var newObj = new Object();
    for(var i in menuArr){
        if(menuArr[i][2] == softNum){
            newObj[menuArr[i][0]] = {
                'name': menuArr[i][1],
                'subMenu': arrTurnObj(menuArr[i][0])
            }
        }
    }
    return newObj;
}
console.log(arrTurnObj(-1));