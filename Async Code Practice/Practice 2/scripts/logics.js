let interval_id;
let a = true;
let count = 0;
let msg;

function start_notification() {
        if(!interval_id)
        { interval_id = setInterval(function () {
            if (count > 0) {
                if (a) {
                    document.querySelector('title').innerHTML = msg;
                }
                else {
                    document.querySelector('title').innerHTML = 'Practice 2';
                }
                a = !a;
            }
        }, 1000);}
}

function add_notification() {
    count++;
    msg = `(${count}) New Message`;
    start_notification();
}

function remove_notification() {
    count--;
    msg = `(${count}) New Message`;
    if (count <= 0) {
        stop_notification();
    }
}

function read_all_notification() {
    count = 0;
    stop_notification();
}

function stop_notification() {
    document.querySelector('title').innerHTML = 'Practice 2';
    clearInterval(interval_id);
}