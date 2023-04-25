import { BrowserRouter,Link, Route, Switch } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Services from './pages/Services'
import Agriculture from './pages/Agriculture'
import Manufacture from './pages/Manufacture'
import Community from './pages/Community'
import Agriculture1 from './pages/Agriculture1'
import Error from './pages/Error'
import Footer from './components/Layout/Footer'
import Layout from './components/Layout/Layout'
import Header from './components/Layout/Header'
// import logo from './images/logo.jpg'
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
             <Header />
       
       
             <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services">
            <Services />
          </Route>
          
          {/* <Route path="/agriculture">
            <Agriculture />
          </Route> */}
          <Route path="/agriculture1">
            <Agriculture1 />
          </Route>
          <Route path="/manufacture">
            <Manufacture />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          {/* <Route component={Error}/> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App