# JSA07-final
Với project đã có sắn 
- git add . : để thêm tất cả các file có sự thay đổi vào git
- git add + fileName : chỉ thêm file có sự thay đổi vào git


+ git commit -m 'tên của nội dung commit' : để thông báo cho git biết những file thay đổi trong lần đẩy code này được mô tả
nhằm làm mục đích gì hoặc thay đổi những file nào

+ git branch -M branchName : để tạo ra một nhánh mới có tên là (user tự đặt ) : khi làm việc nhóm, sẽ có 1 nhánh để làm việc chung hoặc các  nhánh mới test lỗi trước khi được merge vào trong nhánh gốc (master) để đưa lên sản phẩm

+ git push -u origin branchName : đẩy code lên github với nhánh vừa tạo tại dòng 10



- Với user chưa từng tải git và setup git trên máy sẽ cần 1 bước phụ ( khai báo cho máy tính biết mình sẽ dùng git ở đây và tiến hành đăng nhập)


+ git config --global user.name "username" : khai báo tên user ( tên user vào setting của github để xem)
+ git config --global user.email "email" : khai báo email ( email vào setting của github để xem) 


# với github repository đã có sẵn trong máy, khi cần cập những file có sự thay đổi thì sẽ tuân theo cac bước sau

+ git add . : để thêm tất cả các file có sự thay đổi vào git
+ git commit -m 'commit name' :
+ git push -u origin branchName