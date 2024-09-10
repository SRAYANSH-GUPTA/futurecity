document.addEventListener('DOMContentLoaded', () => {
  var buttons = document.querySelectorAll('#robo');
  buttons.forEach(button => {
    button.onmouseover = () => button.style.transform = 'scale(1.2)';
    button.onmouseleave = () => button.style.transform = 'scale(1)';
  });
});
