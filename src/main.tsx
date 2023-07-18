import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux/es/exports'
import { store } from './store.ts'
import { QueryClient , QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
    <App />
      </QueryClientProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
