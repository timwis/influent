import Router from 'ampersand-router'

import BoardModel from './models/board'

import BoardsCollection from './collections/boards'
// import IdeasCollection from './collections/ideas'

import HomeView from './views/home'
import CreateBoardView from './views/create-board'
import BoardView from './views/board'
import CreateIdeaView from './views/create-idea'

export default Router.extend({
  routes: {
    '': 'home',
    'create-board': 'createBoard',
    'board/:id': 'board',
    'create-idea/:id': 'createIdea'
  },
  initialize: function (opts) {
    opts || (opts = {})
    this.viewSwitcher = opts.viewSwitcher
    this.boardsCollection = new BoardsCollection()
    // this.boardsCollection = new Firebase('https://influent.firebaseio.com/boards')
  },
  home: function () {
    const homeView = new HomeView({collection: this.boardsCollection})
    this.viewSwitcher.set(homeView)
  },
  createBoard: function () {
    const createBoardView = new CreateBoardView()
    this.viewSwitcher.set(createBoardView)

    createBoardView.on('submit', (data) => {
      const newBoard = this.boardsCollection.create(data)
      this.navigate(`board/${newBoard.id}`)
    })
  },
  board: function (boardId) {
    // const ideasCollection = new IdeasCollection(null, {boardId: boardId})
    const boardModel = new BoardModel({id: boardId})
    const boardView = new BoardView({model: boardModel})
    this.viewSwitcher.set(boardView)
  },
  createIdea: function (boardId) {
    // console.log(`creating idea for board ${boardId}`)
    const boardModel = new BoardModel({id: boardId})
    // boardModel.ideas.boardId = boardId
    // const ideasCollection = new IdeasCollection(null, {boardId: boardId})
    const createIdeaView = new CreateIdeaView()
    this.viewSwitcher.set(createIdeaView)

    createIdeaView.on('submit', (data) => {
      boardModel.ideas.create(data)
      this.navigate(`board/${boardId}`)
    })
  }
})
