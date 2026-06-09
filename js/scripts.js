// 1 страница
zin.onmousedown = function (event) {
  let shiftX = event.clientX - zin.getBoundingClientRect().left
  let shiftY = event.clientY - zin.getBoundingClientRect().top

  zin.style.position = 'absolute'
  zin.style.zIndex = 1000
  document.body.append(zin)

  moveAt(event.pageX, event.pageY)

  function moveAt(pageX, pageY) {
    zin.style.left = pageX - shiftX + 'px'
    zin.style.top = pageY - shiftY + 'px'
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY)
  }

  document.addEventListener('mousemove', onMouseMove)

  zin.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove)
    zin.onmouseup = null
  }
}

zin.ondragstart = function () {
  return false
}

// 2 страница
zin2.onmousedown = function (event) {
  let shiftX = event.clientX - zin2.getBoundingClientRect().left
  let shiftY = event.clientY - zin2.getBoundingClientRect().top

  zin2.style.position = 'absolute'
  zin2.style.zIndex = 1000
  document.body.append(zin2)

  moveAt(event.pageX, event.pageY)

  function moveAt(pageX, pageY) {
    zin2.style.left = pageX - shiftX + 'px'
    zin2.style.top = pageY - shiftY + 'px'
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY)
  }

  document.addEventListener('mousemove', onMouseMove)

  zin2.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove)
    zin2.onmouseup = null
  }
}

zin2.ondragstart = function () {
  return false
}

// 3 страница
zin3.onmousedown = function (event) {
  let shiftX = event.clientX - zin3.getBoundingClientRect().left
  let shiftY = event.clientY - zin3.getBoundingClientRect().top

  zin3.style.position = 'absolute'
  zin3.style.zIndex = 1000
  document.body.append(zin3)

  moveAt(event.pageX, event.pageY)

  function moveAt(pageX, pageY) {
    zin3.style.left = pageX - shiftX + 'px'
    zin3.style.top = pageY - shiftY + 'px'
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY)
  }

  document.addEventListener('mousemove', onMouseMove)

  zin3.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove)
    zin3.onmouseup = null
  }
}

zin3.ondragstart = function () {
  return false
}

// 4 страница
zin4.onmousedown = function (event) {
  let shiftX = event.clientX - zin4.getBoundingClientRect().left
  let shiftY = event.clientY - zin4.getBoundingClientRect().top

  zin4.style.position = 'absolute'
  zin4.style.zIndex = 1000
  document.body.append(zin4)

  moveAt(event.pageX, event.pageY)

  function moveAt(pageX, pageY) {
    zin4.style.left = pageX - shiftX + 'px'
    zin4.style.top = pageY - shiftY + 'px'
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY)
  }

  document.addEventListener('mousemove', onMouseMove)

  zin4.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove)
    zin4.onmouseup = null
  }
}

zin4.ondragstart = function () {
  return false
}

// 5 страница
zin5.onmousedown = function (event) {
  let shiftX = event.clientX - zin5.getBoundingClientRect().left
  let shiftY = event.clientY - zin5.getBoundingClientRect().top

  zin5.style.position = 'absolute'
  zin5.style.zIndex = 1000
  document.body.append(zin5)

  moveAt(event.pageX, event.pageY)

  function moveAt(pageX, pageY) {
    zin5.style.left = pageX - shiftX + 'px'
    zin5.style.top = pageY - shiftY + 'px'
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY)
  }

  document.addEventListener('mousemove', onMouseMove)

  zin5.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove)
    zin5.onmouseup = null
  }
}

zin5.ondragstart = function () {
  return false
}

// 6 страница
zin6.onmousedown = function (event) {
  let shiftX = event.clientX - zin6.getBoundingClientRect().left
  let shiftY = event.clientY - zin6.getBoundingClientRect().top

  zin6.style.position = 'absolute'
  zin6.style.zIndex = 1000
  document.body.append(zin6)

  moveAt(event.pageX, event.pageY)

  function moveAt(pageX, pageY) {
    zin6.style.left = pageX - shiftX + 'px'
    zin6.style.top = pageY - shiftY + 'px'
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY)
  }

  document.addEventListener('mousemove', onMouseMove)

  zin6.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove)
    zin6.onmouseup = null
  }
}

zin6.ondragstart = function () {
  return false
}

// 7 страница

zin7.onmousedown = function (event) {
  let shiftX = event.clientX - zin7.getBoundingClientRect().left
  let shiftY = event.clientY - zin7.getBoundingClientRect().top

  zin7.style.position = 'absolute'
  zin7.style.zIndex = 1000
  document.body.append(zin7)

  moveAt(event.pageX, event.pageY)

  function moveAt(pageX, pageY) {
    zin7.style.left = pageX - shiftX + 'px'
    zin7.style.top = pageY - shiftY + 'px'
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY)
  }

  document.addEventListener('mousemove', onMouseMove)

  zin7.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove)
    zin7.onmouseup = null
  }
}

zin7.ondragstart = function () {
  return false
}

// 8 страница

zin8.onmousedown = function (event) {
  let shiftX = event.clientX - zin8.getBoundingClientRect().left
  let shiftY = event.clientY - zin8.getBoundingClientRect().top

  zin8.style.position = 'absolute'
  zin8.style.zIndex = 1000
  document.body.append(zin8)

  moveAt(event.pageX, event.pageY)

  function moveAt(pageX, pageY) {
    zin8.style.left = pageX - shiftX + 'px'
    zin8.style.top = pageY - shiftY + 'px'
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY)
  }

  document.addEventListener('mousemove', onMouseMove)

  zin8.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove)
    zin8.onmouseup = null
  }
}

zin8.ondragstart = function () {
  return false
}
