'use client'

const error = ({ error, reset }) => {
    return (
        <div>
            <h2>Something went wrong</h2>
            <p>{error.message}</p>
            <button onClick={reset}>Try again</button>
        </div>
    )
}

export default error