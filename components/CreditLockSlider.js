const otherTemplate = document.createElement("template");
otherTemplate.innerHTML = `
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
    this.shadowRoot.appendChild(otherTemplate.content.cloneNode(true));
    this.handleView(this.getAttribute("locked") === "true");
  }
  static get observedAttributes() {
    return ["locked"];
  }

  handleView(bool) {
    this.shadowRoot.querySelector(".middle-panel").innerHTML = bool
      ? `<div
						class="unlock-btn"
						data-template-id="unlockButton"
						data-array-ref="toggleLockStatus"
					>
						<span class="locked">Locked</span>
						<div class="white-area">
							<lock-icon></lock-icon>
						</div>
					</div>
					<p class="transunion-file">Your TransUnion File is Locked</p>
					<p class="lock-text">
						Unlock your score to open new accounts under your name
					</p>
					`
      : `<div
						class="lock-btn"
						data-template-id="lockButton"
						data-array-ref="toggleLockStatus"
					>
						<div class="green-area">
							<lock-icon></lock-icon>
						</div>
						<span class="unlocked">Unlocked</span>
					</div>
					<p class="transunion-file">Your TransUnion File is Unlocked</p>
					<p class="lock-text">
						Unlock your score to open new accounts under your name
					</p>
				`;
  }

  attributeChangedCallback(_attrName, _oldVal, newVal) {
    this.handleView(newVal === "true");
  }
}

class LockIcon extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
			<svg
				width="15px"
				height="19px"
				viewBox="0 0 15 19"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<g
					id="Credit-Lock"
					stroke="none"
					stroke-width="1"
					fill="none"
					fill-rule="evenodd"
				>
					<g
						id="2.1-Creditlock-Locked-History-Desktop"
						transform="translate(-379.000000, -337.000000)"
						fill="#00D2A0"
					>
						<g
							id="bureau"
							transform="translate(167.000000, 190.000000)"
						>
							<g
								id="button"
								transform="translate(108.000000, 136.000000)"
							>
								<path
									d="M116.5,17.4431818 L115.625,17.4431818 L115.625,15.7840909 C115.625,13.3690909 113.665,11.4090909 111.25,11.4090909 C108.835,11.4090909 106.875,13.3690909 106.875,15.7840909 L106.875,17.4431818 L106,17.4431818 C105.0375,17.4431818 104.25,18.2306818 104.25,19.1931818 L104.25,27.9431818 C104.25,28.9056818 105.0375,29.6931818 106,29.6931818 L116.5,29.6931818 C117.4625,29.6931818 118.25,28.9056818 118.25,27.9431818 L118.25,19.1931818 C118.25,18.2306818 117.4625,17.4431818 116.5,17.4431818 Z M111.25,25.3181818 C110.2875,25.3181818 109.5,24.5306818 109.5,23.5681818 C109.5,22.6056818 110.2875,21.8181818 111.25,21.8181818 C112.2125,21.8181818 113,22.6056818 113,23.5681818 C113,24.5306818 112.2125,25.3181818 111.25,25.3181818 Z M113.9625,17.4431818 L108.5375,17.4431818 L108.5375,15.7840909 C108.5375,14.2878409 109.75375,13.0715909 111.25,13.0715909 C112.74625,13.0715909 113.9625,14.2878409 113.9625,15.7840909 L113.9625,17.4431818 Z"
									id="unlock_icon-copy"
								></path>
							</g>
						</g>
					</g>
				</g>
			</svg>
		`;
  }
}

customElements.define("lock-icon", LockIcon);
