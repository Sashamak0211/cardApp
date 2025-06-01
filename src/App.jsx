
import FlashcardList from './components/FlashCardList'
import { words } from './words/word'
import './App.css'

function App() {
    return (
        <div className="app-box">
            <h1>Карточки для слов</h1>
            <FlashcardList words={words} />
        </div>
    )
}

export default App
