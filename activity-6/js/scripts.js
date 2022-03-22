var messagesArray = [];
var messageType = {
  out: 'out-message',
  in: 'in-message',
  unknown: 'unknown-message'
};

function Message(type, user, message) {
  this.type = type;
  this.user = user;
  this.message = message;
}

function createMessage(message) {
  var messageText = document.createTextNode(
    message.user + ': ' + message.message
  );

  var messageElement = document.createElement('div');
  messageElement.appendChild(messageText);

  messageElement.className = message.type;

  return messageElement;
}

function addMessageHandler(event) {
  var user = '';
  var type;
  var messageInput = document.getElementById('message-input');
  var messageContainer = document.getElementById('message-container');

  switch (event.target.id) {
    case 'send-button':
      user = 'John';
      type = messageType.out;
      break;
    case 'reply-button':
      user = 'Jacob';
      type = messageType.in;
      break;
    default:
      user = 'unknown';
      type = messageType.unknown;
  }

  if (messageInput.value != '') {
    var message = new Message(type, user, messageInput.value);
    messagesArray.push(message);
    var messageElement = createMessage(message);
    messageContainer.appendChild(messageElement);

    messageInput.value = '';
  }
}

var init = function() {
  document.getElementById('send-button').onclick = addMessageHandler;
  document.getElementById('reply-button').onclick = addMessageHandler;
  console.log('app started');
}

init();