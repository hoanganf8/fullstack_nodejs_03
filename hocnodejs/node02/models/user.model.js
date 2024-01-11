const sql = require("../utils/db");

module.exports = {
  all: (status, keyword) => {
    let filter = sql`WHERE name IS NOT NULL`;
    if (status === "active" || status === "inactive") {
      filter = sql`${filter} AND status=${status === "active"}`;
    }
    if (keyword) {
      filter = sql`${filter} AND LOWER(email) LIKE ${
        "%" + keyword.toLowerCase() + "%"
      }`;
    }
    return sql`SELECT * FROM users ${filter}`;
  },
  existEmail: (email, id = 0) => {
    const ignore = id > 0 ? sql` AND id != ${id}` : sql``;
    return sql`SELECT id FROM users WHERE email=${email}${ignore}`;
  },
  create: ({ name, email, status }) => {
    return sql`INSERT INTO users(name, email, status, created_at, updated_at) VALUES(${name}, ${email}, ${status}, NOW(), NOW())`;
  },
  find: (id) => {
    return sql`SELECT * FROM users WHERE id = ${id}`;
  },
  update: ({ name, email, status }, id) => {
    return sql`UPDATE users SET name=${name}, email=${email}, status=${status}, updated_at=NOW() WHERE id=${id}`;
  },
  delete: (id) => {
    return sql`DELETE FROM users WHERE id = ${id}`;
  },
};

/*
1. Không lọc
SELECT * FROM users

2. Lọc theo status
SELECT * FROM users WHERE status=${status}

3. Lọc theo keyword
SELECT * FROM users WHERE email LIKE '%${keyword}%'

4. Lọc theo cả status và keyword
SELECT * FROM users WHERE status=${status} AND email LIKE '%${keyword}%'

Giải pháp: 
1. Không lọc
SELECT * FROM users WHERE name IS NOT NULL

2. Lọc theo status
SELECT * FROM users WHERE name IS NOT NULL AND status=${status}

3. Lọc theo keyword
SELECT * FROM users WHERE name IS NOT NULL AND status=${status} AND email LIKE '%${keyword}%'
*/
