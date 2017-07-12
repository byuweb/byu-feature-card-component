/**
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
"use strict";

import template from './byu-feature-card.html';
import * as util from 'byu-web-component-utils';

const ATTR_TITLE_BG = 'title-bg';
const ATTR_LOGO = 'without-logo';

const DEFAULT_TITLE_BG = 'navy';
const HIDE_ELEMENT_CLASS = '.hide-element';

class ByuFeatureCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    //This will stamp our template for us, then let us perform actions on the stamped DOM.
    util.applyTemplate(this, 'byu-feature-card', template, () => {
      disableLogo(this);

      setupSlotListeners(this);
    });
  }

  disconnectedCallback() {
    teardownButtonListeners(this);
  }

  // Load the change in the CSS rather than JS
  /*
  static get observedAttributes() {
    return [ATTR_FANCY];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch(attr) {
      case ATTR_FANCY:
        applyFancy(this);
        break;
    }
  } */

  set titleBG(value) {
      switch (value) {
          case 'drupal-blue':
          case 'gray':
          case 'dark-gray':
          case 'net-green':
          case 'navy':
          case 'royal-blue':
              this.setAttribute(ATTR_TITLE_BG, value);
              break;
          default:
            this.setAttribute(ATTR_TITLE_BG, 'navy');
      }
  }

  get titleBG() {
    if (this.hasAttribute(ATTR_TITLE_BG)) {
      return this.getAttribute(ATTR_TITLE_BG);
    }
    return DEFAULT_TITLE_BG;
  }

  get withoutLogo() {
    return this.hasAttribute(ATTR_LOGO);
  }

}

window.customElements.define('byu-feature-card', ByuFeatureCard);
window.ByuFeatureCard = ByuFeatureCard;

// -------------------- Helper Functions --------------------

function disableLogo(component) {
  let logo = component.shadowRoot.querySelector('#byu-logo');
  let woLogo = component.withoutLogo;

  if (woLogo) {
    logo.classList.add(HIDE_ELEMENT_CLASS);
  }
}

// TODO: Change to setup event listeners to listen for an attribute change.
function setupSlotListeners(component) {
  let slot = component.shadowRoot.querySelector('#fancy-template');

  //this will listen to changes to the contents of our <slot>, so we can take appropriate action
  slot.addEventListener('slotchange', () => {
    applyFancy(component);
  }, false);
}
