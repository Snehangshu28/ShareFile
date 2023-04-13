import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { html } from './utils'


// document.querySelector('#app').innerHTML = html`
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `


document.querySelector('#app').innerHTML = html`
  <div>
  <header>
  <div class="icon">
      <h1>Quick$hear</h1>
      <a href="#" class="help"><span>?</span> How it works</a>
  </div>
</header>
<main>
  <img src="filesharing gif1.gif" alt="gif" class="gif">
  <h1 class="text-h1"> File sharing is now offline</h1>
  <h5 class="text-h5">You can share file anywhere,anybody whitin a minute . Connect now and enjoy it.</h5 class="">
</main>
<footer>
  <button class="btn-c">Connect</button>
</footer>
`

