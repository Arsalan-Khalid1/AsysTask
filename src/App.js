import './App.css'
import Router from './routes/index'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  )
}

export default App
