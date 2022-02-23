# electron + Vue 3 + Vite (pnpm)

```json
//...
"scripts": {
    "dev": "vite --port 3000",
    "build": "vite build",
    "preview": "vite preview --port 3000",
    "electron": "cross-env NODE_ENV=development electron ./src/electron/main.js",
    "electron:wait": "wait-on tcp:3000 && cross-env NODE_ENV=development electron ./src/electron/main.js",
    "electron:dev": "nodemon --watch ./src/electron/ --exec concurrently -k \"cross-env NODE_ENV=development pnpm run dev\" \"pnpm run electron\"",
    "electron:pack": "pnpm run build && electron-builder --dir",
    "electron:build": "pnpm run build && electron-builder"
  },
//...
```

## reference

- [electron](https://www.electronjs.org/docs/latest/api/app)
- [vue3](https://vuejs.org/api/)
  - [script setup](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
- [vitejs](https://vitejs.dev/guide/features.html#postcss)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [electron-builder](https://www.electron.build/configuration/configuration)

---

- https://dev.to/brojenuel/vite-vue-3-electron-5h4o
- https://duckduckgo.com/?q=vite+electron+vue3&atb=v1-1&ia=web