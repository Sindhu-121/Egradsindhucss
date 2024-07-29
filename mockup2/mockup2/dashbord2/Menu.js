function toggleSubmenu(id) {
    var submenu = document.getElementById(id);
    var parent = submenu.previousElementSibling;
    
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        parent.classList.remove("active");
    } else {
        submenu.style.display = "block";
        parent.classList.add("active");
    }
}
