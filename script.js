const INPUT = document.getElementById('input')
const BTN = document.getElementById('guess-btn')

BTN.addEventListener('click', () => {
  const ANSWER = Math.floor(Math.random() * 6) + 1
  if (+INPUT.value === ANSWER) {
    alert('Good job, you got it right!')
  } else {
    alert('Sorry, that was incorrect.')
  }
})
