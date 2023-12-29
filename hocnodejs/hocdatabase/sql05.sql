-- Câu 1: Truy vấn danh sách posts và số lượng comment của từng post
-- SELECT posts.*, COUNT(comments.id) AS comment_count FROM posts
-- LEFT JOIN comments
-- ON posts.id = comments.post_id
-- GROUP BY posts.id;

-- SELECT *, 
-- (SELECT count(id) FROM comments WHERE posts.id = comments.post_id) AS comment_count
-- FROM posts;

-- Câu 2: Truy vấn danh sách users chưa comment lần nào
-- SELECT * FROM users WHERE id NOT IN (SELECT user_id FROM comments);

-- Câu 3: Hiển thị danh sách bài viết có số lượng bình luận > 1

-- Câu 4: Hiển thị thông tin bài viết có số bình luận lớn nhất
SELECT posts.*, COUNT(comments.id) AS comment_count FROM posts
LEFT JOIN comments
ON posts.id = comments.post_id
GROUP BY posts.id
HAVING COUNT(comments.id) = (
	-- Tìm max
	SELECT MAX(comment_max)
	FROM (
		--Bảng tạm
		SELECT COUNT(id) AS comment_max
		FROM comments
		GROUP BY post_id
	)
)
FETCH FIRST 1 ROWS ONLY



-- ORDER BY comment_count DESC 
-- LIMIT 1
-- HAVING COUNT(comments.id)>1;
