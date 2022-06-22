import Card from "./shared/Card"
import {useState} from 'react'

function FeedbackForm() {
    const [text, SetText]= useState('')
    const handleTextChange=(e)=>{
        SetText(e.target.value);
    }
    return (
        <Card>
            <form>
                <h2>Kindly rate our service here</h2>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
  )
}

export default FeedbackForm