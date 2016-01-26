import expect, { createSpy } from 'expect';
import fetch from 'isomorphic-fetch';
import * as action from '../../src/js/actions/movies';
import * as constant from '../../src/js/constants';


describe('Movie actions', () => {
  it('export the required functions', () => {
    expect(action.fetchRatings).toExist();
    expect(action.changeFilter).toExist();
  });

  describe('fetchRatings()', () => {

      const fn = action.fetchRatings();
      const dispatch = createSpy();
      const getState = () => ({ movies: { start: 0, perPage: 10 } });

      fn(dispatch, getState);

      expect(dispatch)
        .toHaveBeenCalledWith({ type: constant.REQUEST_RATINGS });
  });
});
