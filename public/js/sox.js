const sox = document.querySelector('#add')
const approvedSocksContainer = document.querySelector('#approvedSocksContainer')

console.log('sox =>', sox)

sox?.addEventListener('click', async (event) => {
  event.preventDefault()

  // Слушаем кнопку Одобрить
  if (event.target.innerText === 'Одобрить') {
    console.log('BUTTON =>')
    const action = event.target.href

    console.log('action =>', action)
    const response = await fetch(action)
    const data = await response.text()

    approvedSocksContainer.innerHTML = data
  }

  // Слушаем кнопку Удалить
  if (event.target.innerText === 'Удалить') {
    const action = event.target.href
    console.log('action =>', action)
    const response = await fetch(action, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await response.text()
    approvedSocksContainer.innerHTML = data
  }

})
