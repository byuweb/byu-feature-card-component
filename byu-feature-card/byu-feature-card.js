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

const ATTR_LOGO = 'without-logo';

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

function setupSlotListeners(component) {
  let slot = component.shadowRoot.querySelector('#fancy-template');
}
