function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const sidebar = document.querySelector(".sidebar");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    if(sidebar) {
        sidebar.classList.toggle("open");
    }
}