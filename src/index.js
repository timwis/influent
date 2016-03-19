import ViewSwitcher from 'ampersand-view-switcher'

import Router from './router'

const container = document.querySelector('[data-hook~=main]')
const viewSwitcher = new ViewSwitcher(container)

const router = new Router({viewSwitcher: viewSwitcher})
router.history.start({pushState: false})
