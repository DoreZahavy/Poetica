
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'story'

export const storyService = {
    query,
    getById,
    save,
    remove,
    addstoryMsg
}
window.cs = storyService
// TODO: Implement functions
// BUG: sortField and sortDir are not used


async function query(filterBy = {txt:'' }) {
    var storys = await storageService.query(STORAGE_KEY)
    const { txt} = filterBy

    if (txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        storys = storys.filter(story => regex.test(story.vendor) || regex.test(story.description))
    }
    
    return storys
}

// async function createstory() {

// }

function getById(storyId) {
    return storageService.get(STORAGE_KEY, storyId)
}

async function remove(storyId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, storyId)
}

async function save(story) {
    var savedstory
    if (story._id) {
      
        savedstory = await storageService.put(STORAGE_KEY, story)
    } else {
        
        savedstory = await storageService.post(STORAGE_KEY, story)
    }
    return savedstory
}

async function addstoryMsg(storyId, txt) {
    // Later, this is all done by the backend
    const story = await getById(storyId)

    const msg = {
        id: makeId(),
        by: userService.getLoggedInUser(),
        txt
    }
    story.msgs.push(msg)
    await storageService.put(STORAGE_KEY, story)

    return msg
}