import nouns from './nouns'

const getArticle = word => nouns[word]
const body = document.getElementsByTagName('body')[0]

const getQuery = search => {
  return search
    .substr(1)
    .split('&')
    .filter(query => query.startsWith('q='))
    .map(query => query.substr(2))
    .map(q => decodeURIComponent(q))[0]
}

const renderArticle = ({ query, article }) => {
  const heading = document.createElement('h2')
  heading.textContent = `${article} ${query}`
  heading.setAttribute('class', 'helper')
  body.appendChild(heading)
}

const renderError = ({ query }) => {
  const heading = document.createElement('h2')
  heading.setAttribute('class', 'helper')
  heading.textContent = `The word "${query}" is not in our dictionary :(`
  body.appendChild(heading)
}

const renderFooter = () => {
  const back = document.createElement('a')
  back.setAttribute('href', '/')
  back.setAttribute('class', 'btn btn__newSearch')
  back.textContent = 'New search'
  body.appendChild(back)
}

const render = () => {
  const query = getQuery(window.location.search)
  const article = getArticle(query)

  if (!article) {
    renderError({ query })
  } else {
    renderArticle({ query, article })
  }

  renderFooter()
}

export default render
