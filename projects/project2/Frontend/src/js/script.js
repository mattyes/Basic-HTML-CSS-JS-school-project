const textarea = document.getElementById('chat-box');

textarea.addEventListener('input', function () {

  textarea.style.height = 'auto';
  
  const newHeight = Math.min(textarea.scrollHeight, 350); //max-height in PX
  textarea.style.height = `${newHeight}px`;

});
