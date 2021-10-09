const chat = document.querySelector('.chat-form')
const Input = document.querySelector('.chat-input')
const chatWindow = document.querySelector('.chat-window')


chat.addEventListener('submit', event => {
  event.preventDefault()
  chatSocket.emit('chat', Input.value)
  renderMessage(Input.value, true)
  Input.value = ''
});

const renderMessage = (message, self=false) => {
  const div = document.createElement('div')
  div.classList.add('render-message')
  if(self)div.classList.add('text-align-right')
  div.innerText = message
  chatWindow.appendChild(div)
}

chatSocket.on('chat', message => {
  // make sure to modify this
  renderMessage(message)
})