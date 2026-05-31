const btnCopiar = document.getElementById('btnCopiar');
const chavePix = document.getElementById('chavePix');
const btnVoltar = document.getElementById('btnVoltar');
const orderName = document.getElementById('orderName');
const orderOption = document.getElementById('orderOption');
const orderPrice = document.getElementById('orderPrice');
const orderImage = document.getElementById('orderImage');

function copyToClipboard(text) {
  if (!navigator.clipboard) {
    alert('Seu navegador nao suporta copia automatica.');
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    alert('Chave PIX copiada com sucesso!');
  }).catch(() => {
    alert('Nao foi possivel copiar automaticamente.');
  });
}

function goBack() {
  window.location.href = '../../index.html';
}

if (btnCopiar && chavePix) {
  btnCopiar.addEventListener('click', () => copyToClipboard(chavePix.innerText));
}

if (btnVoltar) {
  btnVoltar.addEventListener('click', goBack);
}

try {
  const raw = localStorage.getItem('rocketDealsOrder');
  if (raw) {
    const order = JSON.parse(raw);
    if (orderName && order.gameTitle) orderName.textContent = order.gameTitle;
    if (orderOption && order.optionName) orderOption.textContent = order.optionName;
    if (orderPrice && order.formattedPrice) orderPrice.textContent = order.formattedPrice;
    if (orderImage && order.gameImage) orderImage.src = order.gameImage;
  }
} catch (_err) {
  // keep checkout with default static info if localStorage fails
}
