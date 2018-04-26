import styles from './scss/test.scss'
import renderSearch from './search'
import renderResults from './results'

// routing will live here in future
if (window.location.search && window.location.search.length) {
  renderResults()
} else {
  renderSearch()
}
