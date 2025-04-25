import { useNavigate, useParams } from "react-router"
import { storyService } from "../services/story"
import MainHeader from "../cmps/MainHeader"
import StoryList from "../cmps/story-index/StoryList"
import FolderList from "../cmps/story-index/FolderList"

const StoryIndex = () => {
    console.log('index render')

    const { folder } = useParams()
    const navigate = useNavigate()

    async function onCreateNewStory() {
        console.log('hi')

        const newStory = await storyService.save(storyService.getEmptyStory())
        navigate(`/story/${newStory._id}/summary`)
    }

    return (
        <main className="story-index main-layout">
            <MainHeader />
            <FolderList folder={folder} />
            <section className="main-layout-content">

                <header className="story-index-header" >
                    <p>your stories / all stories / stories you are invited..</p>
              <button onClick={onCreateNewStory}>Add new</button>
                </header>
                <StoryList />

            </section>


        </main>
    )
}

export default StoryIndex