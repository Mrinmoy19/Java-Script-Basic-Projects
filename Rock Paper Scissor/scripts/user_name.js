while (!user_name) {
    var user_name = prompt('Please enter your name');
}

if (user_name.length != 0) {
    user_name = user_name[0].toUpperCase() + user_name.slice(1,)
    document.getElementById('greeting_text').innerHTML = `Welcome, ${user_name}`;
}