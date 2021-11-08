import './App.css'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Parallax from './components/Parallax/Parallax'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Parallax />
      <Content />
    </div>
  )
}

export default App;
