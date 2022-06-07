import { LockIcon } from "../components/static/LockIcon.js";

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
	<div class="middle-panel" data-template-id="lockedPanel"></div>
`;

export default class CreditLockSlider extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.handleView(this.getAttribute("locked") === "true");
  }
  static get observedAttributes() {
    return ["locked"];
  }

  handleView(bool) {
    this.shadowRoot.querySelector(".middle-panel").innerHTML = bool
      ? UnlockedMode
      : LockedMode;
  }

  attributeChangedCallback(_attrName, _oldVal, newVal) {
    this.handleView(newVal === "true");
  }
}

const UnlockedMode = `
	<div class="unlock-btn" data-template-id="unlockButton" data-array-ref="toggleLockStatus">
		<span class="locked">Locked</span>
		<div class="white-area">
			${LockIcon} 
		</div>
	</div>
	<p class="transunion-file">Your TransUnion File is Locked</p>
	<p class="lock-text">
		Unlock your score to open new accounts under your name
	</p>
`;

const LockedMode = `
	<div
		class="lock-btn"
		data-template-id="lockButton"
		data-array-ref="toggleLockStatus"
	>
		<div class="green-area">
			${LockIcon} 
		</div>
		<span class="unlocked">Unlocked</span>
	</div>
	<p class="transunion-file">Your TransUnion File is Unlocked</p>
	<p class="lock-text">
		Unlock your score to open new accounts under your name
	</p>
`;
