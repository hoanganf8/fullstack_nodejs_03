# Session

- Phiên làm việc của trình duyệt
- Dữ liệu của session nằm ở server

Để server biết được phiên làm việc --> Dùng cookie chứa sessionId

Request => Cookie (sessionId) => Server đọc cookie => Lấy nội dung của session => Response

# Cách làm việc với Request Response

- View (Giao diện) --> Thêm vào http get
- Logic cần xử lý --> Thêm vào post, put, patch, delete --> Redirect về get

Ví dụ:

- Xử lý login ==> Logic login (Viết ở post) ==> Redirect về trang chủ (GET)
- Xử lý validate ==> Failed ==> Redirect về form ban đầu (Back về Request trước)

Cách gửi thông báo giữa các request

- Cách 1: Dùng search params
- Cách 2: Dùng Flash Session (Session chỉ hiển thị 1 lần)
