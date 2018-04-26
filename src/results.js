import nouns from './nouns'

const getArticle = word => nouns[word]
const body = document.getElementsByTagName('body')[0]
const heading = document.createElement('h2')
body.appendChild(heading)

const getQuery = search => {
  return search
    .substr(1)
    .split('&')
    .filter(query => query.startsWith('q='))
    .map(query => query.substr(2))[0]
}

const renderArticle = ({ query, article }) => {
  heading.textContent = `${article} ${query}`
}

const renderError = ({ query }) => {
  heading.textContent = `The word ${query} doesn't exist :(`
}

const render = () => {
  const query = getQuery(window.location.search)
  const article = nouns[query]

  if (!article) {
    return renderError({ query })
  }

  return renderArticle({ query, article })
}

export default render
