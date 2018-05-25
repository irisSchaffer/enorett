const search = value => {
  window.location.href = `?q=${encodeURIComponent(value)}`
}

const render = () => {
  const body = document.getElementsByTagName('body')[0]
  const form = document.createElement('form')
  const input = document.createElement('input')
  const button = document.createElement('button')
  const gooeyThing = document.createElement('div')

  input.setAttribute('class', 'searchInput')
  input.setAttribute('id', 'js-searchInput')
  input.setAttribute('type', 'search')
  input.setAttribute('aria-label', 'Search')
  input.setAttribute('placeholder', 'Write here')
  input.addEventListener('input', evt => {
    const { value } = evt.target
    button.disabled = value.length === 0
  })

  button.disabled = true
  button.textContent = 'Search'
  button.type = 'submit'
  button.setAttribute('class', 'btn btn__searchbutton')
  button.addEventListener('click', evt => {
    evt.preventDefault()
    search(input.value)
  })

  gooeyThing.setAttribute('class', 'gooeyThing')
  gooeyThing.setAttribute('id', 'js-gooeyThing')

  form.setAttribute('class', 'wrapInput')
  form.setAttribute('role', 'search')
  form.appendChild(gooeyThing)
  form.appendChild(input)
  form.appendChild(button)

  body.appendChild(form)
}

export default render
