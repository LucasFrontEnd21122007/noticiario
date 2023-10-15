const newsContainer = document.getElementById('news-container');

// Função para carregar notícias do servidor
function loadNews() {
    fetch('/api/news')
        .then(response => response.json())
        .then(data => {
            data.forEach(news => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                newsItem.innerHTML = `
                    <h2>${news.title}</h2>
                    <p>${news.content}</p>
                `;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Erro ao carregar notícias:', error));
}

loadNews();
