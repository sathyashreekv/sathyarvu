const header= document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>120);
});
let menu=document.querySelector('#menu-icon');
let=navlist=document.querySelector('.navlist');
menu.onclick=()=>{
    menu.classList.toggle('menu');
    navlist.classList.toggle('active');

};
window.onscroll=()=>{
    menu.classList.remove('menu');
    menu.classList.remove('active');

}
function validateForm() {
    const username = document.getElementById('name');
    const email = document.getElementById('email');
   

    const usernameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
   

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
   

    // Validate username
    if (name.value.trim() === '') {
        nameError.textContent = 'name is required';
    }

    // Validate email
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Email is not valid';
    }
}

