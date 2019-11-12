$(document).ready(function () {
    let group =[];
    let position = [];
    let one = [];
    let two = [];
    group.push("fas fa-heart");
    group.push("fas fa-piggy-bank");
    group.push("fas fa-cat");
    group.push("fas fa-fish");
    group.push("fas fa-bomb");
    group.push("fas fa-bone");
    group.push("fas fa-car");
    group.push("fab fa-accessible-icon");
    group.push("fas fa-bicycle");


    for (let i=0; i < 9; i++){
        for (let j=1; j < 5; j++){
            position.push(i);
        }
    }
    random100 = (arr, count) =>{
        let randomNumber, randomNumber2, temp;
        let temparr = arr;
        for (let i=1; i < count; i++){
            randomNumber = Math.floor(Math.random() * arr.length);
            randomNumber2 = Math.floor(Math.random() * arr.length);
            temp = temparr[randomNumber];
            temparr[randomNumber] = temparr[randomNumber2];
            temparr[randomNumber2] = temp;
        }
        return temparr;
    }
    randomSure = (arr) => {
        let randomNumber, temp;
        for (let i=1; i < arr.length; i++){
            if (arr[i] === arr[i+1]){
                randomNumber = Math.floor(Math.random() * arr.length);
                temp = arr[i];
                arr[i] = arr[randomNumber];
                arr[randomNumber] = temp;
            }
        }
        return arr;
    }
    setIcon = (arr) => {
        let arrtemp = arr;
        for (let i=0; i < arr.length; i++){
            arrtemp[i] = group[arr[i]];
        }
        return arrtemp;
    }
    position =random100(position, 100);
    position = randomSure(position);
    position = setIcon(position);
    for (let i=0; i < position.length; i++){
        temp = "#card-" +i;
        $(temp).addClass(position[i]).css("font-size", "3em");
    }
    let countTwo = 0;
    let countClick = 0;
    let countPoint = 0;

    $('.board-card').on("click", function () {
        countClick ++;
        $('#click-count').text(countClick);
        if(countTwo < 2){
            countTwo++;
            $(this).addClass("flip");
            if (countTwo == 1) {
                let temp = $(this).children(".board-card-back").attr("id");
                temp = temp.replace('card-', '');
                one.push(temp);
                one.push(position[temp]);
            }
            if (countTwo == 2) {
                let temp = $(this).children(".board-card-back").attr("id");
                temp = temp.replace('card-', '');
                two.push(temp);
                two.push(position[temp]);
            }
        } else {
            $('.board-card').removeClass("flip");
            one =[];
            two =[];
            countTwo = 0;
        }

        if ( one[1] === two[1] && countTwo === 2  && one[0] !== two[0]){
              let temp = '#card-' + one[0];
              $(temp).parents('.board-card').fadeOut();
              temp = '#card-' + two[0];
              $(temp).parents('.board-card').fadeOut();
              countPoint++;
             $('#point-count').text(countPoint);

        };
        if (countPoint === position.length / 2) {
            $('table').text("You Win, Thank You So much.").css("font-size","4em");
        }

    });

});