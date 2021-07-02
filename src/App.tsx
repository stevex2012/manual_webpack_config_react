import * as React from 'react'
import Title from './components/Title'
import Banner from './components/Banner'
import logo from '../assets/images/1.jpg'
// import log from '@/src/utils/log'
import log from './utils/log'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
// const logo = require('../assets/images/1.jpg')
// import Home from './pages/home'


log('123123123')
const APP = () => (
  
  <BrowserRouter>
    <Suspense fallback={() => 'loading....'}>
      <Switch>
        <Route path="/" component={lazy(() => import('./pages/home'))}/>
      </Switch>
      {/* <Switch>
        <Route path="/about" component={lazy(() => import('./pages/about'))}/>
      </Switch> */}
    </Suspense>
    
    {/* <Title title="llalal"/>
    <Banner />
    <div>APP</div>
    <img src={logo} alt=""/> */}
  </BrowserRouter>
)

export default APP
