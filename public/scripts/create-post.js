const createPostForm = this.document.getElementById('create_post');

const titleInput = this.document.getElementById('title');
const resumeInput = this.document.getElementById('resume');
const contentInput = this.document.getElementById('content');
const thumbnailUrlInput = this.document.getElementById('thumbnail_url');

function submitForm(event) {
  event.preventDefault();

  console.log(event);
}

createPostForm.addEventListener('submit', submitForm);
