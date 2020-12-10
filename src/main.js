import { createApp } from "vue";
import App from "./App.vue";
//import "ant-design-vue/dist/antd.css";
import { Layout,
         Menu,
         Button } from "ant-design-vue";
//import {} from "@ant-design/icons-vue"
createApp(App).use(Layout).use(Menu).use(Button).mount("#app");

