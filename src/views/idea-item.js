import View from 'ampersand-view'

import Template from '../templates/idea-item.html'

export default View.extend({
  template: Template,
  bindings: {
    'model.title': '[data-hook~=idea-title]',
    'model.description': '[data-hook~=idea-description]'
  }
})
