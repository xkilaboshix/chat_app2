// ここでルームのIDを取りたいけど書き方がわからない
App.room = App.cable.subscriptions.create("RoomChannel", {
  room: $('chatroom').data('room_id'),
  connected: function() {
    // バックエンドと繋がったか確認できるもの
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(message) {
    const messages = document.getElementById('messages')
    messages.innerHTML += message
    // ブロードキャストされたらデータを受け取る
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function(content) {
    const room_id = $('#chatroom').data('room_id');
    const user_id = $('#user_id').data('user_id');
    // const room_id = document.getElementById('room')
    return this.perform('speak', {message: content, room_id: room_id, user_id: user_id});
  }
});

// document.addEventListener('DOMContentLoaded', function(){
//   const input = document.getElementById('chat-input')
//   const button = document.getElementById('button')
//   button.addEventListener('click', function(){
//     const content = input.value
//     App.room.speak(content)
//     input.value = ''
//   })
// })


// document.addEventListener('DOMContentLoaded', function(){
//   document.getElementById('button').onclick = function(){
//     const input = document.getElementById('chat-input')
//     const content = input.value
//     App.room.speak(content)
//     input.value = ''
//   };
// });


// $(document).on('keypress', '#chat-input', function(e) {
//   if (e.keyCode === 13 && e.target.value !== "") {
//     const input = document.getElementById('chat-input')
//     const content = input.value
//     App.room.speak(content)
//     roomChannel.create(e.target.value);
//     e.target.value = '';
//   }
// })

$(document).on('click', "#button", function() {
  const input = document.getElementById('chat-input')
  let content = input.value
  if (content !== "") {
    App.room.speak(content)
    content = '';
  }
})
