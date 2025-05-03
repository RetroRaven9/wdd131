const themeSelector = document.querySelector('#theme-selector');

const logo = document.querySelector('#logo');


function changeTheme() {
  const selectedTheme = themeSelector.value;

  if (selectedTheme === 'dark') {
    document.body.classList.add('dark');
    logo.src = 'images/byuilogo.png';
  } else {
    document.body.classList.remove('dark');
    logo.src = 'images/logo-white.png'; 
  }
}

themeSelector.addEventListener('change', changeTheme);

document.body.classList.remove('dark');
