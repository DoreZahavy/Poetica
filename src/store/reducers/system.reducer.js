export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const SET_MODAL_DATA = 'SET_MODAL_DATA'


const initialState = {
  isLoading: false
}

export function systemReducer (state = initialState, action = {}) {
  switch (action.type) {
    case SET_MODAL_DATA:
			return {
				...state,
				modalData: action.modalData
			}

    case LOADING_START:
      return { ...state, isLoading: true }
    case LOADING_DONE:
      return { ...state, isLoading: false }
    default: return state
  }
}
