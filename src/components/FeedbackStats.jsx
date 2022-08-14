import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
    let avg = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    avg = avg.toFixed(1).replace(/[.,]0$/, '')


    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>{isNaN(avg) ? 0 : avg} - Average Rating</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array,
}

export default FeedbackStats
