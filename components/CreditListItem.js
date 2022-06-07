function appendZero(num) {
  return num > 9 ? `${num}` : `0${num}`;
}
function parseDate(item) {
  let date = new Date(item);
  let year = date.getFullYear();
  let month = appendZero(date.getMonth());
  let day = appendZero(date.getDate());
  let offset = date.getTimezoneOffset() / -60;
  let needPlus = offset >= 0 ? "+" : "";

  let hours = appendZero(date.getHours());
  let minutes = appendZero(date.getMinutes());

  return `${year}-${month}-${day} ${hours}:${minutes} GMT ${needPlus}${offset}`;
}

export default class CreditListItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
			<li class="history-list">
				
				<span class="date" style="white-space:pre">${parseDate(
          this.getAttribute("date")
        )}</span>
				<div class="lock-wrapper">
					<svg
						class="lock-icon"
						width="12px"
						height="18px"
						viewBox="0 0 14 21"
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
							opacity="0.300176711"
						>
							<g
								id="1.3-Creditlock-Expand-Desktop"
								transform="translate(-720.000000, -711.000000)"
								fill="#3E3F42"
								fill-rule="nonzero"
							>
								<g
									id="accounts"
									transform="translate(164.500000, 616.000000)"
								>
									<g
										id="Group-2"
										transform="translate(0.500000, 44.000000)"
									>
										<g
											id="row"
											transform="translate(0.000000, 35.000000)"
										>
											<path
												d="M564.576471,24.2795232 L564.576471,20.67168 C564.576471,19.1963859 563.377255,17.9971702 561.901961,17.9971702 C560.426667,17.9971702 559.227451,19.1963859 559.227451,20.67168 L559.227451,20.67168 L559.227,22.0049545 L557.588,22.0049545 L557.588235,20.67168 C557.588235,18.3605382 559.408777,16.472022 561.693059,16.3629321 L561.901961,16.3579545 C564.283137,16.3579545 566.215686,18.2905036 566.215686,20.67168 L566.215686,20.67168 L566.215686,24.2795232 L567.078431,24.2795232 C568.027451,24.2795232 568.803922,25.0559938 568.803922,26.0050134 L568.803922,26.0050134 L568.803922,34.6324643 C568.803922,35.581484 568.027451,36.3579545 567.078431,36.3579545 L567.078431,36.3579545 L556.72549,36.3579545 C555.776471,36.3579545 555,35.581484 555,34.6324643 L555,34.6324643 L555,26.0050134 C555,25.0559938 555.776471,24.2795232 556.72549,24.2795232 L556.72549,24.2795232 L564.576471,24.2795232 Z M561.901961,28.5932487 C560.952941,28.5932487 560.176471,29.3697193 560.176471,30.3187389 C560.176471,31.2677585 560.952941,32.0442291 561.901961,32.0442291 C562.85098,32.0442291 563.627451,31.2677585 563.627451,30.3187389 C563.627451,29.3697193 562.85098,28.5932487 561.901961,28.5932487 Z"
												id="unlock_icon-copy"
											></path>
										</g>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<span class="lock">${this.getAttribute("text")}</span>
				</div>
			</li>
		`;
  }
}
