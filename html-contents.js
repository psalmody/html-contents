/*************************
 * 
 * HTML Contents
 * https://github.com/psalmody/html-contents
 * MIT License
 * 
 */

const htmlContents = function(toc, options) {
  options = Object.assign({}, {
    top: 2,
    bottom: 6,
    addIds: true,
    addLinks: true
  }, options)

  //shared functions
  const getLevel = function(str) {
    return parseInt(str.replace(/[a-z,A-Z]/g,''))
  }
  const listItem = function(el) {
    return '<li>' + el.textContent + '</li>'
  }

  //toc of contents - remove # if necessary
  let TOC = document.getElementById(toc.replace(/\#/g, ''))

  //get levels in between top and bottom - make query string
  let lvls = []
  for (let i = options.top; i <= options.bottom; i++) {
    lvls.push('h' + i)
  }

  //select all levels
  let headers = document.querySelectorAll(lvls.join(','))

  //add ids if necessary
  if (options.addIds) {
    //keep track of ids
    let ids = []
    headers.forEach(function(el) {
      //if it has an id already, just add that to the array
      if (el.id) return ids.push(el.id)
      //id will be the textcontent without spaces or numbers in lower case
      let id = el.textContent.replace(/\s|[0-9]/g, '').toLowerCase()
      while(ids.indexOf(id) !== -1) {
        //add zs to the end until we have a unique id
        id = id + 'z'
      }
      //ready to be tracked
      ids.push(id)
      //okay we can set now
      el.id = id
    })
  }

  //make list
  //current level
  let currentLevel = options.top
  let html = '<ul>'
  headers.forEach(function(h) {
    let l = getLevel(h.tagName)
    //if we're still at level
    if (currentLevel === l) {
      html += listItem(h)
    } else if (currentLevel > l) {
      //if we've gone back up
      html += '</ul>' + listItem(h)
    } else {
      //we've gone down
      html += '<ul>' + listItem(h)
    }
  })
  TOC.insertAdjacentHTML('beforeend', html)
  
}