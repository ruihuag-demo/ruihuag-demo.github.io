function render(father, list = [], prefix = '', depth = 0) {
  try {
    list.forEach(item => {
      const dom = document.createElement('a')
      dom.target = '__blank'
      dom.className = 'name'
      if (item.path) {
        dom.href = item.path
      }
      let name = prefix && depth > 1 ? prefix + ' · ' + item.name : item.name
      if (item.file && /\.html$/.exec(name)) {
        name = String(name)
          .replace(/.html$/, '')
          .replace(' · index', '')
      }
      dom.innerText = name
      if (Array.isArray(item.child)) {
        render(father, item.child, name, depth + 1)
      }
      father.appendChild(dom)
    })
  } catch (error) {
    console.error(error)
  }
}
async function init() {
  const res = await fetch('./.assets/files-tree.json')
  const data = (await res?.json()) || {}
  const box = document.querySelector('.main')
  const content = document.createDocumentFragment()
  console.log('start', data, box)
  if (Array.isArray(data?.child)) {
    data.child.forEach(item => {
      if (item.file) return
      console.log(item)
      const dom = document.createElement('div')
      dom.className = 'item'
      const itemNameDom = document.createElement('div')
      itemNameDom.className = 'item-name'
      itemNameDom.innerText = item.name
      dom.appendChild(itemNameDom)
      const child = document.createElement('div')
      child.className = 'child'
      dom.appendChild(child)
      render(dom, item?.child || [], '')
      content.appendChild(dom)
    })
  }
  box.appendChild(content)
}

window.onload = function () {
  init()
}
