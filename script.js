document.addEventListener("DOMContentLoaded", () => {
    // **Intersection Observer untuk Animasi saat Section Terlihat**
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Tambahkan kelas "visible" saat section terlihat
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 } // Memicu saat 10% dari elemen terlihat
    );

    // Observe setiap section di halaman
    sections.forEach(section => {
        observer.observe(section);
    });

    // **Fungsi untuk Hamburger Menu**
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    menuToggle.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
            // Tambahkan animasi tutup menu
            nav.style.opacity = '0';
            nav.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                nav.classList.remove('open');
            }, 300); // Durasi sesuai dengan CSS transition (300ms)
        } else {
            // Tambahkan animasi buka menu
            nav.classList.add('open');
            setTimeout(() => {
                nav.style.opacity = '1';
                nav.style.transform = 'translateY(0)';
            }, 10); // Tambahkan delay untuk transisi halus
        }
    });

    // **Tutup Navigasi Saat Link Diklik (Opsional)**
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('open')) {
                nav.style.opacity = '0';
                nav.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    nav.classList.remove('open');
                }, 300); // Durasi sesuai CSS transition
            }
        });
    });
});
