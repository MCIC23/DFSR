""" 

nombres =["Paola","Carlos", "Mario"]


print(nombres[1])

nombres[0] = "Elizabeth"

nombres.insert(7, "Juan")
nombres.append("Pedro")

print(nombres)

nombres.remove("Juan")

nombres.pop(1)
print(nombres)

#Creando una lista 
#Acceciendo y pintando un elemento qcon x posicion  en la lista
#Cambiando una posicion en la lista
#Agregar  un elemnento a  la lista

#Loops
#For
#While
#Do-While
#ForEach

for x in nombres:
    print(x)

  #  nombres.pop(1)
    print(nombres)

for y in range(len(nombres)):

    print(nombres[y])

    print(len(nombres))

    
i = 0

while i < len(nombres):
    print(nombres[i])
    i=i+1 """


nombres =["Paola","Carlos", "Mario"]

alfabetico =sorted(nombres.copy())
keys= sorted(nombres.copy(), key=len)
reversas = sorted(nombres.copy(), reverse=True)

print(alfabetico)
print(keys)
print(reversas)



""" nombres.sort()
print(nombres)


nombres.sort(key=len)
print(nombres)

nombres.sort(reverse=True)
print(nombres)

nombres.sort(key=len, reverse=True)
print(nombres) """