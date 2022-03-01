import Vue from 'vue';
import VueRouter from 'vue-router';
import FormEvent from '../views/sample/FormEvent';
import MessageBox from '../views/sample/MessageBox';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/sample/formEvent",
        },
        {
            name: "formEvent",
            path: "/sample/formEvent",
            component: FormEvent,
        },
        {
            name: "messageBox",
            path: "/sample/messageBox",
            component: MessageBox,
        },
    ]
});