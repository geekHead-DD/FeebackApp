import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'

//dynamic rendering
function FeebackItem({item ,handleDelete}) {
    //custom handle click function
    // const handleClick=(id)=>{ 
    //     console.log(id);
    // }
    /* <button className='close' onClick={()=>handleClick(item.id)}> GRABS ID OF SELECTED ELEMENT AND LOGS IT
                <FaTimes color='purple' />
            </button> */
    return (
        <Card>  {/* <Card reverse={true}> passing prop reverse as true */}
            <div className="num-display">{item.rating}</div>   {/* dynamic rendering */}
            <button className='close' onClick={()=>handleDelete(item.id)}> {/* event firing*/}
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