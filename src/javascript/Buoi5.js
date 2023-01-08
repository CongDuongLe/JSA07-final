// B5 : localStorage và SessionStorage

// 1. localStorage
// - nó là 1 dạng database của trình duyệt ( bộ nhớ cache)
// nhiệm vụ
// + lưu trữ dữ liệu dưới dạng key -value
// + chỉ lưu trữ được dạng string thì lúc lấy ra sẽ lấy ra dạng string
// + khi reload page, tắt trình duyệt thì những data lưu trong localStorage vẫn còn mà không bị mất; chỉ bị xoá khi
// user xoá trình duyệt, xoá cache của trình duyệt
// các phương thức : tạo, thêm, lấy, xoá

// a, tao 1 localStorage.setItem(key, value)

const key = 'jsa07'

localStorage.setItem(key, 'hello jsa07')

// ví dụ : tạo 1 bài hát với key : mono, value : waiting for you

localStorage.setItem('mono', 'Waiting for you')

// b. lấy ra : localStorage.getItem(key)

const monoSinger = localStorage.getItem('mono')

console.log(monoSinger)

// c. xoá : localStorage.removeItem(key)

localStorage.removeItem(key)

// d. xoá hết : localStorage.clear()

const jsMindX = [
  {
    id: 1,
    name: 'jsa07',
    amount: 9,
  },
  {
    id: 2,
    name: 'jsi12',
    amount: 1,
  },
  {
    id: 3,
    name: 'jsi14',
    amount: 6,
  },
]
// nếu muốn lưu trữ dưới dạng obj thì bắt buộc phải làm 1 bước trung gian đó là convert từ obj sang string

// syntax : JSON.stringify(objName)  // convert từ obj qua string

localStorage.setItem('test', JSON.stringify(jsMindX))

const getJSList = localStorage.getItem('test') // dạng string
console.log(typeof getJSList)

// khi có kiểu dữ liệu là string thì không làm được các method với array như : map, filter, reduce, find, findIndex, ...

// khi lấy ra thì phải covert ngược lại từ string => obj : JSON.parse(stringName)

const covertGetListToObj = JSON.parse(getJSList)

console.log(covertGetListToObj)
// sau khi có dạng obj thì làm việc như bình thường

// 2. SessionStorage
// gần tương tự như localStorage, cũng có các phương thức như setItem, getItem, removeItem, clear
// cũng chỉ lưu trữ được dạng string => lấy ra cũng là string
// NHƯNG : khi tắt tab trình duyệt, tắt trình duyệt thì dữ liệu sẽ bị xoá khỏi sessionStorage

// sessionStorage.setItem('aaa', 'bbb')

// Ứng dụng chính trong khoá JSA : form validate, chức năng giỏ hàng

//1, form validate :

const defaultLogin = {
  username: 'admin',
  password: 'admin',
}

localStorage.setItem('login', JSON.stringify(defaultLogin))

const userInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const loginValue = JSON.parse(localStorage.getItem('login')) // string

console.log(loginValue)

const handleLogin = () => {
  event.preventDefault()

  const usernameValue = userInput.value
  const passwordValue = passwordInput.value

  if (
    usernameValue === loginValue.username &&
    passwordValue === loginValue.password
  ) {
    alert('Login success')
  } else {
    alert('Login fail')
  }
}

const handleSignUp = () => {
  event.preventDefault()

  const usernameValue = userInput.value // giá trị của ô email
  const passwordValue = passwordInput.value // giá trị của của ô password

  if (
    usernameValue !== '' &&
    passwordValue !== '' &&
    passwordValue.length >= 5 &&
    usernameValue.includes('@')
  ) {
    localStorage.setItem(
      'userInfo',
      JSON.stringify({
        username: usernameValue,
        password: passwordValue,
      })
    )

    alert('Sign up success')
  } else {
    alert('Sign up fail')
  }
}
