'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
/*reglas
1. Si la palabra traducida tiene 10 o más letras,
se debe partir a la mitad y unir con un guión del medio
2.Si la palabra inicia con Z, se le añade "pe" al final
3.Si la palabra termina en "ar", se le quitan esos dos caracteres
4.Si la palabra original es un palíndromo,
ninguna regla anterior cuenta y se devuelve
la misma palabra intercalando mayúsculas y minúsculas
*/

function platzom(str) {
  var translation = str;

  //Si la palabra termina en "ar", se le quitan esos dos caracteres

  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  //Si la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  //1. Si la palabra traducida tiene 10 o más letras,
  //se debe partir a la mitad y unir con un guión del medio
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  //si la palabra original es un palindromo,
  //ninguna regla anterior cuenta ym se devuelve
  //la misma palabra intercalando mayuscula y miniscula

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}
