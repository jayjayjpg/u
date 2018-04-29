import Controller from '@ember/controller';
import { computed } from '@ember/object';
 
const MOCK_PANEL = {
  imgUrl: '/assets/img/example.jpg',
};

export default Controller.extend({
  panels: computed(function() {
    return [MOCK_PANEL, MOCK_PANEL, MOCK_PANEL];
  }),
});
