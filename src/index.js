import './style.css'
import ReactDOM from 'react-dom/client'
import App from './App.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function Overlay() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
          <a href="https://sohyunjun.com/">logo.com</a>
        </div>
        <div id="nav" style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>
          <a href="https://sohyunjun.com/about">ABOUT</a>
        </div>
      </div>
    )
  }

root.render(
    <>
        <App />
        <Overlay />
    </>
)