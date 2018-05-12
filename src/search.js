const search = value => {
  window.location.href = `?q=${value}`
}

const render = () => {
  const body = document.getElementsByTagName('body')[0]
  const input = document.createElement('input')
  const button = document.createElement('button')
  const wrapInput = document.createElement('div')
  const gooeyThing = document.createElement('div')

  input.setAttribute('type', 'search')
  input.setAttribute('class', 'searchInput')
  input.setAttribute('id', 'js-searchInput')
  input.setAttribute('type', 'search')
  input.setAttribute('placeholder', 'Write here')
  input.addEventListener('input', evt => {
    const { value } = evt.target
    button.disabled = value.length === 0
  })

  button.disabled = true
  button.textContent = 'Search'
  button.setAttribute('class', 'btn btn__searchbutton')
  button.addEventListener('click', () => {
    search(input.value)
  })

  gooeyThing.setAttribute('class', 'gooeyThing')
  gooeyThing.setAttribute('id', 'js-gooeyThing')

  wrapInput.setAttribute('class', 'wrapInput')
  wrapInput.appendChild(gooeyThing)
  wrapInput.appendChild(input)
  wrapInput.appendChild(button)

  body.appendChild(wrapInput)
}

export default render
