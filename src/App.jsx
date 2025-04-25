import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import StoryDetails from './pages/StoryDetails.jsx'
import HomePage from './pages/HomePage.jsx'
import StoryIndex from './pages/StoryIndex.jsx'
import StoryVars from './pages/StoryVars.jsx'
import StoryChars from './pages/StoryChars.jsx'
import StoryItems from './pages/StoryItems.jsx'
import SceneEditor from './pages/SceneEditor.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import StorySummary from './pages/StorySummary.jsx'

function App() {

  return (
    <Provider store={store}>
      <Router>

        <section className="app">
          <Routes>
            <Route element={<HomePage />} path="/" />
              <Route path="/story/dashboard/:folder?" element={<StoryIndex />} />
              <Route path="/story/:storyId" element={<StoryDetails />} >
                <Route path="/story/:storyId/summary" element={<StorySummary />} />
                <Route path="/story/:storyId/characters" element={<StoryChars />} />
                <Route path="/story/:storyId/variables" element={<StoryVars />} />
                <Route path="/story/:storyId/items" element={<StoryItems />} />
                <Route path="/story/:storyId/scene/:scene" element={<SceneEditor />} />

              </Route>

            <Route  path="*" element={<NotFoundPage/>} />
          </Routes>
        </section>

      </Router>
    </Provider>
  )
}

function RouteGuard({ children }) {
  const location = useLocation()
  // console.log(location);
  const allowedRoutes = ['/', '/story/dashboard/:folder', 'story/:storyId']
  const isAllowed = allowedRoutes.some(route =>
    matchPath(route, location.pathname)
  )
  // If the current route is not allowed, navigate to the default route, login??
  if (!isAllowed) {
    return <NotFoundPage />
  }
  return children
}

export default App
