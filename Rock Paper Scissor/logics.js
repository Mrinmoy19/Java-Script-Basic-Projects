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
    let winner = undefined;

    const score = JSON.parse(localStorage.getItem('score')) || {
        user_score : 0,
        computer_score : 0
    };

    if (users_choice === computers_choice) {
        alert(`You chose ${users_choice} and computer chose ${computers_choice}.\nIt's a tie.\nCurrent Score : You - ${score.user_score} Computer - ${score.computer_score}.`);
        return;
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
        alert(`Horray!! you win.\nYou chose ${users_choice} and computer chose ${computers_choice}.\nCurrent Score : You - ${score.user_score} Computer - ${score.computer_score}.`);
        
    }
    else {
        score.computer_score++;
        alert(`Better luck next time! Computer wins.\nYou chose ${users_choice} and computer chose ${computers_choice}.\nCurrent Score : You - ${score.user_score} Computer - ${score.computer_score}.`);
        
    }

    localStorage.setItem('score',JSON.stringify(score));
}

function reset() {

    const score = {
        user_score : 0,
        computer_score : 0
    };

    alert(`Score reset is successful.\nCurrent Score : You - ${score.user_score} Computer - ${score.computer_score}.`)

    // localStorage.setItem('score',JSON.stringify(score));
    localStorage.removeItem('score');
}

function view_score() {
    const score = JSON.parse(localStorage.getItem('score')) || {
        user_score : 0,
        computer_score : 0
    };
    alert(`Current Score : You - ${score.user_score} Computer - ${score.computer_score}.`)
}