// Ativar os ícones do Lucide
lucide.createIcons();

// Seleciona elementos
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

// Funções para abrir e fechar o menu
function openMenu() {
  menu.classList.remove('translate-x-full');
  overlay.classList.remove('hidden');
}

function closeMenu() {
  menu.classList.add('translate-x-full');
  overlay.classList.add('hidden');
}

// Eventos de clique
menuBtn.addEventListener('click', () => {
  if (menu.classList.contains('translate-x-full')) {
    openMenu();
  } else {
    closeMenu();
  }
});

overlay.addEventListener('click', () => {
  closeMenu();
});