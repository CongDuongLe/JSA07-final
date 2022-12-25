// các từ khoá khai báo trong JSB : 
// var, let, const


// sự khác nhau giữa var, let, const 

// var : có thể khai báo lại biến, có thể khai báo biến chưa khai báo trước đó, có thể thay đổi giá trị , var
// có khả năng hoisting (đưa khai báo lên đầu file)

// let : chỉ thay đổi giá trị nhưng không thể khai báo lại chính nó
// const : không thể thay đổi giá trị, không thể khai báo lại chính nó


// các cách khai báo 1 hàm :

// cach 1 :
function fncName(params) {
    return (
        params
    );
}



function tinhtong(a, b) {
    return a + b;
}


function getMax(a,b,c,d,e,f,g,h){
    return Math.max(a,b,c,d,e,f,g,h)
}


const maxValue = getMax(1,2,3,4,5,6,7,8)
// console.log(maxValue)



const value = tinhtong(2,3)
// console.log(value)


// cách khác để khai báo 1 hàm : dùng arrow function

// arrow func : mũi tên + hàm : la 1 hàm có chứa mũi tên

// syntax : từ khoá khai báo + fncName = (params) => {return logic}

// ví dụ : chuyển hàm getMax từ fnc thành arrow fnc


const getMax2 = (a,b,c,d,e,f,g,h) => {
    return Math.max(a,b,c,d,e,f,g,h)
}

// ưu điểm của hàm arrow fnc : viết ngắn hơn , auto binding this, có thể bỏ qua return trong 1 vài trường hợp k cần trả ra giá trị

// console.log(getMax2(1,2,3,4,5,6,7,8))

// ex : hàm tính trung bình cộng của dãy số truyền vào
// ...params : rest parameter có mục đích là viết ngắn gọn hơn các tham số truyền vào ( lấy ra tất cả giá trị user truyền vào)
// với rest parameter thì nó sẽ trả về 1 mảng chứa tất cả các giá trị user truyền vào, sẽ luôn được đặt tại vị trí cuối trong dãy params

const getAvg = (...params) => {
    // ý tưởng : lấy tổng của dãy số truyền vào / số lượng phần tử trong dãy số

    // b1 : tính tổng của tất cả dãy số truyền vào 
    let sum = 0;
    for(let i = 0; i < params.length; i++){
        sum += params[i]
    }
    // lấy tổng / độ dài  
    // trong js thì sử dụng .length để lấy độ dài
    //b2 : viết logic để tính trung bình cộng
    let avg = 0
    avg = sum / params.length

    return console.log(avg)
}   

// cách viết thông thường

function tinhTBC(...params) {
    // ý tưởng : lấy tổng của dãy số truyền vào / số lượng phần tử trong dãy số

    // b1 : tính tổng của tất cả dãy số truyền vào 
    let sum = 0;
    for(let i = 0; i < params.length; i++){
        sum += params[i]
    }
    // lấy tổng / độ dài  
    // trong js thì sử dụng .length để lấy độ dài
    //b2 : viết logic để tính trung bình cộng
    let avg = 0
    avg = sum / params.length

    return console.log(avg)
}

tinhTBC(1,2,3)





getAvg(1,2,3,4,5,6,7,8,9,10)  // dự đoán : sum = 15


// rest parameter không lấy giá trị được khai báo trc nó 
const checkParams = (a,b,c,d ,e,f,...params) => {
    console.log(a, 'đây là tham số a truyền vào')
    console.log(b, 'đây là tham số b truyền vào')
    console.log(params, 'đây là tất cả các tham số còn lại truyền vào')
}

checkParams('a', 1, 'b', 2, 'c', 3)

// dự đoán : sau khi thêm tham só c,d vào thì ...params sẽ còn lại những gì  : 'c', 3
// khi truyền thêm tham số e,f thì ...params sẽ chỉ còn lại 1 array rỗng


// nâng cao : spread operator : ...params : dùng để truyền vào 1 mảng vào 1 hàm có rest parameter
// mục đích : 
// + clone mảng : nhưng sẽ không clone ô nhớ => sửa đổi dữ liệu trên mảng clone sẽ k ảnh hưởng giá trị mảng gốc
// + nối mảng
// + rải tham số vào trong rest parameter

const arr1 = [1,2,3,4,5,6,7,8,9,10]
const arr1Clone = [...arr1]

console.log(arr1Clone)

// nối mảng
// c1 : sử dụng array.concat()
const a = [1,2,3]
const b = [4,5,6]
const random = ['a', 'b', 'c']
const e = [1,'c','z', 10]

const c = a.concat(b, random)
console.log(c)
// c2 : dùng spread operator
const d = [...a, ...b,...random, ...e]
console.log(d) 
// [1,2,3,4,5,6,'a','b','c',1,'c','z',10]

// th 3 : rải params cho rest parameter

const multiple = (...params) => {
    let sum = 1
    for(let i = 0; i < params.length; i++){
        sum *= params[i]
    }
    return console.log(sum)
}

const listParams = [1,2,3,4,5]

const arrayTest = [
    {
        name: 'Hieu',
        age: 15
    }, 
    {
        name: 'Nguyen',
        age: 16
    },
    {
        name: 'QDat',
        age: 16
    }, 
    {
        name: 'TDat',
        age: 15
    },
]


for (const key in arrayTest) {
    // console.log(arrayTest[key])
    console.log(key)
}

// để lấy value khi dùng for in thì chỉ cần thêm arrayName[key]


for (const value of arrayTest) {
    console.log(value)
}




multiple(...listParams)

const stringConcat = (...params) => {
    let str = ''
    // for(let i = 0; i < params.length; i++){
    //     str += params[i]
    // }
    for (const value of params) {
        str += value
    }

    return console.log(str)
}

const listString = ['hello', 'Viet', 'Nam']

stringConcat(...listString)


// 2 vòng for : for in và for of 
// for in : dùng để duyệt qua các key của object
// for of : dùng để duyệt qua các value của object

const mang = [1,2,3,4,5,6,7,8,9,10]

// for (const index in mang) {
//     let sum = 0
//     // sum += mang[index]  // gán sum với các giá trị vừa duyệt qua của mảng mang 
//     // đang bị sai logic
//     // thứ cần : sum of sum + mang[index]
//     // hiện tại đang làm phép gán
    
    
// }




// JSB : khai báo 


// function Venus(a,b) {
//     return a*b // phép nhân
// }

// const zzz = Venus(2,3)

// console.log(zzz)

// JSA : arrow function : mũi tên + hàm : hàm mũi tên

const Venus = (a,b) => {
    return a*b
}

const zyz = Venus(2,5)
console.log(zyz)
