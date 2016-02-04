import expect, { createSpy, spyOn } from 'expect';
import * as isoFetch from 'isomorphic-fetch';
import * as action from '../../src/js/actions/movies';
import * as constant from '../../src/js/constants';


describe('Movie actions', () => {
  it('export the required functions', () => {
    expect(action.fetchRatings).toExist();
    expect(action.changeFilter).toExist();
  });

  describe('fetchRatings()', () => {
    it('dispatches a request action', () => {
      const fn = action.fetchRatings();
      const dispatch = createSpy();
      const getState = () => ({ movies: { start: 0, perPage: 10 } });

      fn(dispatch, getState);

      expect(dispatch)
        .toHaveBeenCalledWith({ type: constant.REQUEST_RATINGS });
    });

    it('dispatches an add action on success', () => {
      const fs = action.fetchRatings();
      const dispatch = createSpy();
      const getState = () => ({ movies: { start: 0, perPage: 10 } });

    });
    const fetchSpy = spyOn(isoFetch, 'fetch');
  });
});
