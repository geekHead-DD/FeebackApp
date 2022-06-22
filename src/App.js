import Header from './components/Header';
import FeebackItem from './components/FeebackItem';
import {useState} from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header/>
      <div className="App">
        <FeedbackList feedback={feedback}/>
      </div>
    </>
  );
}

export default App;
