import MainHeader from "../../cmps/MainHeader.jsx"
import StorySidebar from "./StorySidebar.jsx"

const StoryDetails = () => {
    console.log('index render')



    return (
        <main className="story-details">
            <MainHeader/>
            <StorySidebar />
            <p>story details</p>


        </main>
    )
}

export default StoryDetails