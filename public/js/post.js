const newCommentHandler = async (event) => {
  event.preventDefault();

  const body = document.querySelector('#comment-body').value.trim();
  const postID = +window.location.pathname.split("/")[2]
  const commentData = {
    body,
    post_id: postID,
  };

  if (body) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);