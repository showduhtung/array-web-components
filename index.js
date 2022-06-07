import CreditLockFooter from "./components/CreditLockFooter.js";
import CreditLockHeader from "./components/CreditLockHeader.js";
import CreditLockTable from "./components/CreditLockTable.js";
import Logo from "./components/Logo.js";

const root = document.createElement("template");
root.innerHTML = `
  <link
    rel="stylesheet"
    href="https://cdn-web-assets.array.io/assets/css/fonts.6dbfcff92a68d68f88fce60e4ec1a554.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn-web-assets.array.io/assets/css/euclid-fonts.8abeba6402d2a1e2efdb8c2ea40f9d81.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn-web-assets.array.io/assets/css/normalize.112272e51c80ffe5bd01becd2ce7d656.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn-web-assets.array.io/assets/css/main.3e581872a8637c5688d4151983399ec8.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn-web-assets.array.io/assets/css/common.919b29a8967bf73da0ed659184b11d41.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn-web-assets.array.io/assets/css/form.8bb2126a5b7f0b79707abfe55662aeb3.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn-web-assets.array.io/common/collapsible/collapsible.137db3db165ac7a53818153471b712dc.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn-web-assets.array.io/common/collapsible/collapsible-arrow-icon.7766d33be558bc07ba07a7faa24d7624.css"
  />

  <link
    rel="stylesheet"
    href="https://cdn-web-assets.array.io/brigit/brigit-common/brigit-common.203c32ae62d65e030d6ad68c20cda582.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn-web-assets.array.io/brigit/brigit-common/brigit-collapsible.4f9dadd2c647f8351fc004a6dcc14a8a.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn-web-assets.array.io/brigit/brigit-creditlock-1b/header.3b63bca06c1223af6a4a81a4652265e3.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn-web-assets.array.io/brigit/brigit-creditlock-1b/credit-freeze-center.b2d872a91d97968b7a453c107a92899c.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn-web-assets.array.io/brigit/brigit-creditlock-1b/facts-steps.2075b680902178e954fcf8ddfe0ac78a.css"
  />


  <div class="theme-brigit container">
    <link
      rel="stylesheet"
      href="https://cdn-web-assets.array.io/webcom-creditlock-1b/header.f70a581c7b6fb8d004f565244140ed26.css"
    />
    <credit-lock-header></credit-lock-header>
    <credit-lock-table ></credit-lock-table>
    <credit-lock-footer></credit-lock-footer>
  </div>
`;

class ArrayCreditLock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(root.content.cloneNode(true));

    this.shadowRoot
      .querySelector("credit-lock-table")
      .setAttribute("url", this.getAttribute("url"));
  }
}

customElements.define("credit-logo", Logo);
customElements.define("credit-lock-table", CreditLockTable);
customElements.define("array-credit-lock", ArrayCreditLock);
customElements.define("credit-lock-footer", CreditLockFooter);
customElements.define("credit-lock-header", CreditLockHeader);
