// This is a JavaScript file
function retorno(){

}
// Funcion para camera
$(document).on("click","#camera",function(){
    navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation:true,
    saveToPhotoAlbum:false,
    
  });

  function onSuccess(imageURI) {
      var image = document.getElementById('imagem');
      image.src = imageURI;
  }

  function onFail(message) {
      navigator.notification.alert('Erro ao capturar imagem: ' + message);
  }
});

// Functions de filtro
$(document).on("change","#opacidade",function(){
  // Salva o valor range na variavel
  var x = document.getElementById("opacidade").value;
  // Aplica o filtro
  document.getElementById("imagem").style.filter = "opacity("+x+"%)";
})

$(document).on("change","#saturacao",function(){
  var x = document.getElementById("saturacao").value;
  document.getElementById("imagem").style.filter = "saturate("+x+"%)";
})

$(document).on("change","#cinzaa",function(){
  var x = document.getElementById("cinzaa").value;
  document.getElementById("imagem").style.filter = "grayscale("+x+"%)";
})

$(document).on("change","#desfoque",function(){
  // Salva o valor range na variavel
  var x = document.getElementById("desfoque").value;
  // Aplica o filtro
  document.getElementById("imagem").style.filter = "blur("+x+"px)";
})
function teste () {
   document.getElementById("imagem").style.filter = "hue-rotate(90deg)";
}
function cinza () {
   document.getElementById("imagem").style.filter = "sepia(100%)";
}
function verde () {
  document.getElementById("imagem").style.filter = "contrast(200%) brightness(150%)";
}

