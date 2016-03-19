import View from 'ampersand-view'

import Template from '../templates/idea-item.html'

export default View.extend({
  template: Template,
  bindings: {
    'model.title': '[data-hook~=idea-title]',
    'model.description': '[data-hook~=idea-description]',
    'model.votes': '[data-hook~=idea-votes]'
  },
  events: {
    'click [data-hook~=cast-vote]': 'onCastVote'
  },
  onCastVote: function (e) {
    // this.trigger('castVote')
    this.model.castVote()
    e.preventDefault()
  }
})
