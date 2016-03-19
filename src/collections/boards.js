import FirebaseCollection from './firebase-collection'
import BoardModel from '../models/board'

export default FirebaseCollection.extend({
  model: BoardModel,
  name: 'Boards',
  url: 'https://influent.firebaseio.com/boards'
})
