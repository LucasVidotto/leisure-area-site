var nrImagem = 0;
var imagens = [];
var refrescar = 1; // mudar imagem de 1 em 1 segundo

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = '<img src"/image/">';

imagens[1] = "endereço segunda imagem";
imagens[2] = "endereço terceira imagem";
//...

function rodarImagens() {
   document.images["misto"].src = imagens[nrImagem++];

   if (nrImagem >= imagens.length)
      nrImagem = 0;

   setTimeout("rodarImagens()", refrescar * 1000);  
}

rodarImagens();