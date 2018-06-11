// import modelExtend from 'dva-model-extend';
// import commonModel from './common';
export default {

  namespace: 'app',

  state: {
    currentIndex: 0,
    currentIndex1: 1,
    currentIndex2: 2,
    currentIndex3: 3,
    length: 10
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    next(state,) {
      return { 
        ...state, 
        currentIndex: state.currentIndex === state.length - 1 ? 0 : state.currentIndex + 1,
        currentIndex1: state.currentIndex1 === state.length - 1 ? 0 : state.currentIndex1 + 1,
        currentIndex2: state.currentIndex2 === state.length - 1 ? 0 : state.currentIndex2 + 1,
        currentIndex3: state.currentIndex3 === state.length - 1 ? 0 : state.currentIndex3 + 1,
       };
    },
    previous(state,) {
      return {
        ...state,
        currentIndex: state.currentIndex === 0 ? state.length - 1 : state.currentIndex - 1,
        currentIndex1: state.currentIndex1 === 0 ? state.length - 1 : state.currentIndex1 - 1,
        currentIndex2: state.currentIndex2 === 0 ? state.length - 1 : state.currentIndex2 - 1,
        currentIndex3: state.currentIndex3 === 0 ? state.length - 1 : state.currentIndex3 - 1,
      }
    }
  },

};
