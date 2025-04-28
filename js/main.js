document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('myImage');
  if (img) {
    img.addEventListener('mouseover', () => {
      img.src = 'imgs/image_03.PNG';
    });
    img.addEventListener('click', () => {
      img.src = 'imgs/image_02.jpg';
    });
    img.addEventListener('mouseout', () => {
      img.src = 'imgs/one.jpg';
    });
  }

  const cvLinks = document.querySelectorAll('.cv-link');
  if (cvLinks.length > 0) {
    cvLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
      });
    });
  }
});

function openModal() {
  const modal = document.getElementById('passwordModal');
  if (modal) {
    modal.style.display = 'flex'; // Important! Must be flex to center
  }
}

function closeModal() {
  const modal = document.getElementById('passwordModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function verifyPassword() {
  const passwordInput = document.getElementById('passwordInput');
  const correctPassword = '1228'; // Your password
  if (passwordInput.value === correctPassword) {
    window.open('docs/cv.pdf', '_blank');
    closeModal();
  } else {
    alert('Incorrect password. Please try again.');
  }
}

