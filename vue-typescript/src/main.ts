import { createApp } from 'vue'
import '@/assets/scss/main.scss'
import App from './App.vue'
import router from './router';

const app = createApp(App);

const components = import.meta.glob('./components/**/*.vue',{eager:true});

for (const path in components) {
    const component: any = components[path];
    const name = path.split('/').pop()?.replace('.vue','');
    app.component(name!, component.default);
}

app.use(router);
app.mount('#app')
