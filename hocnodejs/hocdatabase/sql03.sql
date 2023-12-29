-- ORDER BY: Sắp xếp các bản ghi theo thứ tự tăng dần, giảm dần theo 1 trường nào đó
-- Cú pháp: ORDER BY fieldname ASC|DESC
-- SELECT * FROM users ORDER BY created_at DESC, id DESC;

-- Yêu cầu: 
-- Tạo table courses lưu trữ các khóa học: id, name, price, created_at, updated_at
-- Thiết lập quan hệ với bảng users theo quan hệ nhiều - nhiều
-- Truy vấn trả về danh sách khóa học mà user có id = 1 đã mua
-- Thông tin trả về: username, email, thông tin khóa học
-- Sắp xếp kết quả theo giá giảm dần
-- Tạo thêm 1 cột ở câu lệnh truy vấn có tên 'discount'
-- Giá trị cột discount theo điều kiện sau: 
-- Nếu giá khóa học từ 600.000 trở lên -> 10%, ngược lại là 0
-- Tạo thêm cột "sale_price" thể hiện giá cần phải thanh toán (Sau khi đã trừ discount)
-- Limit: Hiển thị khóa học đã mua có giá cao nhất
-- Limit: Hiển thị khóa học đã mua có giá cao thứ 2
SELECT courses.*, users.name AS username, users.email,
CASE
	WHEN courses.price >= 600000 THEN 10
	ELSE 0
END AS discount,
(courses.price - courses.price * (CASE
	WHEN courses.price >= 600000 THEN 10
	ELSE 0
END) / 100) AS sale_price
FROM courses 
INNER JOIN courses_users
ON courses.id = courses_users.course_id
INNER JOIN users
ON users.id = courses_users.user_id
WHERE users.id = 2
ORDER BY courses.price DESC
LIMIT 1 OFFSET 1;



