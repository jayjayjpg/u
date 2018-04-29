import Component from '@ember/component';
import { reads } from '@ember/object/computed';

export default Component.extend({
  'data-test-comic-panel': true,
  backgroundImg: null,
  alt: null,
  classNames: ['comic-panel'],
});
