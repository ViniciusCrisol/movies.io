const createPostForm = this.document.getElementById('create_post');

const titleInput = this.document.getElementById('title');
const resumeInput = this.document.getElementById('resume');
const contentInput = this.document.getElementById('content');
const thumbnailUrlInput = this.document.getElementById('thumbnail_url');

function getFormData() {
  const formValue = {
    title: titleInput.value.trim(),
    resume: resumeInput.value.trim(),
    content: contentInput.value.trim(),
    thumbnail_url: thumbnailUrlInput.value.trim(),
  };

  return formValue;
}

function submitForm(event) {
  event.preventDefault();
  const formData = getFormData();
  axios.post('/posts/create', formData);

  window.location.href = '/admin/posts/create';
}

createPostForm.addEventListener('submit', submitForm);
