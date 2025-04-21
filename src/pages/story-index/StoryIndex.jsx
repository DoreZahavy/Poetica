import { useNavigate, useParams } from "react-router"
import { wbService } from "../../services/story"
import  MainHeader  from "../../cmps/MainHeader"
import StoryList from "./StoryList"

const StoryIndex = () => {
    console.log('index render')

    const { folder } = useParams()
    const navigate = useNavigate()

    async function onNewWb() {
        console.log('hi')

        const newWb = await wbService.save(wbService.getEmptyWb())
        navigate(`/wb/${newWb._id}`)
    }

    return (
        <main className="story-index">
            <MainHeader />

            <header className="story-index-header-header" onClick={() => { console.log('heyyy') }}>
                <p>your stories / all stories / stories you are invited..</p>
            </header>
            <StoryList/>


        </main>
    )
}

export default StoryIndex