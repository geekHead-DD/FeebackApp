import { FaTimes, FaEdit, FaDAndD } from 'react-icons/fa'
import { useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeebackItem({item }) {
    const {deleteFeedback, editFeedback}= useContext(FeedbackContext)
    return (
        <Card>  {/* <Card reverse={true}> passing prop reverse as true */}
            <div className="num-display">{item.rating}</div>   {/* dynamic rendering */}
            <button className='close' onClick={()=>deleteFeedback(item.id)}> {/* event firing*/}
                <FaTimes color='purple' /> {/* icon */}
            </button>
            <button onClick={()=>editFeedback(item)} className="edit">
                <FaEdit color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}
FeebackItem.propTypes={
 item: PropTypes.object.isRequired,
}
export default FeebackItem