import {motion, AnimatePresence, animate} from 'framer-motion'
import FeebackItem from './FeebackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback, handleDelete}) {  // handleDelete prop(deleteFeedback) from App.js, destructuring
  if(!feedback || feedback.length===0){
    return <p>No feedback</p>
  }
  return (
    <div className="feeback-list">
      <AnimatePresence>
        {feedback.map((item)=>(
          <motion.div
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
          >
            <FeebackItem 
              key={item.id} 
              item={item}
              handleDelete={handleDelete}/>    {/* pass handleDelete prop to FeedbackItem.js */}
          </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )
  // return (
  //   <div className="feeback-list">
  //       {feedback.map((item)=>(
  //           <FeebackItem 
  //             key={item.id} 
  //             item={item}
  //             handleDelete={handleDelete}/> 
  //       ))}
  //   </div>
  // )
}
FeedbackList.propTypes={
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
 }
export default FeedbackList