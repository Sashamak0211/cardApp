import { useState } from 'react'

function Flashcard({ word }) {
    const [flipped, setFlipped] = useState(false)

    return (
        <div className="cards-box" onClick={() => setFlipped(!flipped)}>
            <div className="cards-content">{flipped ? word.ru : word.en}</div>
        </div>
    )
}
export default Flashcard
