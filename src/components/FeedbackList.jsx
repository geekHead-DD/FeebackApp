import {motion, AnimatePresence, animate} from 'framer-motion'
import { useContext } from 'react'
import FeebackItem from './FeebackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {  

  const{feedback}= useContext(FeedbackContext)

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
              />    {/* pass handleDelete prop to FeedbackItem.js */}
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

export default FeedbackList