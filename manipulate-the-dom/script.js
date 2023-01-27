let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const newTitle = document.querySelector('#main-title')
  newTitle.textContent = 'welcome to my website'

  // Part 2
  const body = document.querySelector('body')
  body.style.backgroundColor = 'lightblue'

  // Part 3
  const favoritesList = document.querySelectorAll('#favorite-things li')
  favoritesList[5].textContent = ''
  // Part 4
  const specialTitles = document.querySelectorAll('.special-title')
  specialTitles.forEach(title => {
    title.style.fontSize = '2rem'
  })
  // Part 5
  const races = document.querySelectorAll('#past-races li')
  races.forEach(race => {
    if (race.textContent === 'Chicago') {
      race.textContent = ''
    }
  })

  // Part 6
  const race = document.querySelector('#past-races')
  const li = document.createElement('li')
  li.textContent = 'paris'
  race.appendChild(li)

  // Part 7
  const main = document.querySelector('.main')
  const div = document.createElement('div')
  div.classList.add('blog-post', 'purple')

  const h1 = document.createElement('h1')
  h1.textContent = 'Paris'

  const p = document.createElement('p')
  p.textContent = 'I won the race in paris!'

  main.append(div)
  div.appendChild(h1)
  div.appendChild(p)
  // Part 8
  const quoteTitle = document.querySelector('#quote-title')
  quoteTitle.addEventListener('click', randomQuote)

  // Part 9
  const blogPosts = document.querySelectorAll('.blog-post')
  blogPosts.forEach(post => {
    post.addEventListener('mouseout', () => {
      post.classList.toggle('purple')
    })
    post.addEventListener('mouseenter', () => {
      post.classList.toggle('red')
    })
  })



});