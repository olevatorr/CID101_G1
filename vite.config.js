import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiBaseUrl = mode === 'development' 
    ? 'http://localhost/cid101/g1/api'
    : '/cid101/g1/api/'
  const imgBaseUrl = mode === 'development' 
    ? 'http://localhost/cid101/g1/upload/img'
    : '/cid101/g1/upload/img'

  return {
    base: '/cid101/g1/front',
    build: {
      outDir: 'front'
    },
    plugins: [
      vue(),
      VueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    define: {
      __API_BASE_URL__: JSON.stringify(apiBaseUrl),
      __IMG_BASE_URL__: JSON.stringify(imgBaseUrl)
    }
  }
})
// --------------------------------------------------------------------------------------------------------
// import { fileURLToPath, URL } from 'node:url'
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import VueDevTools from 'vite-plugin-vue-devtools'

// // https://vitejs.dev/config/
// export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
// 	const commonConfig = {
// 		plugins: [
// 			vue(),
// 			VueDevTools(),
// 		],
// 		resolve: {
// 			alias: {
// 				'@': fileURLToPath(new URL('./src', import.meta.url))
// 			}
// 		},
// 		server: {
// 			proxy: {
// 				'/api': {
// 					target: 'http://localhost',
// 					changeOrigin: true,
// 					rewrite: (path) => path.replace(/^\/api/, '')
// 				}
// 			}
// 		}
// 	};

// 	if (mode === 'prod') {
// 		// 放準備部署到server的設定
// 		return {
// 			...commonConfig,
// 			base: '/cid101/g1/front/',
// 			build: {
// 				outDir: 'front'
// 			}
// 		}
// 	} else {
// 		// 放原本的設定
// 		return {
// 			...commonConfig
// 		}
// 	}
// });
