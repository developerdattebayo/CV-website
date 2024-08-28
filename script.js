const copyright = document.querySelector('.copyright')
const now = new Date()
const newCopyRight = `© ${now.getFullYear()} Josef Blažek. Všechna práva vyhrazena.`
copyright.innerText = newCopyRight
