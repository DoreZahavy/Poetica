import { NavLink } from "react-router"
import GIcon from "./GIcon"

const StoryDetailsSidebar = ({ story }) => {

    const [sceneFilter,setSceneFilter] = useState()

    function getStoryPath(path) {
        return `/story/${story._id}/${path}`
    }
    function getScenePath(scene) {
        return `/story/${story._id}/scene/${scene}`
    }

    const storyRoutes = ['summary', 'characters', 'items', 'variables']

    return (
        <aside className="story-details-sidebar align-center main-layout-aside flex space-between flex-column">


            <ul className="clean-list flex flex-column">
                {storyRoutes.map(route => <NavLink to={getStoryPath(route)} key={route}>{route}</NavLink>)}

            </ul>
            <div>
                <input type="text" placeholder="Search Scenes" />
                <button>+</button>
            </div>
            <ul>
                {story.scenes.length &&
                    story.scenes.map(scene =>
                        <NavLink to={getScenePath(scene)} key={scene}>
                            {scene}
                        </NavLink>)}

            </ul>
            <GIcon className="logo" iconName="Logo" />

        </aside>
    )
}

export default StoryDetailsSidebar