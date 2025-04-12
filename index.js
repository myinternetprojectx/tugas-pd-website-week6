// Ambil semua anchor link di navbar
const links = document.querySelectorAll('nav a');

// Tambahkan event listener untuk setiap link
links.forEach(link => {
  link.addEventListener('click', function(e) {
    // Menghindari perilaku default (scroll langsung)
    e.preventDefault();

    // Ambil ID dari href dan temukan elemen yang sesuai
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Gunakan smooth scrolling dengan scrollIntoView
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});