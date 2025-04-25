import { Outlet, useParams } from "react-router"
import { useEffect, useState } from "react"
import { storyService } from "../services/story/index.js"
import MainHeader from "../cmps/MainHeader.jsx"
import StoryDetailsSidebar from "../cmps/StoryDetailsSidebar.jsx"

const StoryDetails = () => {
    console.log('index render')

    const [story , setStory] = useState(null)
    const {storyId} = useParams()

    useEffect(()=>{
        loadStory()
    },[])
    
    async function loadStory() {
            const fetchedStory = await storyService.getById(storyId)
            // renderLowerCanvas()
            setStory(fetchedStory)
        }
        if (!story) return <p>loading!</p>
    return (
        <main className="story-details main-layout">
            <MainHeader />
            <StoryDetailsSidebar story={story} />
            <Outlet className='main-layout-content'/>


        </main>
    )
}

export default StoryDetails