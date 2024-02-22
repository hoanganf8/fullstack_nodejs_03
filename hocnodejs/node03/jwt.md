# Refresh Token

- POST/Login --> Tạo accessToken và refreshToken --> Lưu refreshToken vào database
- POST/refresh-token (Gửi lên server refreshToken)

* Verify refreshToken
* Kiểm tra trong database có refresh token đó không?
* Lấy userId
* Tạo accessToken mới
* Tạo refreshToken mới
* Xóa refreshToken cũ ở trên database
* Thêm refreshToken mới vào database

user_tokens

- id
- user_id
- refresh_token
- created_at
- updated_at
