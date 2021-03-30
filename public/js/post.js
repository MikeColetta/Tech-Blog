const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const body = document.querySelector('#comment-body').value.trim();
  
    if (body) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ body }),
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