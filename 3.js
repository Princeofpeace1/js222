const message = prompt('أدخل رسالة: ');
console.log(message);

for (let i = 0; i < message.length; i++) {
    if (!isNaN(message[i])) {
    console.log(message[i] + ' هو رقم');
    } else if (message[i].match(/[a-zA-Z]/)) {
    console.log(message[i] + ' هو حرف');
    }
    else{
        console.log(message[i] + ' هو رمز');

    }
}