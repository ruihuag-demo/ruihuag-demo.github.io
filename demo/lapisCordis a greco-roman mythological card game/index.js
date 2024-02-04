const canvas = document.body
const curtain = document.querySelector('.hand__curtain')

// lazy loading
document.addEventListener('DOMContentLoaded', function () {
  const lazyBackgrounds = [].slice.call(document.querySelectorAll('span'))

  if ('IntersectionObserver' in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('vfx--visible')
          lazyBackgroundObserver.unobserve(entry.target)
        }
      })
    })

    lazyBackgrounds.forEach(function (lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground)
    })
  }
})

const cardSet = [
  {
    card: document.querySelector('.hand__polyphemus'),
    clone: document.querySelector('.hand__polyphemus-clone'),
  },
  {
    card: document.querySelector('.hand__andromeda'),
    clone: document.querySelector('.hand__andromeda-clone'),
  },
  {
    card: document.querySelector('.hand__cerberus'),
    clone: document.querySelector('.hand__cerberus-clone'),
  },
  {
    card: document.querySelector('.hand__nyx'),
    clone: document.querySelector('.hand__nyx-clone'),
  },
  {
    card: document.querySelector('.hand__horse'),
    clone: document.querySelector('.hand__horse-clone'),
  },
]

const handleCardClick = (card, clone, event) => {
  card.classList.add('card--hidden')
  event.stopPropagation() // prevent glitch on hover
  curtain.classList.add('curtain--visible')
  clone.classList.add('card--visible')
}

cardSet.forEach(({ card, clone }) => {
  card.addEventListener('click', event => handleCardClick(card, clone, event))
})

canvas.addEventListener('click', () => {
  cardSet.forEach(({ card }) => card.classList.remove('card--hidden'))
  curtain.classList.remove('curtain--visible')
})

canvas.addEventListener('click', () => {
  cardSet.forEach(({ clone }) => clone.classList.remove('card--visible'))
})
