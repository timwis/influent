import View from 'ampersand-view'

import Template from '../templates/create-board.html'

export default View.extend({
  template: Template,
  events: {
    'submit form': 'onSubmitForm'
  },
  onSubmitForm: function (e) {
    const form = this.query('form')
    const formData = getFormData(form)
    this.trigger('submit', formData)
    e.preventDefault()
  }
})

// Returns a form element's data as an object
function getFormData (formEl) {
  var elements = Array.apply(null, formEl.elements) // convert to array
  var formData = {}
  for (var i = 0; i < elements.length; i++) {
    var id = elements[i].id
    if (id) formData[id] = elements[i].value
  }
  return formData
}
