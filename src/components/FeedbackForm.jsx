import Card from "./shared/Card"
import {useState} from 'react'
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm({handleAdd}) {
    const [text, SetText]= useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange=(e)=>{
        if(text ===''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !== '' && text.trim().length<=10){
            setMessage('Text must be atleast 10 characters')
            setBtnDisabled(true)
        }
        else{
            setBtnDisabled(false)
            setMessage(null)
        }

        SetText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault() // prevent default behavior of submitting to actual file
        if (text.trim().length > 10) {
          const newFeedback = {//set object to text and rating from input
            text,
            rating,
          }

          handleAdd(newFeedback)

          SetText('')
        }
    } 

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Kindly rate our service here</h2>
                <RatingSelect select={(rating)=>setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message} </div>}
            </form>
        </Card>
  )
}

export default FeedbackForm