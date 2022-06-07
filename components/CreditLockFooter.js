import CollapsibleListItem from "./CollapsibleListItem.js";

export default class CreditLockFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <link
        rel="stylesheet"
        href="https://cdn-web-assets.array.io/webcom-creditlock-1b/facts-steps.4735e127e353a812d005c7b7db7d38f8.css"
      />

      <section class="facts-steps">
        <div class="facts-steps-header">
          <h2 class="title">Facts and Steps to Complete a Lock</h2>
          <div class="lock-freeze-box active">Credit Lock</div>
          <div class="lock-freeze-box">Credit Freeze</div>
        </div>
        <ul class="questions">
         <collapsible-list-item order="1" title="What is TransUnion Credit Lock?">
          <p class="step-text">
            Credit Lock is a security measure that prevents creditors from
            accessing your TransUnion credit information. This blocks
            banks, credit card companies and more from seeing your credit
            report, which they typically need to open new accounts for
            you.
          </p>
          <p class="step-text">
            A Credit Lock also helps stop identity thieves from opening
            fraudulent accounts in your name. If you lock your credit,
            creditors cannot access your credit information, and thieves
            will be less likely to succeed in leveraging your identity.
          </p>
        </collapsible-list-item>
        <collapsible-list-item order="2" title="Why should I lock my credit?">
          A Credit Lock helps prevent identity thieves from opening
          fraudulent accounts in your name. If you suspect or detect
          fraudulent activity, a Credit Lock is also an important
          mechanism for helping stop additional unwanted activity.
        </collapsible-list-item>
        <collapsible-list-item order="3" title="What does TransUnion Credit Lock do? What does it not do?">
          <p class="sub-step-title">A credit lock will:</p>
          <div class="sub-step-text">
            <div class="dot"></div>
            <p class="step-text">
              Prevent creditors from gaining access to your credit report
              for most applications
            </p>
          </div>
          <p class="sub-step-title">A credit lock will not:</p>
          <div class="sub-step-text">
            <div class="dot"></div>
            <p class="step-text">
              Affect your ability to use credit monitoring services
            </p>
          </div>
          <div class="sub-step-text">
            <div class="dot"></div>
            <p class="step-text">
              Directly impact your credit scores; your scores can still
              change while your credit is locked
            </p>
          </div>
          <div class="sub-step-text">
            <div class="dot"></div>
            <p class="step-text">
              Stop you from receiving prescreened offers of credit
            </p>
          </div>
          <div class="sub-step-text">
            <div class="dot"></div>
            <p class="step-text">
              Prevent you from using existing credit accounts
            </p>
          </div>
        </collapsible-list-item>

          <collapsible-list-item order="4" title="How quickly does a Credit Lock go into effect?">
            <p class="step-text">
              The Credit Lock can be placed or lifted instantly.
            </p>
          </collapsible-list-item>
        </ul>
        
      </section>
  `;
  }
}

customElements.define("collapsible-list-item", CollapsibleListItem);
