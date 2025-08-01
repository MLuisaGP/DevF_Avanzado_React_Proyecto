
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import ThemeSwitcher from './components/ThemeSwitcher'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <div >
        <Header />
        <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center dark:bg-gray-600">
          <Form />
        </div>

      </div>
    </ThemeProvider>
  )
}

export default App
