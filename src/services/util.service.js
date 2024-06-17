import { format } from "date-fns"

export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  debounce,
  randomPastTime,
  saveToStorage,
  loadFromStorage,
  getAssetSrc,
  getImageMetaData,
}

function makeId(length = 6) {
  let txt = ""
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

function makeLorem(size = 100) {
  let words = [
    "The sky",
    "above",
    "the port",
    "was",
    "the color of television",
    "tuned",
    "to",
    "a dead channel",
    ".",
    "All",
    "this happened",
    "more or less",
    ".",
    "I",
    "had",
    "the story",
    "bit by bit",
    "from letious people",
    "and",
    "as generally",
    "happens",
    "in such cases",
    "each time",
    "it",
    "was",
    "a different story",
    ".",
    "It",
    "was",
    "a pleasure",
    "to",
    "burn",
  ]
  let txt = ""
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + " "
  }
  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function randomPastTime() {
  const HOUR = 1000 * 60 * 60
  const DAY = 1000 * 60 * 60 * 24
  const WEEK = 1000 * 60 * 60 * 24 * 7

  const pastTime = getRandomIntInclusive(HOUR, WEEK)
  return Date.now() - pastTime
}

function debounce(func, timeout = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

// util function
function getAssetSrc(name) {
  const path = `/src/assets/${name}`
  const modules = import.meta.glob("/src/assets/*", { eager: true })
  const mod = modules[path]
  return mod.default
}

function getImageMetaData(imageUrl) {
  return new Promise(function (resolve, reject) {
    // Create a new image object
    let img = new Image()

    // Set the src attribute to the image URL
    img.src = imageUrl

    // When the image is loaded, resolve the promise with its metadata
    img.onload = function () {
      let width = this.width // Image width
      let height = this.height // Image height

      // Calculate the aspect ratio
      let aspectRatio = width / height

      // Create an object with image metadata
      let metaData = {
        width: width,
        height: height,
        aspectRatio: aspectRatio,
      }

      // Resolve the promise with the metadata
      resolve(metaData)
    }

    // If there's an error loading the image, reject the promise
    img.onerror = function () {
      reject(new Error("Failed to load image"))
    }
  })
}
