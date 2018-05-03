const search = value => {
  window.location.href = `?q=${value}`
}

const render = () => {
  const body = document.getElementsByTagName('body')[0]
  const input = document.createElement('input')
  const button = document.createElement('button')
  const wrapInput = document.createElement('div')

  input.setAttribute('type', 'search')
  input.setAttribute('class', 'searchInput')
  input.setAttribute('type', 'search')
  input.setAttribute('placeholder', 'Write here')
  input.addEventListener('input', evt => {
    const { value } = evt.target
    button.disabled = value.length === 0
  })

  button.disabled = true
  button.textContent = 'Search'
  button.setAttribute('class', 'searchButton')
  button.addEventListener('click', () => {
    search(input.value)
  })

  wrapInput.setAttribute('class', 'wrapInput')
  wrapInput.appendChild(input)
  wrapInput.appendChild(button)

  body.appendChild(wrapInput)
}

export default render
