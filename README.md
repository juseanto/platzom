# platzom

platzom es un idioma inventado para el curso de funademnto de javascript de [platzi](https://platzi.com/js)

## Descripcion del idioma
-Si la palabra traducida tiene 10 o más letras,
se debe partir a la mitad y unir con un guión del medio
-Si la palabra inicia con Z, se le añade "pe" al final
-Si la palabra termina en "ar", se le quitan esos dos caracteres
-Si la palabra original es un palíndromo,ninguna regla anterior cuenta y se devuelve
la misma palabra intercalando mayúsculas y minúsculas

## Instalacion


'''
npm install platzom
'''

## uso

'''
import platzom from 'platzom'

platzom("programar")//program
platzom("zorro")//zorrope
platzom("zarpar")//zarppe
platzom("abecedario")
platzom("sometemos")
'''

## creditos
- juan angarita

## Licensia
[MIT](https://opensource.org/licenses/MIT)
