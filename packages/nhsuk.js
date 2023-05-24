import GOVUKFrontend from 'govuk-frontend/govuk/all'

// Components
import Header from './components/header/header'

import './polyfills'

GOVUKFrontend.initAll()

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  Header()
})
