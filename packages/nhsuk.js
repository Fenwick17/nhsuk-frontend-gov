// import { initAll } from 'govuk-frontend/dist/govuk/govuk-frontend.min.js'
import { initAll } from 'govuk-frontend'

// Components
import Header from './components/header/header'

import './polyfills'

initAll()

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  Header()
})
