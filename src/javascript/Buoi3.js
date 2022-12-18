// Kiến thức từ buổi 2 : for .. in, for .. of. for bình thường

// Bài mới  : các thao tác với mảng ( array) 
// - từ JSB : array.push : thêm phần tử vào cuối mảng
// - array.pop : xóa phần tử cuối mảng
// array.shift : xóa phần tử đầu mảng
// array.unshift : thêm phần tử vào đầu mảng

// array.concat : nối 2 hoặc nhiều mảng
// bài 2 : spread,rest : thao tác copy các mảng

const arr1 = [1,2,3,4,5];
const arr2 = ['a', 'b', 'c', 'd', 'e'];

// nối 2 mảng = cách 1 :
const arrConcat = arr1.concat(arr2)
console.log(arrConcat)

// cách từ buổi 2 : spread operator

const arrSpread = [...arr1, ...arr2]
console.log(arrSpread)

console.log(arrConcat === arrSpread)  // không giống nhau => false

// giữa concat và spread : spread sẽ copy nông : nếu có 1 mảng con trong mảng cha thì khi copy sẽ copy cả mảng con đó
// khi copy địa chỉ ô nhớ => ô nhớ mới => ô nhớ mới sẽ có giá trị trùng giá trị ô nhớ cũ nhưng khác địa chỉ ô nhớ
// => khi thay đổi mảng được copy = spread thì sẽ không làm thay đổi giá trị mảng gốc ( mảng cha)


// Trong buổi 3 : array.map() : ánh xạ mảng , array.filter() : lọc mảng theo điều kiện, array.slice() , array.splice() : cắt mảng, sửa mảng, thêm phần từ vào mảng

// array.map() : 1 phương thức ( method) làm việc với mảng, method này sẽ ánh xạ từ mảng cũ sang 1 mảng mới ( hệ quả : khi thay đổi mảng ánh xạ sẽ không thay đổi mảng gốc)
// thường thường : khi làm việc js, chúng sẽ làm việc với mảng được ánh xạ hoặc copy nông chứ không làm việc trực tiếp với mảng gốc để
// tránh trường hợp làm hỏng data gốc từ server trả về

// + syntax array.map() : sẽ là 1 hàm, bên trong hàm nhận đối số là 1 hàm : arrayName.map(fnc chứa logic trả ra)

// ứng dụng map() để nhân đôi các phần tử trong mảng arr1 

const arr1X2 = arr1.map(
    (item, index) => {
        return item*2
    }   //  anonymous arrow function ( không có tên cụ thể)
)

console.log(arr1X2)


const arrSubtractBy1 = arr1.map(
    (item, index) => {
        return item -1
    }
)

console.log(arrSubtractBy1)




const student = [
    {
        id : 1,
        name : 'Hieu',
        age : 15,
        gender : 'male'
    },
    {
        id : 2,
        name : 'Nguyen',
        age : 16,
        gender : 'male'
    },
    {
        id : 3,
        name : 'Quyet',
        age : 16,
        gender : 'male'
    },
    {
        id : 4,
        name : 'QDat',
        age : 16,
        gender : 'male'
    },
    {
        id : 5,
        name : 'Thanh',
        age : 15,
        gender : 'female'
    },

]


const studentAge = student.map(
    (item, index) => {
        return item.age + 1
    }
)

console.log(studentAge)



const studentName = student.map(
    (item, index) => {
        return item.name
    }
)

console.log(studentName)


// nhiệm vụ : lấy ra tuổi của từng học sinh, sau đó mamg tuổi này + 1






// item : khi duyệt mảng thì item sẽ lần lượt là các phần tử trong mảng : với mảng arr1 thì item sẽ list [1,2,3,4,5]
// index : sẽ là các index của các phần tử trong mảng : với mảng arr1 thì index sẽ list [0,1,2,3,4]
// khi duyệt mảng  : để tâm đến key : phân biệt rõ ràng từng phần tử trả ra sau khi duyệt mảng ( sẽ làm việc khi hiển thị lên html)




//2 , array.filter() : lọc mảng theo điều kiện quy ước : trả về 1 mảng mới chứa các phần từ thoả mãn điều kiện được lọc

// syntax : arrayName.filter( fnc chứa logic lọc mảng sau đó trả ra giá trị là mảng mới đã được lọc)
// ex : lọc ra các bạn có tuổi >15 trong mảng student

const filterStudent = student.filter(
    (item, index) => {
        return item.age > 15
    }
)

console.log(filterStudent)
// lọc ra các phần tử có giới tính = 'female' trong mảng student


const femaleStudent = student.filter(
    (item, index) => {
        return item.gender === 'female'
    }
)

console.log(femaleStudent)


// lọc ra các bạn có tuổi chia hết chia hết cho 3 trong mảng student

const studentAgeDivide3 = student.filter(
    (item) => {
        return item.age % 2 === 0
    }
)

console.log(studentAgeDivide3)


const arr = [1,2,3,4,5,6,7,8,9,10]

// 1 : index =0.
// 2 : index =1,
// 3 : index =2,   => value = 3
// 4 : index =3,    -> value =4
// 5 : index =4,    -> value =5
// 6 : index =5   => value = 6
//... 10 : index =9

const h2Query = document.querySelector('#h2arr')
h2Query.innerText = ` mảng hiện tại là [ ${arr} ]`
let sochan = []

const filterSoChan = () => {
    const afterFilterQuery = document.querySelector('#afterFilter')

    return arr.filter(
        (item) => {
            return ( 
                item % 2 === 0 ? sochan = [...sochan, item] : null ,
                console.log(sochan),
                afterFilterQuery.innerText = `mảng sau khi lọc là [${sochan}]`
                )
        }
    )
}


// tại dòng 176 : ...sochan : lấy lại tất cả các số chẵn trước đó ,  item : thêm số chẵn mới sau vào sau số các số cũ mà không thay thế chúng






// 3, arr.slice : cắt mảng theo vị trí đã quy ước 
//  syntax : arrName.slice(vị trí bắt đầu cắt, vị trí kết thúc cắt) : sẽ không lấy value ở vị trí kết thúc căt nhưng vẫn lấy value tại vi trị bắt đầu cắt   

// th 1: đầy đủ vị trí bắt đầu và kết thúc cắt (index)
const TH1 = arr.slice(2,5)  
console.log(TH1) // [3,4,5]

const exam = arr.slice(1, 9)

console.log('exam', exam) // [2,3,4,5,6,7,8,9]

// th2 : chỉ có vị trí bắt đầu : lấy từ vị trí bát đầu đến hết mảng :

const TH2 = arr.slice(1) // [2,3,4,5,6,7,8,9,10]
const exam2 = arr.slice(9) // [10]
console.log(exam2)
console.log(TH2)


// th3 : không có giá trị bắt đầu và kết thúc  : sẽ là thao tác copy mảng

const TH3 = arr.slice() // [1,2,3,4,5,6,7,8,9,10] : vẫn sẽ là thao tác copy nông
console.log(TH3)



//4, array.some() : phép kiểm tra mảng theo điều kiện  : filter => trả ra mảng mới , some => true/false


// syntax : arrayName.some( fnc chứa logic kiểm tra mảng sau đó trả ra giá trị là true/false)

const someArr = arr.some(
    (item) => {
        return item % 11 === 0
    }
)

console.log(someArr)

//5 array.flat() : làm phẳng mảng

const flatArr = [1, [2,3], 4, [5,[6,7],8], 9, 10]

// arrayFlat : trải phẳng mảng ( đưa về 1 mảng duy nhất k chứa các mảng con bên trong theo từng cấp )

const flatLv1 = flatArr.flat()
console.log(flatLv1) // [1,2,3,4,5,[6,7],8,9,10]
const flatLv2 = flatLv1.flat()
console.log(flatLv2) // [1,2,3,4,5,6,7,8,9,10]


//6 array.flatMap() : trải phẳng mảng và thực hiện 1 hành động nào đó với các phần tử trong mảng ( tổ hợp của map + flat)

const flatMapArr = [1,2,3,4,5,[6,7,8,9],10]
// index = 5  = [6,7,8,9]

let newArrays = []


const newArr = flatMapArr.flatMap(

    (item, index) => {
        return item
    }
)


console.log(newArr)

const newArrPlusBy1 = newArr.map(
    item => item + 1
)

console.log(newArrPlusBy1)



// 7 array.find() : filter ( lọc) , find ( tìm kiếm)
// array.find : tìm kiếm theo điều kiện , trả về giá trị đầu tiên thỏa mãn điều kiện

const arrFind = arr.find(
    item => item % 4 === 0
)


// console.log(arrFind)


// 8, findIndex : tìm vị trị thoả mãn điều kiện , tương tự như hàm find, nó chỉ trả về 1 giá trị duy nhất ( sẽ là index đầu tiên thoả mãn điều kiện)

const findIndex = arr.findIndex(
    item => item % 2 === 0
)

console.log(findIndex)  // index === 1 value =2 







