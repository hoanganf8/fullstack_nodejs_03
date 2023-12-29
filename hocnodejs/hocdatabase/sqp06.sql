-- Sao chép table
-- 1. Sao chép cấu trúc
CREATE TABLE customers (LIKE users INCLUDING ALL);
-- 2. Sao chép data
INSERT INTO customers SELECT * FROM users;