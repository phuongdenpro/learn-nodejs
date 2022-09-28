$(document).ready(function () {
    console.log('ready');
    const socket = io();
    const chatForm = document.querySelector('#chat-form');
    const chatMes = document.querySelector('#chat-mes');
    const chatBtn = document.querySelector('#send-chat');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatMes.value;
        console.log(socket.id);
        socket.emit('on-chat', {
            message: message,
        });
        chatMes.value = '';
    });

    chatBtn.addEventListener('click', (e) => {
        const message = chatMes.value;
        console.log(socket.id);
        socket.emit('on-chat', {
            message: message,
        });
        chatMes.value = '';
    });

    const messages = document.querySelector('#messages');
    socket.on('user-chat', (message) => {
        const chatItem = document.createElement('li');
        chatItem.textContent = message.message;

        messages.appendChild(chatItem);
    });
});
