// Lista dos 23 jogos com preços corretos
  const jogos = [
    { num: 1, nome: "Grand Theft Auto V Legacy", arquivo: "pages/products/1-gta-5-legacy.html", img: "1-grand-theft-auto-v-legacy.jpg", preco: "20,00", tag: "CONTA OFFLINE" },
    { num: 2, nome: "Forza Horizon 6", arquivo: "pages/products/22-forza-horizon-6.html", img: "22-forza-horizon-6.jpg", preco: "30,00", tag: "CONTA OFFLINE" },
    { num: 3, nome: "Red Dead Redemption 2", arquivo: "pages/products/3-red-dead-2.html", img: "3-red-dead-redemption-2.jpg", preco: "45,00", tag: "CONTA OFFLINE" },
    { num: 4, nome: "Elden Ring", arquivo: "pages/products/4-elden-ring.html", img: "4-elden-ring.jpg", preco: "25,00", tag: "CONTA OFFLINE" },
    { num: 5, nome: "Kingdom Come: Deliverance II", arquivo: "pages/products/5-kingdom-come-2.html", img: "5-kingdom-come-deliverance-2.jpg", preco: "25,00", tag: "CONTA OFFLINE" },
    { num: 6, nome: "Crimson Desert", arquivo: "pages/products/6-crimson-desert.html", img: "6-crimson-desert.jpg", preco: "50,00", tag: "CONTA OFFLINE" },
    { num: 7, nome: "The Witcher 3: Wild Hunt", arquivo: "pages/products/7-the-witcher-3.html", img: "7-the-witcher-3.jpg", preco: "25,67", tag: "CONTA OFFLINE" },
    { num: 8, nome: "Hogwarts Legacy", arquivo: "pages/products/8-hogwarts-legacy.html", img: "8-hogwarts-legacy.jpg", preco: "25,00", tag: "CONTA OFFLINE" },
    { num: 9, nome: "Ghost of Tsushima Director's Cut", arquivo: "pages/products/9-ghost-of-tsushima.html", img: "9-ghost-of-tsushima.jpg", preco: "19,90", tag: "CONTA OFFLINE" },
    { num: 10, nome: "God of War Ragnarök", arquivo: "pages/products/10-god-of-war-ragnarok.html", img: "10-god-of-war-ragnarok.jpg", preco: "29,90", tag: "CONTA OFFLINE" },
    { num: 11, nome: "Starfield", arquivo: "pages/products/11-starfield.html", img: "11-starfield.jpg", preco: "25,00", tag: "CONTA OFFLINE" },
    { num: 12, nome: "Black Myth: Wukong", arquivo: "pages/products/12-black-myth-wukong.html", img: "12-black-myth-wukong.jpg", preco: "25,00", tag: "CONTA OFFLINE" },
    { num: 13, nome: "Resident Evil 4", arquivo: "pages/products/13-resident-evil-4.html", img: "13-resident-evil-4.jpg", preco: "25,00", tag: "CONTA OFFLINE" },
    { num: 14, nome: "The Last of Us Part I", arquivo: "pages/products/14-the-last-of-us.html", img: "14-the-last-of-us-part-1.jpg", preco: "19,90", tag: "CONTA OFFLINE" },
    { num: 15, nome: "Marvel's Spider-Man Remastered", arquivo: "pages/products/15-spider-man-remastered.html", img: "15-spider-man-remastered.jpg", preco: "25,00", tag: "CONTA OFFLINE" },
    { num: 16, nome: "Assassin's Creed Shadows", arquivo: "pages/products/16-assassins-creed-shadows.html", img: "16-assassins-creed-shadows.jpg", preco: "30,00", tag: "CONTA OFFLINE" },
    { num: 17, nome: "EA SPORTS FC 26", arquivo: "pages/products/17-ea-fc-26.html", img: "17-ea-sports-fc-26.jpg", preco: "35,00", tag: "CONTA OFFLINE" },
    { num: 18, nome: "EA SPORTS FC 25", arquivo: "pages/products/18-ea-fc-25.html", img: "18-ea-sports-fc-25.jpg", preco: "25,00", tag: "CONTA OFFLINE" },
    { num: 19, nome: "EA SPORTS FC 24", arquivo: "pages/products/19-ea-fc-24.html", img: "19-ea-sports-fc-24.jpg", preco: "19,90", tag: "CONTA OFFLINE" },
    { num: 20, nome: "Silent Hill Townfall", arquivo: "pages/products/20-silent-hill.html", img: "20-silent-hill-townfall.jpg", preco: "19,90", tag: "CONTA OFFLINE" },
    { num: 21, nome: "Far Cry 3", arquivo: "pages/products/21-far-cry-3.html", img: "21-far-cry-3.jpg", preco: "20,00", tag: "CONTA OFFLINE" },
    { num: 22, nome: "Cyberpunk 2077", arquivo: "pages/products/2-cyberpunk-2077.html", img: "2-cyberpunk-2077.jpg", preco: "29,90", tag: "CONTA OFFLINE" },
    { num: 23, nome: "LEGO Batman: Legacy of the Dark Knight", arquivo: "pages/products/23-lego-batman.html", img: "23-lego-batman.jpg", preco: "30,00", tag: "CONTA OFFLINE" }
  ];

  const productsGrid = document.getElementById('productsGrid');
  const searchInput = document.getElementById('searchInput');

  function renderProducts(filter = '') {
    const filtered = jogos.filter(jogo => 
      jogo.nome.toLowerCase().includes(filter.toLowerCase())
    );
    
    if (filtered.length === 0) {
      productsGrid.innerHTML = `<div class="no-results">Nenhum jogo encontrado para "${filter}"<br><br>Tente outro nome ou veja nossas ofertas!</div>`;
      return;
    }
    
    productsGrid.innerHTML = filtered.map(jogo => `
      <a href="${jogo.arquivo}" class="product-card">
        <img src="assets/images/products/${jogo.img}" alt="${jogo.nome}" class="product-image" onerror="this.src='https://placehold.co/400x300/1a1a2e/44aaff?text=${encodeURIComponent(jogo.nome)}'">
        <div class="product-info">
          <div class="product-tag">${jogo.tag}</div>
          <div class="product-title">${jogo.nome}</div>
          <div class="product-price">R$ ${jogo.preco}</div>
          <div class="product-link">Ver detalhes →</div>
        </div>
      </a>
    `).join('');
  }

  renderProducts();

  searchInput.addEventListener('input', (e) => {
    renderProducts(e.target.value);
  });
