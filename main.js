fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@franciscofoz')
  .then(response => response.json())
  .then(data => {
    if (data.items && data.items.length > 0) {
      const items = data.items;


      const publicacoes = [];


      for (let i = 0; i < 3; i++) {
        const item = items[i];

        const imgUrlRegex = /<img[^>]+src="([^">]+)"/;
        const imgUrlMatch = item.description.match(imgUrlRegex);

        // Adiciona os dados da publicação ao array
        publicacoes.push({
          tituloTexto: item.title,
          linkTexto: item.link,
          linkImagem: imgUrlMatch[1]
        });
      }

      // Percorre o array de publicações e atribui os valores aos elementos HTML
      for (let i = 0; i < publicacoes.length; i++) {
        const publicacao = publicacoes[i];

        document.getElementById(`titulo_texto_${i+1}`).innerHTML = publicacao.tituloTexto;
        document.getElementById(`link_texto_${i+1}`).href = publicacao.linkTexto;
        document.getElementById(`link_imagem_${i+1}`).src = publicacao.linkImagem;
      }
    }
  });


