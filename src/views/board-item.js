import View from 'ampersand-view'

import Template from '../templates/board-item.html'

export default View.extend({
  template: Template,
  bindings: {
    'model.title': '[data-hook~=link]',
    'model.id': {
      hook: 'link',
      type: (el, value, previousValue) => el.href = '#board/' + value
    }
  }
})
