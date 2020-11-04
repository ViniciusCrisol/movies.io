const createPostForm = this.document.getElementById('create_post');

const titleInput = this.document.getElementById('title');
const resumeInput = this.document.getElementById('resume');
const contentInput = this.document.getElementById('content');
const thumbnailUrlInput = this.document.getElementById('thumbnail_url');

function getFormData() {
  const formValue = {
    title: titleInput.value,
    resume: resumeInput.value,
    content: contentInput.value,
    thumbnail_url: thumbnailUrlInput.value,
  };

  return formValue;
}

function submitForm() {
  const formData = getFormData();
  axios.post('/posts/create', formData);
}

createPostForm.addEventListener('submit', submitForm);
