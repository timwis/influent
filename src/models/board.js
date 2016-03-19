import Model from 'ampersand-model'
import Firebase from 'firebase'
import {result} from 'lodash'

import IdeasCollection from '../collections/ideas'

export default Model.extend({
  props: {
    title: 'string'
  },
  session: {
    id: 'string'
  },
  initialize: function () {
    if (!this.collection) {
      this.firebase = new Firebase(result(this, 'url'))
      this.firebase.on('value', (snapshot) => this.set(snapshot.val(), {parse: true}))
    }
  },
  collections: {
    ideas: IdeasCollection
  },
  url: function () {
    return `https://influent.firebaseio.com/boards/${this.id}`
  }
})
