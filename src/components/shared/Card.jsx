import PropTypes from "prop-types"

function Card({ children, reverse }) {
    return (
        <div className={`card ${reverse && 'reverse'}`}>
            {children}
        </div>
    )
}


Card.protoTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card
