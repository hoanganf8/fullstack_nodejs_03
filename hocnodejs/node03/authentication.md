# Xác thực người dùng

Xác minh thông tin người dùng (email, password) có hợp lệ hay không?

- Hợp lệ: Lưu thông tin vào session hoặc token (jwt)
- Không hợp lệ: Thông báo lỗi

Mật khẩu: Mã hóa 1 chiều

- Cách cũ: md5(), sha1() --> Không an toàn
  `SELECT * FROM users WHERE email='hoangan.web@gmail.com' AND password=md5('123456')`
- Hiện tại: hash bcrypt --> An toàn

* Truy vấn theo email để trả về password hash trong database
* So sánh plain password (Password lấy từ input) với password hash lấy từ database bằng thuật toán so sánh
  -> Nếu khớp => Lưu vào session hoặc token
  -> Nếu không khớp => Trả về thông báo lỗi

# Tình huống thực tế khi xây dựng ứng dụng xác thực

- Mỗi lập trình viên sẽ có cách xác thực khác nhau
- Trong 1 ứng dụng sẽ có nhiều cách xác thực:

* email và password
* số điện thoại và password
* google
* facebook
* github
  --> Đơn giản hóa việc xác thực qua các mạng xã hội
  --> Đồng nhất các cách xác thực: cách lưu session, cách lấy thông tin user, cách hiển thị lời chào, cách đăng xuất

=> Thư viện hỗ trợ cho việc xác thực: passport.js
