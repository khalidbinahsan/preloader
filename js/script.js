(function() {
    // preloader script
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.animation = "opacity-none 0.5s linear forwards";
    }, 5000);
})();