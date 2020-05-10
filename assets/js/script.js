$(function (){
  // On ajoute l'evenement mouseover à notre element ID "img1 pour qu au passage de la souris l'evenement puisse se produire
  $('.button_2').click(function(){
    // Au moment ou j active cet evenement .click , refaire un tag element Id "TEXT"
    $('#text').css('color', 'red');
    // en css evenement (.css) afin que la couleur change au click
  })
});


$(function (){
  // On ajoute l'evenement mouseover à notre element ID "img1 pour qu au passage de la souris l'evenement puisse se produire
  $('.button_1').click(function(){
    // Au moment ou j active cet evenement .click , refaire un tag element Id "TEXT"
    $('#text').css('color', 'black');
    // en css evenement (.css) afin que la couleur change au click
  })
});
