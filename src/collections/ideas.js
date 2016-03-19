import FirebaseCollection from './firebase-collection'
import IdeaModel from '../models/idea'

export default FirebaseCollection.extend({
  model: IdeaModel,
  url: function () {
    return `https://influent.firebaseio.com/boards/${this.parent.id}/ideas`
  }
})
