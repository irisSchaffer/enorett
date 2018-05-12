// eslint-disable-next-line
import styles from './scss/main.scss' // import to include file in bundle

import interaction from './interaction'
import renderSearch from './search'
import renderResults from './results'

// routing will live here in future
if (window.location.search && window.location.search.length) {
  renderResults()
} else {
  renderSearch()
}
