import View from 'ampersand-view'

import Template from '../templates/home.html'

import BoardItemView from '../views/board-item'

export default View.extend({
  template: Template,
  render: function (opts) {
    this.renderWithTemplate(this)

    const collectionContainer = this.queryByHook('boards')
    this.renderCollection(this.collection, BoardItemView, collectionContainer, opts)

    return this
  }
})
