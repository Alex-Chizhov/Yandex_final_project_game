var first_card_back = undefined;
var second_card_back = undefined;
var opened_cards = 0;
var seconds_status = undefined;

var main = document.querySelector('body');
main.addEventListener( 'click', function(event) {

    if (event.target.className === 'flip-card-front') {
        if (seconds_status === undefined){
            seconds();
            seconds_status = 'UP';
        }

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
                opened_cards += 2;


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
    // Обрабатываем клик по кнопке modal_button
    if (event.target.id === 'modal_button') {
        flip_over();
        document.getElementById("second").innerHTML = '60';
        numbers.sort(makeRandomArr);
        moving_cards();
        current_number = '60';
        modal.style.display = 'none';
        first_card_back = undefined;
        second_card_back = undefined;
        opened_cards = 0;
        seconds_status = undefined;
        numbers.sort(makeRandomArr);
    }
});


// Премешиваем массив с порядковыми номерами для карточек
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function makeRandomArr(a, b) {
    return Math.random() - 0.5;
}

// Перемешиваем карточки в случайном порядке
var moving_cards = function () {
    var flip_cards = document.getElementsByClassName('flip-card');
    for (let i = 0; i < flip_cards.length; i++) {
        let card = flip_cards[i];
        card.style.order = numbers[i];
    }
};

// Функция отсчета времени таймера
var current_number =  document.getElementById("second").innerHTML;
var modal = document.getElementById('modal');
var moda_text = document.getElementById("modal_text");
var win = document.getElementById("win");
var lose = document.getElementById("lose");
var seconds = function () {

    function myTimer() {
        if ( current_number === 0 && opened_cards !== 12 ){
            // проиграли
            win.style.display = 'none';
            lose.style.display = 'block';
            modal.style.display = 'block';
            clearInterval(interval);
            return;
        }else if (opened_cards === 12){
            // выйграли
            win.style.display = 'block';
            lose.style.display = 'none';
            modal.style.display = 'block';
            clearInterval(interval);
            return;
        }
        current_number -=1;
        if (current_number < 10) {
            var number = '0' + current_number;
            document.getElementById("second").innerHTML = number;
        }else {
            document.getElementById("second").innerHTML = current_number;
        }
    }

    var interval = setInterval(myTimer ,1000);
};


// Функция для переврпачивания карточек назад
var flip_over = function () {
    var cards = document.getElementsByClassName('flip-card-inner');
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('is-flipped');
        cards[i].style.borderColor = 'white';
        cards[i].style.backgroundColor = 'white';
    }

    var cards_back = document.getElementsByClassName('flip-card-back');
    for (let i = 0; i < cards_back.length; i++) {
        cards_back[i].style.borderColor = 'white';
        cards_back[i].style.backgroundColor = 'white';
    }
};

// первоначальный возов функций
numbers.sort(makeRandomArr);
moving_cards();