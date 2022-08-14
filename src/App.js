import Header from "./components/Header";
import {v4 as uuidv4} from 'uuid'
import FeedbackList from "./components/FeedbackList";
import { useState } from 'react'
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedBack = (id) => {
        if (window.confirm('Are You Sure You Want To Delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback}
                    handleDelete={deleteFeedBack}
                />
            </div>
        </>
    )
}

export default App;