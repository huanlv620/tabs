const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let log = console.log.bind(document);

const tabs = $$(".tab-item");
const pane = $$(".tab-pane");
const line = $(".tabs .line");
const tabActive = $(".tab-item.active");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";
tabs.forEach((tab, index) => {
  tab.onclick = (e) => {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    e.target.classList.add("active");
    pane[index].classList.add("active");

    line.style.left = e.target.offsetLeft + "px";
    line.style.width = e.target.offsetWidth + "px";
  };
});
