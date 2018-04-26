const search = input => evnt => {
  window.location.href = `?q=${input.value}`
}

const render = () => {
  const body = document.getElementsByTagName('body')[0]
  const input = document.createElement('input')
  input.setAttribute('type', 'text')

  const button = document.createElement('button')
  button.textContent = 'Search'
  button.addEventListener('click', search(input))

  body.appendChild(input)
  body.appendChild(button)
}

export default render
