import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'

function App() {
  return (
  <>
    <Header />
    <main>
      <h1>Welcome to my App</h1>
    </main>
  </>
)
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)