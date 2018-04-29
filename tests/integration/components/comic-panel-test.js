import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | comic-panel', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{comic-panel backgroundImg="an/img/url.jpg" alt="alt-test"}}`);

    assert.dom('[data-test-comic-panel] img').hasAttribute('src', 'an/img/url.jpg');
    assert.dom('[data-test-comic-panel-img]').hasAttribute('alt', 'alt-test');
  });
});
