import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()


export const FeedbackProvider=({children})=>{

    const [feedback, setFeedback]= useState([
        {
            id:1,
            text: 'This item is feedback 1',
            rating: 10
        },
        {
            id:2,
            text: 'This item is feedback 2',
            rating: 8
        },
        {
            id:3,
            text: 'This item is feedback 3',
            rating: 4
        },
    ])

    const addFeedback= (newFeedback)=>{
        newFeedback.id= uuidv4()
        setFeedback([newFeedback, ...feedback]) //add current feeback array as items from current feeback and new ones
    }

    const deleteFeedback=(id)=>{
        if (window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item)=>item.id!==id)) //returns all ids except the input id i.e DELETION
        }
      }
    
    

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext