let your_score = 0;
let computer_score = 0;

function generate_computers_choice() {
    let c = Math.floor(Math.random() * 10);
    if (c <= 3) {
        return 'rock';
    }
    else if (c <= 7) {
        return 'paper';
    }
    else {
        return 'scissor';
    }
}

function play(users_choice) {
    let computers_choice = generate_computers_choice();
    let winner;
    let result;

    const score = JSON.parse(localStorage.getItem('score')) || {
        user_score : 0,
        computer_score : 0,
        tie: 0
    };

    if (users_choice === computers_choice) {
        // alert(`You chose ${users_choice} and computer chose ${computers_choice}.\nIt's a tie.\nCurrent Score : You - ${score.user_score} Computer - ${score.computer_score}.`);
        result = `It's a tie.You chose <b>${users_choice}</b> and computer chose <b>${computers_choice}</b>.`;
        score.tie++;
    }
    else if (users_choice === 'rock') {
        if (computers_choice === 'paper') {
            winner = 'computer';
        }
        else if (computers_choice === 'scissor') {
            winner = 'you';
        }
    }
    else if (users_choice === 'paper') {
        if (computers_choice === 'rock') {
            winner = 'you';
        }
        else if (computers_choice === 'scissor') {
            winner = 'computer';
        }
    }
    else if (users_choice === 'scissor') {
        if (computers_choice === 'rock') {
            winner = 'computer';
        }
        else if (computers_choice === 'paper') {
            winner = 'you';
        }
    }

    if (winner === 'you') {
        score.user_score++;
        // alert(`Horray!! you win.\nYou chose ${users_choice} and computer chose ${computers_choice}.\nCurrent Score : You - ${score.user_score} Computer - ${score.computer_score}.`);
        result = `Horray!! you win.\nYou chose <b>${users_choice}</b> and computer chose <b>${computers_choice}</b>.`;
        
    }
    else if(winner === 'computer') {
        score.computer_score++;
        // alert(`Better luck next time! Computer wins.\nYou chose ${users_choice} and computer chose ${computers_choice}.\nCurrent Score : You - ${score.user_score} Computer - ${score.computer_score}.`);
        result = `Better luck next time! Computer wins.\nYou chose <b>${users_choice}</b> and computer chose <b>${computers_choice}</b>.`;
        
    }

    localStorage.setItem('score',JSON.stringify(score));
    update_score();
    update_result(result);
}

function reset() {

    const score = {
        user_score : 0,
        computer_score : 0,
        tie : 0
    };

    // alert(`Score reset is successful.\nCurrent Score : You - ${score.user_score} Computer - ${score.computer_score}.`)

    // localStorage.setItem('score',JSON.stringify(score));
    localStorage.removeItem('score');

    update_result('Start Playing Now.');
    update_score();
}

// function view_score() {
//     // const score = JSON.parse(localStorage.getItem('score')) || {
//     //     user_score : 0,
//     //     computer_score : 0,
//     //     tie : 0
//     // };
//     // alert(`Current Score : You - ${score.user_score} Computer - ${score.computer_score}.`)
// }

function update_score(){
    const score = JSON.parse(localStorage.getItem('score')) || {
        user_score : 0,
        computer_score : 0,
        tie : 0
    };

    let score_string = `You : ${score.user_score} &nbsp &nbsp Computer : ${score.computer_score} &nbsp &nbsp Tie: ${score.tie}`;
    document.querySelector('#js-score').innerHTML = score_string;
}

function update_result(result_string){
    document.querySelector('#js-result').innerHTML = result_string;
}