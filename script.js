const inputEle = document.querySelectorAll('input');
inputEle.forEach(element => {
    element.addEventListener('focus', (e) => {
        if(!e.target.textContent){
            e.target.classList.add('invalidNew');
        }
    });
});