import Collection from 'ampersand-collection'
import Firebase from 'firebase'
import {assign, result, map} from 'lodash'

export default Collection.extend({
  initialize: function () {
    // when collection is initialized from a state's `collections` property, the state's
    // attributes aren't set yet, so there's no `id` property yet, which the `url` method may want
    // https://github.com/AmpersandJS/ampersand-state/blob/master/ampersand-state.js#L35-L42
    setTimeout(() => {
      this.firebase = new Firebase(result(this, 'url'))
      if (!this.parent) {
        this.firebase.on('value', (snapshot) => {
          this.reset(this.parse(snapshot.val()))
        })
      }
    }, 100)
  },
  parse: function (data) {
    return map(data, (values, key) => {
      values.id = key
      return values
    })
  },
  create: function (model, options) {
    options = options ? assign({}, options) : {}
    if (!(model = this._prepareModel(model, options))) return false
    if (!options.wait) this.add(model, options)
    const newRecord = this.firebase.push(model.serialize())
    model.id = newRecord.key()
    return model
  }
})
