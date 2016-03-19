import Model from 'ampersand-model'
import Firebase from 'firebase'
import {result} from 'lodash'

export default Model.extend({
  props: {
    title: 'string',
    description: 'string',
    votes: ['number', false, 0]
  },
  session: {
    id: 'string'
  },
  initialize: function () {
    this.firebase = new Firebase(result(this, 'url'))
  },
  url: function () {
    const boardId = this.collection.parent.id
    return `https://influent.firebaseio.com/boards/${boardId}/ideas/${this.id}`
  },
  castVote: function () {
    this.firebase.update({votes: this.votes + 1})
  }
})
