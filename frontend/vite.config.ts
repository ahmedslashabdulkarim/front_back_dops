import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//Vite-Proxy-Konfiguration: ). Dies ist ein reines Entwicklungs-Feature,
//         um CORS-Probleme zu umgehen und Anfragen an einen lokalen Backend-Server weiterzuleiten.

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',

        /*
        // Vorher
          axios.get('http://localhost:8080/api/books')
        // Nachher
           axios.get('/api/books')
        */

      }
    }
  }
})

