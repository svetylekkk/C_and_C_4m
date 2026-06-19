function parallax() {
  let main = document.querySelector('main')

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth - 0.4) * 10
    let y = (event.clientY / window.innerHeight - 0.4) * 6

    main.style.transform = `translate(${x}px, ${y}px)`
  })
}

back()

function back() {
  document.querySelector('.link').addEventListener('click', () => {
    window.history.back()
    console.log(window.history.length())
  })
}
