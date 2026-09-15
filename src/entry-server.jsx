import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

export function render() {
  const helmetContext = {}
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </StrictMode>
  )
  return { html, helmet: helmetContext.helmet }
}
