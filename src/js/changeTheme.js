
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchCheckbox = document.querySelector('#theme-switch-toggle')

switchCheckbox.addEventListener('change', swtichTheme)

function swtichTheme(e) {
    if (e.target.checked) {
        setDarkTheme()
    } else {
        setLightTheme()
   }
}

function setDarkTheme() {
        document.querySelector('body').classList.remove('light-theme')
        document.querySelector('body').classList.add('dark-theme')
        localStorage.setItem('theme', 'Theme.DARK')
}

function setLightTheme() {
        document.querySelector('body').classList.remove('dark-theme')
        document.querySelector('body').classList.add('light-theme')
        localStorage.setItem('theme', 'Theme.LIGHT')
}

if (localStorage.getItem('theme') === 'Theme.DARK') {
  document.querySelector('body').classList.add('dark-theme')
  switchCheckbox.checked = true
}



