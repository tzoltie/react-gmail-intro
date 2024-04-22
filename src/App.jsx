import './styles/App.css'


import { Header } from './Header'
import { LeftMenu } from './LeftMenu'
import { MainBody } from './MainBody'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <MainBody />
    </div>
  )
}

export default App
