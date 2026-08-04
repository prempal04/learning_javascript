let input = document.querySelector('input');
let ul = document.querySelector('ul');
let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let inputValue = input.value;
    ul.innerHTML += `<li>${inputValue}</li>`;

    let dltBtns = document.querySelectorAll('.delete');
    dltBtns.forEach(function(dltBtn){
        dltBtn.addEventListener('click', function(){
            this.parentElement.remove();
        });
    });
});

// we'll use event delegation to handle the click event on the delete buttons. Instead of adding individual event listeners to each delete button, we'll add a single event listener to the parent ul element and check if the clicked target is a delete button.

ul.addEventListener('click', function(event){
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
});