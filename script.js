var main = document.querySelector('#main');
main.addEventListener( 'click', function(event) {

    // Передняя сторона карточки
    if (event.target.className === 'flip-card-front') {
        event.target.parentNode.classList.toggle('is-flipped');
    }
    // Задняя сторона карточки
    else if (event.target.className === 'emoji') {
        event.target.parentNode.parentNode.classList.toggle('is-flipped');
    }
    else if (event.target.className === 'flip-card-back') {
        event.target.parentNode.classList.toggle('is-flipped');
    }

});