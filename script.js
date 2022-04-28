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

const sent = document.querySelector('[data-sent="accordion"]')

sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-sent-topic="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-rectangle="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-done-icon="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-made="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-editar="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-enviado="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-agradecemos="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-descubra="1"]')
  accordionSent.classList.toggle('done');
})



sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-write="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-tem="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-assunto="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-defina="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-conteudo="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-text-box="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-bold="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-italic="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-enviar="1"]')
  accordionSent.classList.toggle('done');
})
sent.addEventListener('click', e=>{
  const accordionSent = document.querySelector('[data-send-box="1"]')
  accordionSent.classList.toggle('done');
})
