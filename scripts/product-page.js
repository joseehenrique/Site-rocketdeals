let selected = null;

const opts = document.querySelectorAll('.opcao');
const precoFinal = document.getElementById('precoFinal');
const btnComprar = document.getElementById('btnComprar');
const btnCarrinho = document.getElementById('btnCarrinho');
const gameTitle = document.querySelector('.buy-box h1')?.innerText || 'Jogo';
const gameImage = document.querySelector('.buy-box img')?.getAttribute('src') || '';
const pageRoot = document.querySelector('.produto-page');
const buyBox = document.querySelector('.buy-box');

if (pageRoot) {
  const topbar = document.createElement('div');
  topbar.className = 'rd-topbar';
  topbar.innerHTML = `
    <a href="../../index.html" class="rd-back-link">← Voltar para a loja</a>
    <span class="rd-page-label">Produto selecionado: ${gameTitle}</span>
  `;
  pageRoot.prepend(topbar);
}

if (buyBox) {
  const meta = document.createElement('div');
  meta.className = 'buy-meta';
  meta.innerHTML = `
    <span>Compra segura</span>
    <div class="valor" style="font-size:1rem;">Entrega digital + suporte via Discord</div>
  `;
  buyBox.insertBefore(meta, buyBox.querySelector('.opcoes-compra'));
}

function toCurrency(value) {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'rd-toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 220);
  }, 1800);
}

function saveSelectedOrder() {
  if (!selected) return;
  const payload = {
    gameTitle,
    gameImage,
    optionName: selected.nome,
    price: selected.preco,
    formattedPrice: toCurrency(selected.preco)
  };
  localStorage.setItem('rocketDealsOrder', JSON.stringify(payload));
}

function selectOption(opt) {
  opts.forEach((item) => item.classList.remove('opcao-selecionada'));
  opt.classList.add('opcao-selecionada');
  selected = {
    nome: opt.querySelector('.opcao-nome').innerText,
    preco: Number.parseFloat(opt.dataset.preco)
  };
  precoFinal.innerText = toCurrency(selected.preco);
}

opts.forEach((opt) => {
  opt.addEventListener('click', () => selectOption(opt));
});

if (opts.length > 0) selectOption(opts[0]);

if (btnComprar) {
  btnComprar.addEventListener('click', () => {
    if (!selected) {
      showToast('Selecione uma opção para continuar.');
      return;
    }
    saveSelectedOrder();
    window.location.href = '../checkout/pix.html';
  });
}

if (btnCarrinho) {
  btnCarrinho.addEventListener('click', () => {
    if (!selected) {
      showToast('Selecione uma opção para continuar.');
      return;
    }
    saveSelectedOrder();
    showToast('Opção adicionada ao carrinho.');
  });
}
