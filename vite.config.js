import { defineConfig } from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions:{
      input: {
        main : resolve(__dirname,'index.html'),
		boutique : resolve(__dirname,'boutique.html'),
		ficheProduit : resolve(__dirname,'ficheProduit.html'),
		panier : resolve(__dirname,'panier.html')
		}
    }
  }
})
