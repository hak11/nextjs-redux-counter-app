import { ACTION } from '../actions/counter'


const FIRST_INITIAL = {
	count: 0,
}

 const counterReducer = (state = FIRST_INITIAL, action) => {
	switch (action.type) {
		case ACTION.INCREMENT:
			return {
				...state,
				count: state.count + 1,
			}
		case ACTION.DECREMENT:
			return {
				...state,
				count: state.count - 1,
			}
		case ACTION.RESET:
			return {
				...state,
				count: FIRST_INITIAL.count,
			}
		default:
			return state
	}
}

export default counterReducer