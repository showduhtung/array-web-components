import CreditListItem from "../components/CreditListItem.js";
import CreditLockSlider from "./CreditLockSlider.js";
import { TransUnionLogo } from "../components/static/Logo.js";

const template = document.createElement("template");
template.innerHTML = `
	<link
		rel="stylesheet"
		href="https://cdn-web-assets.array.io/assets/css/normalize.112272e51c80ffe5bd01becd2ce7d656.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn-web-assets.array.io/assets/css/common.919b29a8967bf73da0ed659184b11d41.css"
	/>
	<link rel="stylesheet" href="css/CreditLockTable.css" />
	<div class="theme-brigit>
	<section class="credit-freeze-center">
		<ul>
			<div class="center-block active">
				${TransUnionLogo} 
				<credit-lock-slider locked="true"></credit-lock-slider>
				<div>
					<p class="history-title">Hide lock history</p>
					<ul id="history-title-list"></ul>
					<p class="show-all"></p>
				</div>
			</div>
		</ul>
	</section>
	</div>
`;

export default class CreditLockTable extends HTMLElement {
  constructor() {
    super();
    this.locked = true;
    this.hideList = false;
    this.data = [];
    this.shouldShowAll = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["url"];
  }

  connectedCallback() {
    let title = this.shadowRoot.querySelector(".history-title");
    title.onclick = () => this.handleShow();
    const showAll = this.shadowRoot.querySelector(".show-all");
    showAll.onclick = () => this.handleShowAll();
    const slider = this.shadowRoot.querySelector("credit-lock-slider");
    slider.onclick = () => this.handleClicked();
  }

  handleClicked() {
    this.locked = !this.locked;
    const slider = this.shadowRoot.querySelector("credit-lock-slider");
    slider.setAttribute("locked", this.locked);
    this.postData(); // mocks put request
  }

  setList(data) {
    let list = this.shadowRoot.getElementById("history-title-list");
    let innerHTML = data.reduce((markup, item) => {
      return (
        markup +
        `<credit-list-item date=${item.date} text=${
          item.type === "enrollment" ? "Unlocked" : "Locked"
        }></credit-list-item>`
      );
    }, "");
    list.innerHTML = innerHTML;
  }

  handleShow() {
    let title = this.shadowRoot.querySelector(".history-title");
    this.hideList = !this.hideList;
    title.innerText = this.hideList ? "Show lock history" : "Hide lock history";

    let list = this.shadowRoot.querySelector("#history-title-list");
    list.style.display = this.hideList ? "none" : "block";

    let showAll = this.shadowRoot.querySelector(".show-all");
    showAll.style.display = this.hideList ? "none" : "block";
  }

  handleShowAll() {
    this.shouldShowAll = !this.shouldShowAll;
    const showAll = this.shadowRoot.querySelector(".show-all");

    showAll.innerText = this.shouldShowAll
      ? `Show the First 5 Listings`
      : `Show All (${this.data.length})`;

    this.setList(this.shouldShowAll ? this.data : this.data.slice(0, 5));
  }

  setShowAll() {
    const showAll = this.shadowRoot.querySelector(".show-all");

    if (this.data.length <= 5) showAll.style.color = "#b3b3b3";
    else {
      showAll.style.color = "#1665D8";
      showAll.onclick = () => this.handleShowAll();
    }
    showAll.innerText = `Show All (${this.data.length})`;
  }

  postData() {
    // mocks put request
    let payload = {
      type: this.locked ? "enrollment" : "cancellation",
      provider: "tui",
      active: false,
      date: new Date().toISOString(),
    };
    this.data.unshift(payload);
    this.mockFetchData(); // mocks refetching
  }

  mockFetchData() {
    // mocks refetching
    this.setList(this.data.slice(0, 5));
    this.setShowAll();
  }

  async fetchData() {
    try {
      let response = await fetch(this.getAttribute("url"));
      let json = await response.json();
      this.data = json;
      this.setList(this.data.slice(0, 5));
      this.setShowAll();
    } catch (err) {
      console.error(err);
    }
  }

  attributeChangedCallback(attrName, _, _newVal) {
    if (attrName === "url") this.fetchData();
  }
}

customElements.define("credit-lock-slider", CreditLockSlider);
customElements.define("credit-list-item", CreditListItem);
