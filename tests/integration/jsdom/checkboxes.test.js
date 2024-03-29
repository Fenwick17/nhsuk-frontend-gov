import Checkboxes from '../../../packages/components/checkboxes/checkboxes'

describe('Checkboxes module', () => {
  describe('does not throw an error', () => {
    it('if there is no conditional checkboxes container', () => {
      Checkboxes()
    })
    it('if there are no conditional checkboxes inside the container', () => {
      document.body.innerHTML = '<div class="govuk-checkboxes"></div>'
      Checkboxes()
    })
  })

  describe('displays conditional content', () => {
    it('when checking the input', () => {
      document.body.innerHTML = `<form><div class="govuk-checkboxes">
            <input class="govuk-checkboxes__input" id="input-1" type="checkbox" aria-controls="conditional-1" aria-expanded="false" />
            <div class="govuk-checkboxes__conditional--hidden" id="conditional-1">Test</div>
            </div></form>`
      const input = document.querySelector('#input-1')
      const conditional = document.querySelector('#conditional-1')
      Checkboxes()
      input.click()
      expect(conditional.classList.contains('govuk-checkboxes__conditional--hidden')).toEqual(false)
      expect(input.getAttribute('aria-expanded')).toEqual('true')
    })
  })

  describe('hides conditional content', () => {
    it('when unchecking the input', () => {
      document.body.innerHTML = `<form><div class="govuk-checkboxes">
            <input class="govuk-checkboxes__input" id="input-1" type="checkbox" aria-controls="conditional-1" aria-expanded="false" />
            <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-1">Test</div>
            </div></form>`
      const input = document.querySelector('#input-1')
      const conditional = document.querySelector('#conditional-1')
      Checkboxes()
      input.click()
      expect(conditional.classList.contains('govuk-checkboxes__conditional--hidden')).toEqual(false)
      expect(input.getAttribute('aria-expanded')).toEqual('true')
      input.click()
      expect(conditional.classList.contains('govuk-checkboxes__conditional--hidden')).toEqual(true)
      expect(input.getAttribute('aria-expanded')).toEqual('false')
    })
  })
})
