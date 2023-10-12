//Tách phần fetch api => thành object client
// -> Dễ bảo trì
// -> Giải quyết các bài toán phức tạp liên quan đến API trong dự án

import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;

const render = (posts) => {
  const stripHtml = (html) => html.replace(/(<([^>]+)>)/gi, "");

  const postsEl = document.querySelector(".posts");

  const postHtml = posts
    .map(
      ({ title, excerpt }) =>
        `<div class="col-6 col-lg-4">
        <div class="post-item border p-3">
        <h3><a href="#" class="text-decoration-none">${stripHtml(
          title,
        )}</a></h3>
        <p>${stripHtml(excerpt)}</p>
        </div>
        </div>
        `,
    )
    .join("");

  postsEl.innerHTML = `
  <div class="row g-3">
  ${postHtml}
  </div>
  `;
};

const renderPaginate = (totalPages) => {
  //totalPages => Tổng số trang
  const paginationNav = document.querySelector(".pagination-nav");
  paginationNav.innerHTML = `<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">Trước</a></li>
  ${[...Array(totalPages).keys()]
    .map(
      (index) =>
        `<li class="page-item ${
          +currentPage === +index + 1 ? "active" : ""
        }"><a class="page-link page-number" href="#">${index + 1}</a></li>`,
    )
    .join("")}
  <li class="page-item"><a class="page-link" href="#">Sau</a></li>
</ul>`;

  paginationNav.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("page-number")) {
      //Gọi hàm chuyển trang
      goPage(+e.target.innerText);
    }
  });
};

const goPage = (page) => {
  currentPage = page;
  getPosts({
    _sort: sort,
    _order: order,
    _page: currentPage,
    _limit: PAGE_LIMIT,
  });
};

const getPosts = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  //Chuyển từ object -> query string
  //key1=value1&key2=value2...
  const { data: posts, response } = await client.get("/posts?" + queryString);
  //Tính tổng số trang = Tổng số bài / Số bài trên 1 trang
  const totalPosts = response.headers.get("x-total-count");
  const totalPages = Math.ceil(totalPosts / PAGE_LIMIT);
  render(posts);
  renderPaginate(totalPages);
};

let order = "desc";
let sort = "id";
let keyword = "";
let currentPage = 1;

getPosts({
  _sort: sort,
  _order: order,
  _page: currentPage,
  _limit: PAGE_LIMIT,
});
//Phân trang:
//Tổng số trang = Tổng số bài / limit

//Xây dựng chức năng tìm kiếm
const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keywordEl = e.target.querySelector(".keyword");
  keyword = keywordEl.value;

  getPosts({
    _sort: sort,
    _order: order,
    q: keyword,
  });

  keywordEl.value = "";
});

//Xây dựng chức năng sắp xếp
const sortByEl = document.querySelector(".sort-by");
sortByEl.addEventListener("change", (e) => {
  order = e.target.value;
  getPosts({
    _sort: sort,
    _order: order,
    q: keyword,
  });
});
