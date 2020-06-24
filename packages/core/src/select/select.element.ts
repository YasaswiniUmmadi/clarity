/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-element';
import { globalStyle, property, listenForAttributeChange } from '@clr/core/internal';
import { CdsControl } from '@clr/core/forms';
import { inputStyles } from '@clr/core/input';
import { ClarityIcons, angleIcon } from '@clr/core/icon';
import '@clr/core/icon/register.js';
import { styles as globalStyles } from './select.global.css.js';
import { styles } from './select.element.css.js';

ClarityIcons.addIcons(angleIcon);

/**
 * Select
 *
 * ```typescript
 * import '@clr/core/select';
 * ```
 *
 * ```html
 * <cds-select>
 *   <label>Test</label>
 *   <select>
 *    <option>Option One</option>
 *    <option>Option Two</option>
 *    <option>Option Three</option>
 *   </select>
 * </cds-select>
 * ```
 *
 * @element cds-select
 * @slot default - For projecting select and label
 * @cssprop --background
 * @cssprop --background-size
 * @cssprop --border
 * @cssprop --border-bottom
 * @cssprop --outline
 * @cssprop --padding
 * @cssprop --font-size
 * @cssprop --color
 * @cssprop --line-height
 * @cssprop --transition
 */
export class CdsSelect extends CdsControl {
  protected get suffixDefaultTemplate() {
    return html`<cds-control-action readonly><cds-icon shape="angle" direction="down"></cds-icon></cds-control-action>`;
  }

  static get styles() {
    return [...super.styles, inputStyles, styles];
  }

  @globalStyle() protected globalStyles = globalStyles;

  @property({ type: Boolean }) protected multiple = false;

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.multiple = this.inputControl.hasAttribute('multiple');
    this.observers.push(listenForAttributeChange(this.inputControl, 'multiple', val => (this.multiple = val !== null)));
  }
}
