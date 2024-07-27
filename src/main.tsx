import React from 'react'
import ReactDOM from 'react-dom/client'
import 'material-symbols'
import '@/app/styles/index.scss'
import { Provider } from 'react-redux'

import { store } from './shared/store/store'

import App from '@/app/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
