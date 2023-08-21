var posts = [
  {
    title: "Tiêu đề bài viết 1",
    thumbnail:
      "https://fastly.picsum.photos/id/628/500/300.jpg?hmac=KjAafvtEDbGulpT6bQXau84558nCZd0ldDsfGpndJus",
    excerpt: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta laudantium mollitia itaque dolores corrupti? Modi esse reiciendis facilis cum, praesentium nulla! Eligendi fugiat perspiciatis perferendis accusantium eveniet adipisci? Quas, nam!`,
  },

  {
    title: "Tiêu đề bài viết 2",
    thumbnail:
      "https://fastly.picsum.photos/id/628/500/300.jpg?hmac=KjAafvtEDbGulpT6bQXau84558nCZd0ldDsfGpndJus",
    excerpt: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta laudantium mollitia itaque dolores corrupti? Modi esse reiciendis facilis cum, praesentium nulla! Eligendi fugiat perspiciatis perferendis accusantium eveniet adipisci? Quas, nam!`,
  },

  {
    title: "Tiêu đề bài viết 3",
    thumbnail:
      "https://fastly.picsum.photos/id/628/500/300.jpg?hmac=KjAafvtEDbGulpT6bQXau84558nCZd0ldDsfGpndJus",
    excerpt: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta laudantium mollitia itaque dolores corrupti? Modi esse reiciendis facilis cum, praesentium nulla! Eligendi fugiat perspiciatis perferendis accusantium eveniet adipisci? Quas, nam!`,
  },

  {
    title: "Tiêu đề bài viết 4",
    thumbnail:
      "https://fastly.picsum.photos/id/628/500/300.jpg?hmac=KjAafvtEDbGulpT6bQXau84558nCZd0ldDsfGpndJus",
    excerpt: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta laudantium mollitia itaque dolores corrupti? Modi esse reiciendis facilis cum, praesentium nulla! Eligendi fugiat perspiciatis perferendis accusantium eveniet adipisci? Quas, nam!`,
  },
];

var html = `<div class="posts">
${
  posts?.length
    ? posts
        ?.map?.(function (post, index) {
          return `<div class="post-item ${
            index % 2 !== 0 ? "image-right" : ""
          }">
        <img src="${post.thumbnail}" alt="">
        <div>
          <h2>${post.title}</h2>
          <p>
          ${post.excerpt}
          </p>
        </div>
      </div>
      <!--End .post-item-->`;
        })
        .join("")
    : "<h3>Không có bài viết</h3>"
}
</div>`;
document.write(html);

//Render
