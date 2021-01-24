export const ACTION = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
	RESET: 'RESET',
}

export const increment = () => (dispatch) =>
	dispatch({
		type: ACTION.INCREMENT,
	})

export const decrement = () => (dispatch) =>
	dispatch({
		type: ACTION.DECREMENT,
	})

export const reset = () => (dispatch) =>
	dispatch({
		type: ACTION.RESET,
	})