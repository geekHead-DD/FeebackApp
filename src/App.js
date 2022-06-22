import Header from './components/Header';
import {useState} from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback=(id)=>{
    if (window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item)=>item.id!==id)) //returns all ids except the input id i.e DELETION
    }
  }

  return (
    <>
      <Header/>
      <div className="App">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  );
}

export default App;
