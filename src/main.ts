import { mount } from 'svelte'
import './app.css'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
