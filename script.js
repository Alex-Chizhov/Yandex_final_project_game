var first_card_back = undefined;
var second_card_back = undefined;

var main = document.querySelector('#main');
main.addEventListener( 'click', function(event) {

    if (event.target.className === 'flip-card-front') {
        var current_card_back = event.target.nextElementSibling;

        if (first_card_back === undefined && second_card_back === undefined) {
            first_card_back = current_card_back;
            card_inner = first_card_back.parentNode;
            card_inner.classList.toggle('is-flipped');

        } else if (first_card_back !== undefined && second_card_back === undefined) {
            second_card_back = current_card_back;
            card_inner = second_card_back.parentNode;
            card_inner.classList.toggle('is-flipped');

            var first_emoji = first_card_back.firstChild.textContent;
            var second_emoji = second_card_back.firstChild.textContent;

            if (first_emoji === second_emoji){

                first_card_back.style.backgroundColor = "#5AD66F";
                second_card_back.style.backgroundColor = "#5AD66F";
                first_card_back.parentNode.style.borderColor  = "#5AD66F";
                second_card_back.parentNode.style.borderColor  = "#5AD66F";
                first_card_back.parentNode.style.backgroundColor  = "#5AD66F";
                second_card_back.parentNode.style.backgroundColor  = "#5AD66F";


            } else if (first_emoji !== second_emoji) {

                first_card_back.style.backgroundColor = "#F44336";
                second_card_back.style.backgroundColor = "#F44336";
                first_card_back.parentNode.style.borderColor  = "#F44336";
                second_card_back.parentNode.style.borderColor  = "#F44336";
                first_card_back.parentNode.style.backgroundColor  = "#F44336";
                second_card_back.parentNode.style.backgroundColor  = "#F44336";
            }

        } else if (first_card_back !== undefined && second_card_back !== undefined) {
            var first_emoji = first_card_back.firstChild.textContent;
            var second_emoji = second_card_back.firstChild.textContent;


            if (first_emoji === second_emoji){
                current_card_back.parentNode.classList.toggle('is-flipped');

                first_card_back = current_card_back;
                second_card_back = undefined;

            } else if (first_emoji !== second_emoji){

                current_card_back.parentNode.classList.toggle('is-flipped');

                first_card_back.parentNode.classList.remove('is-flipped');
                second_card_back.parentNode.classList.remove('is-flipped');
                first_card_back.style.backgroundColor = "white";
                second_card_back.style.backgroundColor = "white";
                first_card_back.parentNode.style.borderColor  = "white";
                second_card_back.parentNode.style.borderColor  = "white";
                first_card_back.parentNode.style.backgroundColor  = "white";
                second_card_back.parentNode.style.backgroundColor  = "white";

                first_card_back = current_card_back;
                second_card_back = undefined;

            }
        }
    }
});


// Премешиваем массив с порядковыми номерами для карточек
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function makeRandomArr(a, b) {
    return Math.random() - 0.5;
}
numbers.sort(makeRandomArr);

// Перемешиваем карточки в случайном порядке
var moving_cards = function () {
    var flip_cards = document.getElementsByClassName('flip-card');
    for (let i = 0; i < flip_cards.length; i++) {
        let card = flip_cards[i];
        card.style.order = numbers[i];
    }
};
moving_cards();