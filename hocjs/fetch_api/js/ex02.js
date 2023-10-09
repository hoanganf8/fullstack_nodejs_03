//Tách phần fetch api => thành object client
// -> Dễ bảo trì
// -> Giải quyết các bài toán phức tạp liên quan đến API trong dự án

import { client } from "./client.js";

/*
<div class="row g-3">
        <div class="col-6 col-lg-4">
          <div class="post-item border p-3">
            <h3><a href="#" class="text-decoration-none">Tiêu đề bài viết 1</a></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dolorum perspiciatis inventore rerum reiciendis error id mollitia, deleniti sunt, necessitatibus laborum voluptatum fugiat suscipit doloremque tenetur vero a! Nihil, vitae.
            </p>
          </div>
        </div>

        <div class="col-6 col-lg-4">
          <div class="post-item border p-3">
            <h3><a href="#" class="text-decoration-none">Tiêu đề bài viết 1</a></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dolorum perspiciatis inventore rerum reiciendis error id mollitia, deleniti sunt, necessitatibus laborum voluptatum fugiat suscipit doloremque tenetur vero a! Nihil, vitae.
            </p>
          </div>
        </div>

        <div class="col-6 col-lg-4">
          <div class="post-item border p-3">
            <h3><a href="#" class="text-decoration-none">Tiêu đề bài viết 1</a></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dolorum perspiciatis inventore rerum reiciendis error id mollitia, deleniti sunt, necessitatibus laborum voluptatum fugiat suscipit doloremque tenetur vero a! Nihil, vitae.
            </p>
          </div>
        </div>

        <div class="col-6 col-lg-4">
          <div class="post-item border p-3">
            <h3><a href="#" class="text-decoration-none">Tiêu đề bài viết 1</a></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dolorum perspiciatis inventore rerum reiciendis error id mollitia, deleniti sunt, necessitatibus laborum voluptatum fugiat suscipit doloremque tenetur vero a! Nihil, vitae.
            </p>
          </div>
        </div>

      </div>
*/

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

const getPosts = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  //Chuyển từ object -> query string
  //key1=value1&key2=value2...
  const { data: posts } = await client.get("/posts?" + queryString);
  render(posts);
};

let order = "desc";
let sort = "id";
let keyword = "";

getPosts({
  _sort: sort,
  _order: order,
});

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
