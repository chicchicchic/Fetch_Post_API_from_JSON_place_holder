
var postAPI = 'https://jsonplaceholder.typicode.com/posts';

fetch(postAPI)
    .then(function(response) {
        // response.json() trả về thẳng JSON.parse (JSON => Javascript types) luôn
        return response.json();
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2 class="post-block__title">${post.title}</h2>
                <p class="post-block__body">${post.body}</p>
            </li>`;
        });

        var html = htmls.join();
        
        // Render Interface
        document.querySelector('.post-section .post-block').innerHTML = html;
    })
    // That bai thì lot vao đây
    .catch(function(err) {
        // Ví dụ: có thể sửa sai URL 
        alert('Fetch Failed !');
    })