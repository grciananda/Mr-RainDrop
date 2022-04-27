const accordion = document.querySelector('[data-js="accordion"]')

accordion.addEventListener('click', e => {
  const accordionItemToBeOpened = document.querySelector('[data-accordion-body="1"]')
  accordionItemToBeOpened.classList.toggle('active')
})

const vermais = document.querySelector('[data-accordion-header="1"]')

vermais.addEventListener('click', e => {
  const accordionVerMais = document.querySelector('[data-verMais="1"]')
  accordionVerMais.classList.toggle('inactive')
})

const criarNovo = document.querySelector('[data-criar="1"]')

criarNovo.addEventListener('click', e => {
  const accordionCriarNovo = document.querySelector('[data-novo="1"]')
  accordionCriarNovo.classList.toggle('active')
})
criarNovo.addEventListener('click', e => {
  const accordionCriarNovo = document.querySelector('[data-write="1"]')
  accordionCriarNovo.classList.toggle('active')
})
criarNovo.addEventListener('click', e => {
  const accordionCriarNovo = document.querySelector('[data-send-box="1"]')
  accordionCriarNovo.classList.toggle('active')
})
criarNovo.addEventListener('click', e => {
  const accordionCriarNovo = document.querySelector('[data-enviar="1"]')
  accordionCriarNovo.classList.toggle('active')
})
criarNovo.addEventListener('click', e => {
  const accordionCriarNovo = document.querySelector('[data-bold="1"]')
  accordionCriarNovo.classList.toggle('active')
})
criarNovo.addEventListener('click', e => {
  const accordionCriarNovo = document.querySelector('[data-italic="1"]')
  accordionCriarNovo.classList.toggle('active')
})