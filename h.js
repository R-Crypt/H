document.getElementById('apologyButton').addEventListener('click', () => {
  const message = document.getElementById('message');
  message.classList.remove('hidden');
  message.classList.add('visible');
});
