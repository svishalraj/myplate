import { expect } from 'chai';
import { renderComponent } from 'helpers/TestHelper';
import { Tasks } from './index';

/** Mock App. State */
const state: Object = {
  tasks:  {
    id: 1,
    userId: 'Sam',
    taskName: 'Create core',
    start: '21-Jan-17',
    end: '22-Feb-17',
  },
};

describe('Task module ', () => {
  describe('<Tasks />', () => {
    const component = renderComponent(Tasks, state);
    it('Renders tasks', () => {
      expect(component.find('table')).to.exist;
    });
  });
});
