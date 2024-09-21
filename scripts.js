document.addEventListener('DOMContentLoaded', () => {
  // Theme switching
  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('theme-dark');
    body.classList.toggle('theme-light');
  };

  // Attach theme switcher to button
  const themeButton = document.querySelector('.theme-toggle button');
  if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
  }

  // Loading animation listener
  window.addEventListener('load', () => {
    document.getElementById('loading-listener').style.display = 'none';
  });

  // Login handling logic, form submission and redirect
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phoneNumber = document.getElementById('phone-number').value;
      // Simulate login based on phone number input
      if (phoneNumber === '0740035058') {
        // Redirect admin to the admin dashboard
        window.location.href = 'admindata.html';
      } else {
        // Redirect regular users to the homepage
        window.location.href = 'homepage.html';
      }
    });
  }

  // Admin functions (image upload and description)
  const uploadForm = document.getElementById('upload-form');
  if (uploadForm) {
    uploadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const uploadedContent = document.getElementById('uploaded-content');
      const imageFile = document.getElementById('image-upload').files[0];
      const description = document.getElementById('image-description').value;

      if (imageFile && description) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<img src="${URL.createObjectURL(imageFile)}" alt="Bot Image" width="200"><p>${description}</p>`;
        uploadedContent.appendChild(listItem);

        // Clear form fields
        uploadForm.reset();
      } else {
        alert('Please upload an image and provide a description.');
      }
    });
  }
});
    
