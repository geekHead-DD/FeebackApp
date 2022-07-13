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

    const[feedbackEdit,setFeedbackEdit]= useState({
        item: {},
        edit: false
    })

    //add feedback
    const addFeedback= (newFeedback)=>{
        newFeedback.id= uuidv4()
        setFeedback([newFeedback, ...feedback]) //add current feeback array as items from current feeback and new ones
    }

    //delete feedback
    const deleteFeedback=(id)=>{
        if (window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item)=>item.id!==id)) //returns all ids except the input id i.e DELETION
        }
      }

    //update feedback
    const updateFeedback = (id, updItem)=>{
        setFeedback(feedback.map((item)=>
        (item.id===id ?{...item, ...updItem}: item))
        )
        // FIX: this fixes being able to add a feedback after editing
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }
    
      //set item to be updated
    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,//actual state that holds the item and boolean
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext