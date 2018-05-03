/*reglas
1. Si la palabra traducida tiene 10 o más letras,
se debe partir a la mitad y unir con un guión del medio
2.Si la palabra inicia con Z, se le añade "pe" al final
3.Si la palabra termina en "ar", se le quitan esos dos caracteres
4.Si la palabra original es un palíndromo,
ninguna regla anterior cuenta y se devuelve
la misma palabra intercalando mayúsculas y minúsculas
*/

export default function platzom(str){
  let translation = str

  //Si la palabra termina en "ar", se le quitan esos dos caracteres

  if (str.toLowerCase().endsWith('ar')){
    translation = str.slice(0, -2)
  }

  //Si la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')){
    translation += 'pe'
  }

  //1. Si la palabra traducida tiene 10 o más letras,
  //se debe partir a la mitad y unir con un guión del medio
   var length = translation.length
  if(length >= 10){
    const firstHalf = translation.slice(0, Math.round(length/2))
    const secondHalf = translation.slice(Math.round(length/2))
    translation = `${firstHalf}-${secondHalf}`
  }

  //si la palabra original es un palindromo,
  //ninguna regla anterior cuenta ym se devuelve
  //la misma palabra intercalando mayuscula y miniscula

  const reverse = (str) => str.split('').reverse().join('')

  function minMay(str){
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0;i<length;i++){
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }

  if(str == reverse(str)){
    return minMay(str)
  }

  return translation
}
