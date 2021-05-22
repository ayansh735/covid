let box1 = document.querySelector(".box-1 h2");
let box2 = document.querySelector(".box-2 h2");
let box3 = document.querySelector(".box-3 h2");
let box4 = document.querySelector(".box-4 h2");
let search = document.querySelector(".searchBx");
let searchBx = document.querySelector(".searchBx input");
let logo = document.querySelector(".logo h2");
let lastUpdate = document.querySelector(".lastUpdate");

const api = async (country) => {
  let resp = await fetch(`https://covid19.mathdro.id/api/countries/${country}`);
  let respData = await resp.json();
  showData(respData);
};

const worldWide = async () => {
  let resp = await fetch(`https://covid19.mathdro.id/api`);
  let respData = await resp.json();
  showData(respData);
};

worldWide();

const showData = (data) => {
  box1.innerHTML = data.confirmed.value;
  box2.innerHTML =
    data.confirmed.value - data.deaths.value - data.recovered.value;
  box3.innerHTML = data.deaths.value;
  box4.innerHTML = data.recovered.value;
  lastUpdate.innerHTML = `Last Updated ${data.lastUpdate.slice(0, 10)}`;
};

search.addEventListener("submit", (e) => {
  e.preventDefault();
  api(searchBx.value);
  // logo.innerHTML = searchBx.value;
});
