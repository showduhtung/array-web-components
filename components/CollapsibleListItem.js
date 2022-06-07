const root = document.createElement("template");
root.innerHTML = `
	<link
		rel="stylesheet"
		href="https://cdn-web-assets.array.io/common/collapsible/collapsible.137db3db165ac7a53818153471b712dc.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn-web-assets.array.io/brigit/brigit-common/brigit-common.203c32ae62d65e030d6ad68c20cda582.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn-web-assets.array.io/common/collapsible/collapsible-arrow-icon.7766d33be558bc07ba07a7faa24d7624.css"
	/>
	<link rel="stylesheet" href="css/CollapsibleListItem.css" />

  <li class="collapsible arrow-icon">
		<div
			id="toggleCollapsible"
			class="collapsible__open-close-icon open-close-icon"
			data-array-ref="toggleCollapsible"
		>
			<svg
				class="plus-minus"
				width="16px"
				height="16px"
				viewBox="0 0 16 16"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<g
					id="Design"
					stroke="none"
					stroke-width="1"
					fill="none"
					fill-rule="evenodd"
					opacity="0.347330729"
				>
					<g
						id="1.1.2-Credit-Alerts-(Colapsed)-Desktop"
						transform="translate(-1237.000000, -276.000000)"
						fill="#3E3F42"
					>
						<g id="table" transform="translate(165.000000, 220.000000)">
							<g id="row" transform="translate(0.000000, 34.000000)">
								<g
									id="Icons-/-24px-/-Circle-Plus-Copy-23"
									transform="translate(1068.000000, 18.000000)"
								>
									<path
										class="plus-path"
										d="M12,4 C7.58892308,4 4,7.58892308 4,12 C4,16.4110769 7.58892308,20 12,20 C16.4110769,20 20,16.4110769 20,12 C20,7.58892308 16.4110769,4 12,4 Z M12,5.23076923 C15.7452308,5.23076923 18.7692308,8.25476923 18.7692308,12 C18.7692308,15.7452308 15.7452308,18.7692308 12,18.7692308 C8.25476923,18.7692308 5.23076923,15.7452308 5.23076923,12 C5.23076923,8.25476923 8.25476923,5.23076923 12,5.23076923 Z M11.3846154,8.30769231 L11.3846154,11.3846154 L8.30769231,11.3846154 L8.30769231,12.6153846 L11.3846154,12.6153846 L11.3846154,15.6923077 L12.6153846,15.6923077 L12.6153846,12.6153846 L15.6923077,12.6153846 L15.6923077,11.3846154 L12.6153846,11.3846154 L12.6153846,8.30769231 L11.3846154,8.30769231 Z"
										id="plus-circle-solid"
									></path>
									<path
										class="minus-path"
										d="M12,4 C7.58892308,4 4,7.58892308 4,12 C4,16.4110769 7.58892308,20 12,20 C16.4110769,20 20,16.4110769 20,12 C20,7.58892308 16.4110769,4 12,4 Z M12,5.23076923 C15.7452308,5.23076923 18.7692308,8.25476923 18.7692308,12 C18.7692308,15.7452308 15.7452308,18.7692308 12,18.7692308 C8.25476923,18.7692308 5.23076923,15.7452308 5.23076923,12 C5.23076923,8.25476923 8.25476923,5.23076923 12,5.23076923 Z M8.30769231,11.3846154 L8.30769231,12.6153846 L15.6923077,12.6153846 L15.6923077,11.3846154 L8.30769231,11.3846154 Z"
										id="minus-circle-solid"
									></path>
								</g>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</div>

		<div>
			<p
				class="question collapsible__toggle-handler"
				data-array-ref="toggleCollapsible"
			>
			</p>
			<div class="answer collapsible__content-block">
				<slot></slot>
			</div>
		</div>
	</li>
`;

export default class CollapsibleListItem extends HTMLElement {
  constructor() {
    super();
    this.showInfo = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(root.content.cloneNode(true));
    this.shadowRoot.querySelector(
      "p"
    ).innerHTML = `<span class="number">${this.getAttribute(
      "order"
    )}.</span>${this.getAttribute("title")}`;
    this.shadowRoot
      .querySelector("li")
      .addEventListener("click", () => this.toggleInfo());
  }
  toggleInfo() {
    this.shadowRoot
      .querySelector("li")
      .classList[this.showInfo ? "remove" : "add"]("expanded");
    this.showInfo = !this.showInfo;
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("li").removeEventListener();
  }
}
