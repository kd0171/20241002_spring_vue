import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // 追加: ルーターのインポート

const app = createApp(App);
app.use(router);                // 追加: ルーターを Vue アプリケーションに登録
app.mount('#app');
