import Flashcard from './FlashCard'

function FlashcardList({ words }) {
    return (
        <div className="card-list">
            {words.map((word) => (
                <Flashcard key={word.id} word={word} />
            ))}
        </div>
    )
}

export default FlashcardList
