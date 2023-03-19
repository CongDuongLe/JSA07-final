// Kiến thức được học ở JSA 
// 1, các phương thức thao tác với mảng
// 2, hàm arrow function : hàm mũi tên
// 3, localStorage : lữu trữ dữ liệu trên trình duyệt
// 4, Promise : xử lí bất đồng bộ
// 5, async ... await : nâng cao của xử lí bất đồng bộ
// 6, API networking : tương tác với server (tương tác với dữ liệu từ back-end trả về chứ k phải hardcode)


// 1. các thao tác với mảng : map(), filter(), find(), reduce(), rest parameter, spread operator
// map() : đây là 1 phương thức ánh xạ mảng, nó sẽ trả về 1 mảng mới với logic do người dùng quy định khi map, mảng mới này
// sẽ không liên quan đến mảng cũ ( mảng mới thay đổi giá trị thì mảng cũ không bị ảnh hưởng

const quyen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// index[0] = 1, index[1] = 2, ... index[9] = 10
// dùng hàm map để nhân đôi các giá trị trong mảng arr

// tìm các số chan trong mang quyen : chia 2 dư 0 : %

const arrEven = quyen.filter(
    (item, index) => { 
        return item % 2 === 0
    }
)

console.log(arrEven)





const arrX2 = quyen.map(
    (item, index) => {
        return item*2
    }   // hàm mũi tên arrow function
)


const arrDivide2 = quyen.map(
    (item, index) => {
        return item/2
    }
)


console.log(arrDivide2)



const players = [
    {
        id : 1,     // players[0]
        name : 'Messi',
        age : 35,
        club : 'PSG'
    },
    {
        id : 2,   // player[1]
        name : "van dijk",
        age : 31,
        club : 'Liverpool'
    },
    {
        id : 3,  // player[2]
        name : 'Kevin de Bruyne',
        age : 31,
        club : "Man city"
    },
    {
        id : 4,
        name : "Salah",
        age : 31,
        club : "Liverpool"
    }
]

// dùng hàm map để lấy ra tên các cầu thủ trong mảng player

// item ={
        // id : 1, 
        // name : 'Messi',
        // age : 35,
        // club : 'PSG'
    // },

    // lấy name : item.name : lấy tên
    // lấy tuổi : item.age



const name = players.map(
    (item, index) => {
        return item.club
    }
)
console.log(name)

// ham filter(): lọc mảng theo điều kiện nào đó, nó sẽ trả về 1 mảng mới với các phần tử thỏa mãn điều kiện

// lọc ra các cầu thủ có tuổi =31 trong mảng players

const age31 = players.filter(
    (item, index) => {
        return item.club === 'Liverpool'
    }
)

console.log(age31)

const findVanDijk = players.find(
    (item, index) => {
        return item.club === 'Liverpool'
    }
)

const findIndex = players.findIndex(
    (item, index) => {
        return item.club === 'Liverpool'
     }
)
console.log(age31)  // filter
console.log(findVanDijk)  // find 
console.log(findIndex) // findIndex

// find, findIndex chỉ trả ra giá trị đầu tiên mà nó tìm đc trong mảng gốc, còn filter trả ra 1 mảng mới bao gồm
// tất cả các item thoả mãn điều kiện

// rest parameter : ... : nó sẽ nhận vào 1 mảng các giá trị, nó sẽ đưa vào 1 mảng mới

// mục đích : clone mảng ( sao chép mảng)

const a = ['a', 'b', 1]
const b = ['c', 2, 'e']  // lấy tất cả các giá trị của mảng a và gán cho mảng b

const c = [...a, ...b, ...a, ...a]

console.log(c)



const getSum = (...quyen) => {
    let sum = 0
    for (const item of quyen) {
        sum += item
    }
  
}

getSum(...quyen)


// localStorage : bộ nhớ của trình duyệt

// localStorage có 4 phương thức chính : set(), get(), remove(), clear()

// dữ liệu trong localStorage sẽ không bị xoá đi khi người dùng tắt trình duyệt, tắt máy tính,  tắt tab hiện tại
// chỉ bị xoá đi khi : người dùng gỡ bỏ trình duyệt, xoá cache của trình duyệt
// localStorage chỉ có thể lưu dữ liệu có kiểu dữ liệu là string ( chuỗi)


// phương thức 1 : lưu dữ liệu vào trong localStorage, cần có 2 tham số là key-value 

localStorage.setItem('name', 'quyen') // key :'name' , 'value' : 'quyen'
localStorage.setItem('age', 1000)  // key : 'age', 'value' : 18


// phương thức 2 : lấy dữ liệu ra từ trong localStorage

const age = localStorage.getItem('age')


// phương thức 3 : xoá dữ liệu theo key 

// localStorage.removeItem('name')

// phương thức 4 : xoá hết 

localStorage.clear()




// mục đích có thể áp dụng jsa : lưu trữ thông tin đăng nhập của người : email, password, token, displayName, avatar url

// đki : => lưu trữ thông tin đăng nhập của người dùng vào trong localStorage
// đăng nhập => láy thông tin đã được lưu ra, so sánh với thông tin người dùng nhập vào trong các form input, nếu trùng
// => đăng nhập thành công và chuyển sang trang chính còn không thì hiện thông báo người dùng đăng nhập thất bại và
// yêu cầu đăng nhập lại
// trang chính : dùng displayName để hiển thị tên người dùng + avatar của người dùng trong trang chính
// đăng xuất : xoá thông tin đăng nhập của người dùng trong localStorage







// item : lúc này item sẽ lần lượt là các giá trị trong mảng : 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// index : index bắt đầu từ vị trí index = 0 => 0,1,2,3,4,5,6,7,8,9