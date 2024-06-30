import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'prod') {
    // 放準備部署到server的設定
    return {
      base: '/cid101/g1/front/',
      build: {
        outDir: 'front'
      },
      plugins: [vue(), VueDevTools()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      }
    }
  } else {
    // 放原本的設定
    return {
      plugins: [vue(), VueDevTools()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      }
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
