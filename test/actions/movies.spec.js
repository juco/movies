import expect, { createSpy, spyOn } from 'expect';
import rewire from 'rewire';
import * as isoFetch from 'isomorphic-fetch';
//import * as action from '../../src/js/actions/movies';
import * as constant from '../../src/js/constants';
var action = rewire('../../src/js/actions/movies');
console.log(action);

describe('Movie actions', () => {
  it('export the required functions', () => {
    expect(action.fetchRatings).toExist();
    expect(action.changeFilter).toExist();
  });

  describe('fetchRatings()', () => {
    beforeEach(() => {
      let fetchMock = {
        default: () => {
          console.log('foo');
        }
      };
      action.__set__('fetch', fetchMock);
    });

    it('dispatches a request action', () => {
      const fn = action.fetchRatings();
      const dispatch = createSpy();
      const getState = () => ({ movies: { start: 0, perPage: 10 } });

      fn(dispatch, getState);

      expect(dispatch)
        .toHaveBeenCalledWith({ type: constant.REQUEST_RATINGS });
    });

    it('dispatches an add action on success', () => {
      const fn = action.fetchRatings();
      const dispatch = createSpy();
      const getState = () => ({ movies: { start: 0, perPage: 10 } });

      fn(dispatch, getState);

      expect(dispatch)
        .toHaveBeenCalledWith({ type: constant.ADD_RATINGS });
    });
  });
});
