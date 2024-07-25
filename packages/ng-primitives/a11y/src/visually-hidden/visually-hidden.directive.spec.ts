/**
 * Copyright © 2024 Angular Primitives.
 * https://github.com/ng-primitives/ng-primitives
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { render } from '@testing-library/angular';
import { NgpVisuallyHidden } from './visually-hidden.directive';

describe('NgpVisuallyHidden', () => {
  it('should apply the styles to hide the element', async () => {
    const container = await render(`<div ngpVisuallyHidden>Hidden</div>`, {
      imports: [NgpVisuallyHidden],
    });

    // verify the styles are applied
    const element = container.getByText('Hidden');
    expect(getComputedStyle(element).position).toBe('absolute');
    expect(getComputedStyle(element).width).toBe('1px');
    expect(getComputedStyle(element).height).toBe('1px');
    expect(getComputedStyle(element).margin).toBe('-1px');
    expect(getComputedStyle(element).padding).toBe('0px');
    expect(getComputedStyle(element).overflow).toBe('hidden');
    expect(getComputedStyle(element).clip).toBe('rect(0px, 0px, 0px, 0px)');
    expect(getComputedStyle(element).border).toBe('0px');
    expect(getComputedStyle(element).whiteSpace).toBe('nowrap');
    expect(getComputedStyle(element).wordWrap).toBe('normal');
    expect(getComputedStyle(element).outline).toBe('0');
    expect(getComputedStyle(element).insetInlineStart).toBe('0');
  });

  it('should merge the styles with the host element', async () => {
    const container = await render(`<div ngpVisuallyHidden style="color: red;">Hidden</div>`, {
      imports: [NgpVisuallyHidden],
    });

    // verify the styles are applied
    const element = container.getByText('Hidden');
    expect(getComputedStyle(element).position).toBe('absolute');
    expect(getComputedStyle(element).width).toBe('1px');
    expect(getComputedStyle(element).height).toBe('1px');
    expect(getComputedStyle(element).margin).toBe('-1px');
    expect(getComputedStyle(element).padding).toBe('0px');
    expect(getComputedStyle(element).overflow).toBe('hidden');
    expect(getComputedStyle(element).clip).toBe('rect(0px, 0px, 0px, 0px)');
    expect(getComputedStyle(element).border).toBe('0px');
    expect(getComputedStyle(element).whiteSpace).toBe('nowrap');
    expect(getComputedStyle(element).wordWrap).toBe('normal');
    expect(getComputedStyle(element).outline).toBe('0');
    expect(getComputedStyle(element).insetInlineStart).toBe('0');
    expect(getComputedStyle(element).color).toBe('red');
  });
});
