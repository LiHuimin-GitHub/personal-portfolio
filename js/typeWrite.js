const typingElement = document.querySelector('.typing-word');
let wordIndex = 0;

function typeWord() {
  const word = typingElement.dataset.words.split(',')[wordIndex];
  const duration = word.length * 100;

  typingElement.textContent = '';

  Array.from(word).forEach((letter, index) => {
    setTimeout(() => {
      typingElement.textContent += letter;
      if (index === word.length - 1) {
        setTimeout(() => {
          typingElement.classList.remove('typing');
          setTimeout(() => {
            wordIndex = (wordIndex + 1) % 2;
            typingElement.classList.add('typing');
            typeWord();
          }, 500);
        }, 1000);

      }
    }, index * 100);
  });
}

typingElement.classList.add('typing');
typeWord();






