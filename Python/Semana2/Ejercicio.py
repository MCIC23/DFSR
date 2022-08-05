##Copiar la listra de nomnres que esta dentro del archivo

from re import I


nombres =["Paola","Carlos","Mario","Israel","Manuel","Luis","Guille","David"]

##Barrer lal ista y validar por cada elemento, en la posicion donde se encuentra  su nombre deberan imprimir
##lo siguiente

##Nombre
##Posicion(numerica)donde se encuentra

##Para lo anterior, deberan de utilizar lo siguiente

#Look para barrer la lista
##Auxiliar
##Validar (IF)comparando si la posicion actual tiene su nombre(if=)
##En caso de entrar eb la validacion, imprimen su nombre y su posicion

i = 0

while i < len(nombres):
     if "Manuel" == nombres[i]:
        print(nombres[i])
        print(i)
        break
     
     print(i)
     i=i+1

k= 0
while "Elizabeth" != nombres[k]:
      print(k)
      k=k+1
print(nombres[k])
print(k)

# j=0
# for x in nombres:

#     if "Mario"== x:
#         print(x)
#         print(j)
#     print(j)
#     j=j+1

