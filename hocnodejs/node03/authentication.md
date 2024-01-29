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

# Đăng nhập thông qua mạng xã hội

Sử dụng thông tin tài khoản mạng xã hội để lấy user --> Insert vào database --> Thực login trên thông tin đó

## 2 bước triển khai

- Tạo link chuyển hướng tới các mạng xã hội để đăng nhập
- Xử lý lấy dữ liệu và insert dữ liệu vào database sau khi đăng nhập xong các mạng xã hội (Khi đăng nhập xong, chuyển hướng về callback url)

## Database

Table providers

- id
- name

Table users

- id
- name
- email
- password
- status
- provider_id

# Xây dựng chức năng quên mật khẩu

## Xây dựng form quên mật khẩu (Forgot Password)

- Nhận email từ client
- Kiểm tra email có tồn tại trong Database hay không?
- Tạo token (Không nên dùng jwt). md5(Math.random() + new Date().getTime())

* Cập nhật token vào trong bảng users (Field: reset_token) và thời gian hết hạn (Field: expired_token)
* Gửi email cho user (Trong email có link để đặt lại mật khẩu)

Cấu trúc link: http://tenmiencuaban/reset-password?token=abc

## Xây dựng form đặt lại mật khẩu (Reset Password)

- Kiểm tra token có khớp với database hay không? (Kiểm tra cả expired)
- Nếu hợp lệ --> Lấy thông tin user theo token --> Hiển thị form đặt lại mật khẩu

* Mật khẩu mới
* Nhập lại mật khẩu mới

- Xử lý cập nhật lại mật khẩu cho user
- Xóa token khỏi database
- Gửi email thông báo cho user
