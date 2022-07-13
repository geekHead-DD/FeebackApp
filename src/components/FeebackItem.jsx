import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeebackItem({item }) {
    const {deleteFeedback}= useContext(FeedbackContext)
    return (
        <Card>  {/* <Card reverse={true}> passing prop reverse as true */}
            <div className="num-display">{item.rating}</div>   {/* dynamic rendering */}
            <button className='close' onClick={()=>deleteFeedback(item.id)}> {/* event firing*/}
                <FaTimes color='purple' /> {/* icon */}
            </button>
            
            <div className="text-display">{item.text}</div>
        </Card>
    )
}
//static rendering
// function FeebackItem() {       
//     // const [rating, setRating]= useState(7) //use 7 as static rating
//     // const [text, setText]= useState('This is an example of feedback item')
//     return (
//         <div className='card'>
//             <div className="num-display">{rating}</div>  
//             <div className="text-display">{text}</div>
//         </div>
//     )
// }
FeebackItem.propTypes={
 item: PropTypes.object.isRequired,
}
export default FeebackItem