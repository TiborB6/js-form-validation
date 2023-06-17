const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
  if (!form.validity.valid) {
    e.preventDefault()
  }
})

const emailMessage = document.querySelector('#email-error-message')
const email = document.querySelector('#email')
email.addEventListener('input', () => {
  if (email.validity.typeMismatch) {
    email.classList.remove('valid')
    email.classList.add('invalid')
    emailMessage.textContent = ' - Enter a valid email adress'
  } else if (email.validity.valueMissing) {
    email.classList.remove('valid')
    email.classList.add('invalid')
    emailMessage.textContent = ' - Enter an email adress'
  } else {
    email.classList.remove('invalid')
    email.classList.add('valid')
    emailMessage.textContent = ''
  }
})

//  required field should be moved to be checked only if submitted
const firstNamemessage = document.querySelector('#first-name-error-message')
const firstName = document.querySelector('#first-name')
firstName.addEventListener('input', () => {
  if (firstName.validity.valueMissing) {
    firstName.classList.remove('valid')
    firstName.classList.add('invalid')
    firstNamemessage.textContent = ' - Enter a name'
  } else {
    firstName.classList.remove('invalid')
    firstName.classList.add('valid')
    firstNamemessage.textContent = ''
  }
})

const secondNamemessage = document.querySelector('#second-name-error-message')
const secondName = document.querySelector('#second-name')
secondName.addEventListener('input', () => {
  if (firstName.validity.valueMissing) {
    secondName.classList.remove('valid')
    secondName.classList.add('invalid')
    secondNamemessage.textContent = ' - Enter a name'
  } else {
    secondName.classList.remove('invalid')
    secondName.classList.add('valid')
    secondNamemessage.textContent = ''
  }
})

const countries = document.querySelector('#countries')
const zip = document.querySelector('#zip')
const zipmessage = document.querySelector('#zip-error-message')
countries.addEventListener('change', () => {
  const zipPattern = {
    austria: /^\d{4}$/,
    belgium: /^\d{4}$/,
    bulgaria: /^\d{4}$/,
    croatia: /^\d{5}$/,
    cyprus: /^\d{4}$/,
    'czech-republic': /^\d{5}$/,
    denmark: /^\d{4}$/,
    estonia: /^\d{5}$/,
    finland: /^\d{5}$/,
    france: /^\d{5}$/,
    germany: /^\d{5}$/,
    greece: /^\d{5}$/,
    hungary: /^\d{4}$/,
    ireland: /^\d{3}\s?\w{4}$/,
    italy: /^\d{5}$/,
    latvia: /^\d{4}$/,
    lithuania: /^\d{5}$/,
    luxembourg: /^\d{4}$/,
    malta: /^[A-Z]{3}\d{4}$/,
    netherlands: /^\d{4}\s?[A-Z]{2}$/,
    poland: /^\d{5}$/,
    portugal: /^\d{4}-?\d{3}$/,
    romania: /^\d{6}$/,
    slovakia: /^\d{5}$/,
    slovenia: /^\d{4}$/,
    spain: /^\d{5}$/,
    sweden: /^\d{5}$/
  }

  zip.pattern = zipPattern[`${countries.value}`]
})
zip.addEventListener('input', () => {
  if (zip.validity.patternMismatch) {
    zip.classList.remove('valid')
    zip.classList.add('invalid')
    zipmessage.textContent = ' - Enter a valid zip code'
  } else if (zip.validity.valueMissing) {
    zip.classList.remove('valid')
    zip.classList.add('invalid')
    zipmessage.textContent = ' - Enter a zip code'
  } else {
    zip.classList.remove('invalid')
    zip.classList.add('valid')
    zipmessage.textContent = ''
  }
})

const psw = document.querySelector('#psw')
const pswCon = document.querySelector('#psw-con')
const pswConMessage = document.querySelector('#psw-con-error-message')
psw.addEventListener('input', () => {
  if (!psw.validity.valueMissing) {
    psw.classList.add('valid')
  }
})

pswCon.addEventListener('input', () => {
  if (psw.value !== pswCon.value) {
    pswCon.classList.remove('valid')
    pswCon.classList.add('invalid')
    pswConMessage.textContent = ' - Passwords not matching'
  } else {
    pswCon.classList.remove('invalid')
    pswCon.classList.add('valid')
    pswConMessage.textContent = ''
  }
})
