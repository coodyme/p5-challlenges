
document.querySelector('#app').innerHTML = `
  <div>
    <img src="/p5js.svg" class="logo" alt="logo" />
    <h1>Challenges</h1>
    <div class="challenges">
      <div id="p5"></div>
      <button id="counter" type="button">back</button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
