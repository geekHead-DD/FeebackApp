import Header from './components/Header';
import {v4 as uuidv4} from 'uuid'
import {useState} from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback=(id)=>{
    if (window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item)=>item.id!==id)) //returns all ids except the input id i.e DELETION
    }
  }

  const addFeedback= (newFeedback)=>{
    newFeedback.id= uuidv4()
    setFeedback([newFeedback, ...feedback]) //add current feeback array as items from current feeback and new ones
  }

  return (
    <Router>
      <Header/>
      <div className="container">
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/> 
            </>
          }> 
          </Route> 
          <Route path='/about' element={<AboutPage/>}>This is the about router</Route>
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
  );
}

export default App;