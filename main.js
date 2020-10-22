document.querySelector('.menu-btn').addEventListener('click', () => { //select '.menu-btn' class and add a listener click
    document.querySelector('.nav-menu').classList.toggle('show'); // in the arrow function select '.nav-menu' and use toggle class, this class add or remove 'show' class
});