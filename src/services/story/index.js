const { DEV, VITE_LOCAL } = import.meta.env

import { userService } from '../user'
import { makeId } from '../util.service'
// import { makeId } from '../util.service'

import { storyService as local } from './story.service.local'
// import { wbService as remote } from './wb.service.remote'

function getEmptyStory() {
  return {
    // _id: makeId(),
    title: "Untitled",
    description: "My story description",
    thumbnailUrl: "https://marketplace.canva.com/EAFOYxZhUbU/1/0/1600w/canva-black-red-horror-stories-youtube-thumbnail-CCjIPIyyoZ8.jpg",
    createdAt: Date.now(),
    updatedAt:  Date.now(),
    createdBy: userService.getLoggedInUser(),
    members: []
  }
}

function getEmptyElement(toolName) {
  if (toolName === 'select' || toolName === 'grab') return null
  let emptyEl
  switch (toolName) {
    case 'pen':
      emptyEl = {
        points: [],
      }
      break
    case 'rectangle':
      emptyEl = {
        pos: { x: 0, y: 0 },
      }
      break
    case 'circle':
      emptyEl = {
        centerPos: { x: 0, y: 0 },
      }
      break
    // case 'img':
    //     break
    case 'line':
      emptyEl = {
        startPos: { x: 0, y: 0 },
        endPos: { x: 0, y: 0 },
      }

      break
    // default:
    //   emptyEl = null
  }
  emptyEl.id = makeId()
  emptyEl.type = toolName
  emptyEl.color = '#000'
  return emptyEl
}

function getDefaultFilter() {
  return {
    txt: '',
    minSpeed: '',
    sortField: '',
    sortDir: '',
  }
}



const service = local
// const service = VITE_LOCAL === 'true' ? local : remote
export const storyService = {
  getEmptyElement,
  getEmptyStory,
  getDefaultFilter,
  ...service,
}

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.storyService = storyService
