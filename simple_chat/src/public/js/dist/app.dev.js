"use strict";

$(document).ready(function () {
  console.log('ready');
  var socket = io();
  var chatForm = document.querySelector('#chat-form');
  var chatMes = document.querySelector('#chat-mes');
  var chatBtn = document.querySelector('#send-chat');
  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var message = chatMes.value;
    console.log(socket.id);
    socket.emit('on-chat', {
      message: message
    });
    chatMes.value = '';
  });
  chatBtn.addEventListener('click', function (e) {
    var message = chatMes.value;
    console.log(socket.id);
    socket.emit('on-chat', {
      message: message
    });
    chatMes.value = '';
  });
  var messages = document.querySelector('#messages');
  socket.on('user-chat', function (message) {
    var chatItem = document.createElement('li');
    chatItem.textContent = message.message;
    messages.appendChild(chatItem);
  });
});