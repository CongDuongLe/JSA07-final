//b3 : array.map(); array.filter(); array.some(); array.find(); array.findIndex(); array.flat(); array.flatMap(); array.slice()

// array.map() : ánh xạ 1 mảng cũ sang 1 mảng mới mà khi thay đổi mảng mới thì không làm thay đổi mãng ban đầu

// syntax : arrayName.map((item, index) => { return logic})

// array.filter() : lọc mảng theo điều kiện và kết quả trả về là 1 mảng chứa các item thoả mãn điều kiện lọc

// syntax : arrayName.filter((item, index) => { return logic})


// array.some() : kiểm tra mảng có thoả mãn điều kiện hay không , trả về true/false( != filter vì filter trả ra 1 mảng) 
// còn some() chỉ trả về kết quả là true or false

// syntax : arrayName.some((item, index) => { return logic})

// array.find() : tìm kiếm theo điều kiện nhưng kết quả trả về chỉ là item đầu tiên thoả mãn điều kiện tìm kiếm
// ví dụ : có 1 mảng gồm 10 số chấn, điều kiện tìm kiếm là tìm ra số chẵn trong mảng đó thì array.find() chỉ trả ra
// item trong mảng là số chẵn

// syntax : array.find((item, index) => { return logic})


// array.findIndex() : tương tự như array.find() nhưng kết quả trả về là index của item đầu tiên thoả mãn điều kiện tìm kiếm

// syntax : array.findIndex((item, index) => { return logic})


// array.flat() : trải mảng

// ví dụ : [1, [2,[3]], 4] => [1, 2,[3], 4] 
// flat() : [1,2,3,4]

// syntax : array.flat()


// array.flatMap() : vừa trải mảng vừa map() mảng : trải mảng rồi ánh xạ mảng mới

// syntax : array.flatMap((item, index) => { return logic})


// array.slice() : cắt mảng theo điều kiện ( cắt theo index nhưng sẽ trả ra value) 

// syntax : arrayName.slice(vị trí bắt đầu cắt, vị trí kết thúc cắt)

// có 3 trường hợp chính với slice()

// th1 : có cả vị trí bắt đầu cắt , vị trí kết thúc cắt => kết quả trả về sẽ lấy value từ vị trí bắt đầu => vị trí
// kết thúc cắt -1

// ví dụ : array.slice(1,5) => lấy value từ 1,2,3,4 nhưng không lấy 5

const a = ['a', 'b',1,2,'c','d',3,4]
// a[0] = 'a'
// a[1] = 'b'
// a[2] = 1
// a[3] = 2
// a[4] = 'c'
// a[5] = 'd'
// a[6] = 3
// a[7] = 4



const fullSlice = a.slice(1,5)
console.log(fullSlice); // ['b', 1,3,'c']
const test = a.slice(0,6) // ['a', 'b',1,2,'c','d']
console.log(test)


// th2 : chỉ có vị trí bắt đầu cắt nhưng không có vị trí kết thúc : lấy từ vị trí bắt đầu đến hết

// th3 : không có vị trí bắt đầu cắt và vị trí kết thúc cắt : copy mảng sang mảng mới ( cắt cả mảmg)

const th3 = a.slice()
console.log(th3)

// ... : spread operator : copy mảng

// nội dung buổi 4 : array.splice() : cắt, thêm, sửa mảng ( như slice cũng tính theo index => trả ra value);
// hàm splice sẽ làm thay đổi mảng gốc
// syntax : arrayName(vị trí bắt đầu có cắt- có sự thay đổi, số lượng phần tử muốn cắt đi, các item muốn thêm vào)

const arr = [1,2,3,4,5,6]

// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
// arr[3] = 4
// arr[4] = 5
// arr[5] = 6

// th1 : đủ cả 3 tham số : cắt, thêm, sửa

// const th1 = arr.splice(1,2) // index =1 có value =2;  số 2 là số lượng phần tử muốn cắt đi tính từ vị trí bắt đầu cắt
//  cắt tại index =1, dừng tại index =2 ( đủ 2 giá trị trong tham số thứ 2)
// kết quả trả về là value tại index =1 và index =2 [2,3]

const th1 = arr.splice(2,3)
console.log(th1) // [3,4,5] 




console.log(th1)  // 2,3 
console.log(arr)  // 1,4,5,6 : kết quả còn lại của mảng cũ

const ax = [1,2,3,4,5, 'a', 'b', 'c', 'd', 'e']

// const bx = ax.splice(0, 7)
console.log(ax)
// console.log(bx)



// th2 : có cả thêm index vào mảng

const th2 = ax.splice(1,2, 'hieu', 'dat','nguyen')
// console.log(th2)
// console.log(ax)

// b1 : tính toán các mảng còn lại sau khi cắt : [1,4,5, 'a', 'b', 'c', 'd', 'e']
// b2 : thêm các item đươc liệt kê vào mảng còn lại tại vị trí cắt
// [1, 'hieu', 'dat', 'nguyen', 4,5, 'a', 'b', 'c', 'd', 'e']



// ứng dụng khi phối hợp cả splice và findIndex()

const album = [
    {
        id : 1,
        name : 'nhạc tết',
        haveListened : true
    },
    {
        id :2,
        name : 'world cup',
        haveListened : false

    },
    {
        id : 3,
        name : 'nhạc giáng sinh',
        haveListened : true
    },
    {
        id : 4,
        name : 'nhạc wjbu',
        haveListened : false
    },
    {
        id : 5,
        name : 'nhạc thiền',
        haveListened : true
    }
]


const listMusicQuery = document.querySelector('.list-music')

console.log(listMusicQuery)





const findIndexOfAlbum = (id) => { 
    // console.log('id', id)

    const clickedIndex = album.findIndex((item) => { 
        return item.id === id
    })

    console.log('clickedIndex', clickedIndex)
    // dùng hàm splice để cắt mảng cũ và thay đổi trạng thái haveListened


    const newAlbum = album.splice(clickedIndex, 1, {
        ...album[clickedIndex],
        haveListened : !album[clickedIndex].haveListened

    })

    renderList()

}


const addTocart = (params) => {
    console.log(params)
}






const renderList = () => {
    let html = document.createElement('div')

    album.map((item, index) => {
        html.innerHTML += `
            <div key=${index}>
                <h1>${item.name}</h1>
                <h3>
                    ${
                        item.haveListened ? 'Đã nghe' : 'Chưa nghe'
                    }
                </h3>
                <button onclick='findIndexOfAlbum(${item.id})'> thay đổi trạng thái </button>
            </div>
        `
    })

    listMusicQuery.innerHTML = html.innerHTML
































//     html = album.map((item, index) => { 
//         return `
//             <div key=${index}> 
//                 <h1>${item.name}</h1>
//                 <h3> 
//                     ${
//                         item.haveListened ? 'Đã nghe' : 'Chưa nghe'
//                     }
//                 </h3>
//                 <button onclick='findIndexOfAlbum(${item.id})'> thay đổi trạng thái </button>
            


//             </div>
//         `
//    })









   // các bước : tìm ra index của item muốn thay đổi trạng thái

    // listMusicQuery.innerHTML = html.join('')

   // tạo 1 div mới


    // appendChild vào listMusicQuery

    // listMusicQuery.appendChild(html)


   // in lại list album sau khi thay đổi trạng thái cho index



}




// cần thao tác in cái list này ra màn hình html


// 2. array.reduce()

// hàm reduce() sẽ trả về 1 giá trị duy nhất sau khi thực hiện 1 logic nào đó trên mảng

// syntax arrayName.reduce( (biến tích luỹ, giá trị tích luỹ hiện tại) => {logic}, giá trị ban đầu )

// lưu ý : nếu k có giá trị ban đầu => giá trị ban đầu mặc định sẽ = 0 (bỏ qua )

const x = [1,2,3,4,5]

// dùng reduce để tính tích của mảng x : 120

const value = x.reduce(
    (tichluy, giatri) => {
        return tichluy * giatri
    }
)

// phân tích logic :
// step1 : lặp qua mảng x 
// tichluy tại index[0] : value = 1  => tichluy = 1
// step2 : có tichluy =1 từ step1, lặp đến index[1] có value =2 , thực hiện logic tíchluy*giatri = tíchluy = 1*2 =2
// step3 : tichluy hiện tại =2 lặp  đến index[2] có value =3 , thực hiện logic tíchluy*giatri = tíchluy = 2*3 =6
// step4 : 6 lặp  đến index[3] có value =4 , thực hiện logic tíchluy*giatri = tíchluy = 6*4 =24
// step5 : 24 lặp  đến index[4] có value =5 , thực hiện logic tíchluy*giatri = tíchluy = 24*5 =120


console.log(value)


const y = x.reduce(
   (accumulator, currentValue) => {
        return accumulator + currentValue
   }, 10
)

// phân tích logic : 
// step 1: giá trị khởi tạo =10, value =1 => acc = 10+1 =11,
// step 2: acc =11, value =2 => acc = 11+2 =13,
// step 3: acc =13, value =3 => acc = 13+3 =16,
// step 4: acc =16, value =4 => acc = 16+4 =20,
// step 5: acc =20, value =5 => acc = 20+5 =25,

console.log(y)


// bài toán thực tế của reduce : tính tiền trong giỏ hàng 

const cart = [
    {
        id : 1,
        name : 'hoa súng',
        price : 10,
        amount : 2
    },
    {
        id : 2,
        name : 'hoa giả',
        price : 5,
        amount : 0,
    }, 
    {
        id : 3,
        name : 'hoa hồng',
        price : 15,
        amount : 1,
    },
    {
        id : 4,
        name : 'hoa lay ơn',
        price : 20,
        amount : 5,
    },
    {
        id : 5,
        name : 'hoa đào',
        price : 25,
        amount : 1,
    },

]


const total = cart.reduce(
    (accumulator, currentValue) => { 
        // return tichluy + giatri.price*giatri.amount
       return accumulator + currentValue.price*currentValue.amount
    }, 0
)


console.log(total)



// const getdata = async () => {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     const data = res.data
//     const product = []

// }





let config = {
    offset : 0,
    limit : 5
}




const testQuery = document.querySelector('#test')
const getData = async () => {
    let product = []
    const apiUrl = `https://api.escuelajs.co/api/v1/products?offset=${config.offset}&limit=${config.limit}`
    const response = await axios.get(apiUrl)
    const data = response.data

    product = [...product, ...data]  
    // lấy lại hết các giá trị của mảng product và thêm data mới sau khi load more vào 
    // mảng product
   
    const html = document.createElement('div')

    // lấy mảng product cuối cùng sau khi load more và render ra html
    product.map(
        (item, index) => {
            html.innerHTML += `
            <div class="col-4 py-2 mx-auto" key=${index}>
                <div class="card">
                    <img src="${item.images[0]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title>
                            ${item.name}
                        </h5>
                        <p class="card-text">
                            ${item.description}
                        </p>
                        <a href="#" class="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
            `
            testQuery.appendChild(html)

        }
    )
}


getData()

console.log(config, 'chưa load more')

const handleLoadMore = () => {
    console.log('click')
    config = {
        ...config, // lấy lại tất các giá trị cu của config
        offset : config.offset += 1  // offset : tăng offset thêm 1 sau mỗi lần click
    }
    getData()

    console.log(config, 'đã load more')
}







