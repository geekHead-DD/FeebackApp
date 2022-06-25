import { type } from '@testing-library/user-event/dist/type'
import PropTypes from 'prop-types'

function Button(children, type, isDisabled) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-primary`}>     {/* properties for submit button */}
        Submit
    </button>
  )
}

Button.defaultProps = {
    type: 'button',
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
  }
  
export default Button