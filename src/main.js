// Import styles and libraries
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Vuetify imports
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Create Vuetify instance with custom theme
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        colors: {
          primary: '#ff521d', // Set primary color
          secondary: '#ff8e42', // Optional secondary color
        },
      },
    },
  },
});

// Create Vue app
const app = createApp(App);

app.use(router); // Use router
app.use(vuetify); // Use Vuetify

app.mount('#app'); // Mount app
