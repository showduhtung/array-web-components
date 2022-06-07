export default class CreditLockHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="credit-lock-header">
        <h2 class="title">Lock your credit</h2>
        <h3 class="subtitle">
          A Credit Lock restricts access to your credit report. Why would you
          lock your credit?
        </h3>
        <ul class="lists">
          <li class="description">
            To prevent creditors from accessing your credit information
          </li>
          <li class="description">
            To help prevent identity thieves from opening fraudulent accounts
            (like credit cards and loans) under your name
          </li>
        </ul>
      </header>
    `;
  }
}
