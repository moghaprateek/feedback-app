import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import { v4 as uuidv4 } from 'uuid'
import FeedbackList from "./components/FeedbackList";
import { useState } from 'react'
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from './components/AboutIconLink';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedBack = (id) => {
        if (window.confirm('Are You Sure You Want To Delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/'
                        element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList feedback={feedback}
                                    handleDelete={deleteFeedBack}
                                />
                            </>
                        }
                    />
                    <Route path='/about'
                        element={<AboutPage />} />
                         
                </Routes>

                <AboutIconLink />
            </div>
        </Router>
    )
}

export default App;