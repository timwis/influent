import View from 'ampersand-view'

import IdeaItemView from './idea-item'

import Template from '../templates/board.html'

export default View.extend({
  template: Template,
  render: function (opts) {
    this.renderWithTemplate(this)

    const collectionContainer = this.queryByHook('ideas')
    this.renderCollection(this.model.ideas, IdeaItemView, collectionContainer)

    return this
  },
  bindings: {
    'model.title': '[data-hook~=title]',
    'model.id': {
      hook: 'create-idea',
      type: (el, value, previousValue) => el.href = '#create-idea/' + value
    }
  }
})
