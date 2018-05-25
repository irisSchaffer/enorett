const search = input => evnt => {
  window.location.href = `?q=${input.value}`
}

const render = () => {
  const body = document.getElementsByTagName('body')[0]
  const input = document.createElement('input')
  const button = document.createElement('button')

  input.setAttribute('type', 'text')
  input.addEventListener('input', evt => {
    const { value } = evt.target
    button.disabled = value.length === 0
  })

  button.disabled = true
  button.textContent = 'Search'
  button.addEventListener('click', search(input))

  body.appendChild(input)
  body.appendChild(button)
}

export default render
