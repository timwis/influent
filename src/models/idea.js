import Model from 'ampersand-model'

export default Model.extend({
  props: {
    title: 'string',
    description: 'string'
  },
  session: {
    id: 'string'
  }
})
