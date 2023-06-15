const printOutMessage = () => {
    let num = Math.floor(Math.random() * 10);
    switch (num) {
        case 0:
            return 'Shark gal replied! She said: I miss you too<3';
            break;
        case 1:
            return 'Shark gal did not reply to you...She might be sleeping right now:(';
            break;
        case 2:
            return 'Shark gal replied! She said: I love you...I want cuddle with you when you are home tonight.';
            break;
        case 3:
            return 'Shark gal replied! She said: Send me more messages. I really need you.';
            break;
        case 4:
            return 'Shark gal did not reply to you...She is working right now. Sad.';
            break;
        case 5:
            return 'Shark gal replied! She said: I want kisses -3-';
            break;
        case 6:
            return 'Shark gal replied! She said: My back hurts:( I am done with this assignment:(';
            break;
        case 7:
            return 'Shark gal replied! She said: Can you bring me some candy home? Love you!';
            break;
        case 8:
            return 'Shark gal did not reply to you...She is mad at you because you did not gave her kisses this morning when you went out.';
            break;
        case 9:
            return 'Shark gal replied a emoji. Looks like she is not in a good mood.';
            break;

    }
}

let message = document.getElementById('the-message');
message.hidden = true;
let messageMobile = document.getElementById('the-message-mobile');
messageMobile.hidden = true;
let button = document.querySelector('button');
let buttonMobile = document.getElementById('button-mobile');
//button
button.onclick = function() {
    message.innerHTML = printOutMessage();
    message.hidden = false;
}
//mobile button
buttonMobile.onclick = function() {
    messageMobile.innerHTML = printOutMessage();
    messageMobile.hidden = false;
}