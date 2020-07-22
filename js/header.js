function toggle(e){
    e.preventDefault();
    let mainNav = document.getElementById('menu');
    console.log(mainNav.style.display);
    if (mainNav.style.display !="flex") {
        mainNav.style.display = "flex";
    } else {
        mainNav.style.display = "none";
    }
}