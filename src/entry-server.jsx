import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

export function render() {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  )
  return { html, helmet: helmetContext.helmet }
}
