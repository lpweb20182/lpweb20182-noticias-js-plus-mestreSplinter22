var noticias = [];

function atualizarLista(noticia) {
    var lista = document.getElementById('noticias-recentes-list');
    var li = document.createElement('li');
    li.setAttribute('id', 'noticia-' + noticia.id);
    li.setAttribute('class', 'noticia');
    li.innerHTML = '<p class="titulo" onclick="mostrarNoticia(' + noticia.id + ')">'
        + noticia.titulo
        +'<br>'
        +'Autor:'
        +noticia.autor
        +'<br>'
        +'Data de Publicação:'
        +noticia.dtPublicacao
        + '</p>'
        + '<p class="conteudo">'
        + noticia.conteudo
        + '<br>'
        + '<span>------------------</span>'
        + '<br>'
        + '<button onclick="ocultarNoticia(' + noticia.id + ')">Fechar</button>';
    + '</p>';

    lista.appendChild(li);



}

function salvar(form) {
    var titulo = document.getElementById('frm-titulo').value;
    var autor = document.getElementById('frm-autor').value;
    var email = document.getElementById('frm-email').value;
    var dtPublicacao = document.getElementById('frm-dtPublicacao').value;
    var conteudo = document.getElementById('frm-conteudo').value;
    var noticia = {
        id: noticias.length,
        titulo: titulo,
        autor: autor,
        email: email,
        dtPublicacao : dtPublicacao ,
        conteudo: conteudo
    };
    var dtAtual = new Date();
    // dtAtual =  dtAtual.setSeconds(0);
    // dtAtual =  dtAtual.setMilliseconds(0);

    var dataPublicacao = new Date(dtPublicacao);

    console.log(dtAtual);
    if(dtAtual <= dataPublicacao){
        alert('Erro ao cadastrar Noticia!!' +
            'Data incopativel');
    }
    else {
        alert('Noticia cadastrada com sucesso');
        noticias.push(noticia);


    }
    if(dtPublicacao === "") {
        alert('Não foi possivel publicar');

    }
    else {
        atualizarLista(noticia);
    }
    form.reset();
    console.log(noticia);
}

function mostrarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') === 'conteudo') {
            node.setAttribute('style', 'display:inline');
        }
    }
}

function ocultarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:none');
        }
    }
}
