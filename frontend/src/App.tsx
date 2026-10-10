import FormParent from './components/FormParent'
import './App.css'

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">React · композиция компонентов</p>
        <h1>Связанный текст</h1>
        <p className="app-description">
          Изменяйте текст в поле и сразу наблюдайте результат.
        </p>
      </header>
      <FormParent />
    </main>
  )
}

export default App
