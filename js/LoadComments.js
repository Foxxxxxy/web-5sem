window.addEventListener("DOMContentLoaded", function() {
  fetch('https://jsonplaceholder.typicode.com/comments/')
    .then(response => response.json())
    .then(comments => {
      const pos = Math.random() * 495
      const commentsList = document.getElementById('comments')
      commentsList.innerHTML = ''
      comments.slice(pos, pos + 5).forEach(comment => {
        commentsList.innerHTML += `<div class="comment">
        <div class="comment__avatar"></div>
          <div class="comment__body">
            <p class="comment__name">${comment.name}</p>
            <p class="comment__text">${comment.body}</p>
          </div>
        </div>`
      })
    })
    .catch(error => {
      console.log(error) 
      toastr.warning("⚠ Something went wrong")  // вывод ошибки загрузки
    })
});
