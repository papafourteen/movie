import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const env=loadEnv(mode,process.cwd())
  
  
  
  return{

  
    base:'/movie',
  plugins: [react()],
  build:{
  chunkSizeWarningLimit:1600
  },
  server:{
    port:env.VITE_PORT
  }
}
})