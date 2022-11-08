import { Route, Routes } from 'react-router-dom'

import NavBar from './components/nav-bar/nav-bar-component'
import LoginPage from './components/login-page/login-page-component'

// import './App.css'
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<LoginPage />} />
      </Route>
    </Routes>
    // <NavBar />
    // <LoginPage />
  )
}

export default App
