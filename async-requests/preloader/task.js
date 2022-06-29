fetch('https://netology-slow-rest.herokuapp.com')
  .then(res => res.json())
  .then(valueResp => {
    const loader = document.getElementById('loader');
    loader.classList.remove('loader_active');
    const items = document.getElementById('items');
    const arrayQuery = valueResp.response.Valute;
    for (let key in arrayQuery) {
      const pasteDivs = ` 
        <div class="item">
          <div class="item__code">${arrayQuery[key].CharCode}</div>
          <div class="item__value">${arrayQuery[key].Value}</div>
          <div class="item__currency">руб.</div>
        </div>`;

      items.insertAdjacentHTML('beforeEnd', pasteDivs);
    }
  })