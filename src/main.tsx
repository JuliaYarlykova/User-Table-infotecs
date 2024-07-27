import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/app/App'
import 'material-symbols'
import '@/app/styles/index.scss'
import { Provider } from 'react-redux'
import { store } from './shared/store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)