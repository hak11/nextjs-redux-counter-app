import { increment, decrement, reset } from '../redux/actions/counter'
import { connect } from 'react-redux'

const Counter = (props) => {
  return (
    <div>
      <h1>
				Count: <span>{props.counterReducer.count}</span>
      </h1>
      <button onClick={() => {
				props.increment()
			}}>+1</button>
      <button onClick={() => {
				props.decrement()
			}}>-1</button>
      <button onClick={() => {
				props.reset()
			}}>Reset</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
	counterReducer: state.counterReducer,
})

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => {
			dispatch(increment())
		},
		decrement: () => {
			dispatch(decrement())
		},
		reset: () => {
			dispatch(reset())
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
