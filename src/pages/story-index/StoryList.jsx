import StoryPreview from "./StoryPreview"

const StoryList = ({ stories }) => {

    if (!stories) return <h1>loading....</h1>
    if (!stories.length) return <h1>the are no whiteboards</h1>
    return (
        <ul className="story-list">
            {stories.map(story => <StoryPreview />)}

        </ul>
    )
}

export default StoryList