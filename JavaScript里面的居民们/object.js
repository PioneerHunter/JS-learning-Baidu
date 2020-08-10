var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

// 用遍历的方法一个个找
// 假设id和name均不会重复， 根据输入name找到对应的id
function findIdByName(name) {
    var id;
    function find(obj){
        if(obj!=null){
            if(obj.name==name){
                id=obj.id;
            }
            find(obj.left);
            find(obj.right);
        }
    }
    find(tree);
    console.log(id);
}

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
    var name;
    function find(obj){
        if(obj!=null){
            if(obj.id==id){
                name=obj.name;
            }
            find(obj.left);
            find(obj.right);
        }
    }
    find(tree);
    console.log(name);
}

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
// 根左右
function getListWithDLR() {
    function front(obj){
        if(obj!=null){
            console.log(obj.name);
            front(obj.left);
            front(obj.right);
        }
    }
    front(tree);
}

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
// 左根右
function getListWithLDR() {
    function middle(obj){
        if(obj!=null){
            middle(obj.left);
            console.log(obj.name);
            middle(obj.right);
        }
    }
    middle(tree);
}

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
// 左右根
function getListWithLRD() {
    function rear(obj){
        if(obj!=null){
            rear(obj.left);
            rear(obj.right);
            console.log(obj.name);
        }
    }
    rear(tree);
}


