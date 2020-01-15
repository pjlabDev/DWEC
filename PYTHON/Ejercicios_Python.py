import math
#from math import sqrt
import random #Se puede poner tambien así
#from random import randint
'''
#Ejercicio 1
#Escribir un programa que pregunte al usuario su nombre, y luego lo salude.
nombre = input("¿Cual es tu nombre? ")
print("Hola",nombre)



#Ejercicio 2
#Calcular el perímetro y área de un rectángulo dada su base y su altura.
base = 20
altura = 10
area = base*altura
perimetro = base+altura//2
print("Perimetro:",perimetro)
print("Area:",area)



#Ejercicio 3
#Dados los catetos de un triángulo rectángulo, calcular su hipotenusa.
c1 = 10
c2 = 20
hipotenusa = math.sqrt(math.pow(c1,2) + math.pow(c2,2))
print("Hipotenusa: %.2f " % hipotenusa)



#Eejercicio 4
#Dados dos números, mostrar la suma, resta, división y multiplicación de ambos.
numa = 2
numb = 3
print((2+3),(2-3),(2*3),(2//3))



#Ejercicio 5
#Escribir un programa que convierta un valor dado en grados Fahrenheit a grados Celsius. Recordar que la fórmula para la conversión es: 
F = 50
C = (F-32)*5/9
print(C)



#Ejercicio 6
#Calcular la media de tres números pedidos por teclado.
numa = int(input("Primer numero:"))
numb = int(input("Segundo numero:"))
numc = int(input("Tercer numero:"))
media = (numa+numb+numc)//3
print(media)



#Ejercicio 7
#Realiza un programa que reciba una cantidad de minutos y muestre por pantalla a cuantas horas y minutos corresponde.
#Por ejemplo: 1000 minutos son 16 horas y 40 minutos.
minutos = int(input("Introduce los minutos:"))
horas = int(minutos/60)
minutosaux = (minutos-(horas*60))
print("Horas:",horas,"Minutos:",minutosaux)



#Ejercicio 10
#Un alumno desea saber cual será su calificación final en la materia de Algoritmos. Dicha calificación se compone de los siguientes porcentajes:

  # 55% del promedio de sus tres calificaciones parciales.
  # 30% de la calificación del examen final.
  # 15% de la calificación de un trabajo final.

a = float(input("Nota 1:"))
b = float(input("Nota 2:"))
c = float(input("Nota 3:"))
examen = float(input("Nota Examen:"))
trabajo = float(input("Nota trabajo:"))

nota = ((((a+b+c)/3)*0.55) + (examen*0.3) + (trabajo*0.15))
  
print("La nota del alumno es:",nota)



#Ejercicio 15
#Dadas dos variables numéricas A y B, que el usuario debe teclear, se pide realizar un algoritmo que intercambie los valores de ambas variables y muestre cuanto valen al final las dos variables.

a = int(input("Numero:"))
b = int(input("Numero2:"))
c = a
a = b
b = c
print(a,b)


#Ejercicio 17
#Un ciclista parte de una ciudad A a las HH horas, MM minutos y SS segundos. El tiempo de viaje hasta llegar a otra ciudad B es de T segundos. Escribir un algoritmo que determine la hora de llegada a la ciudad B.

hora = int(input("H de salida:"))
minuto = int(input("M de salida:"))
segundo = int(input("S de salida:"))
tllegada = int(input("S de llegada:"))

segundoinicial = hora*3600 + minuto*60 + segundo
segundofinal = segundoinicial + tllegada 

horallegada = segundofinal//3600
minutollegada = (segundofinal % 3600) // 60
segundollegada = (segundofinal % 3600) % 60

print("La hora de llegada es:",horallegada,":",minutollegada,":",segundollegada)



#Ejercicio 18
#Pedir el nombre y los dos apellidos de una persona y mostrar las iniciales.
nombre = input("Nombre:")
apellido1 = input("Apellido1:")
apellido2 = input("Apellido2:")

inicial = nombre[0].upper()
inicial += apellido1[0].upper()
inicial += apellido2[0].upper()

print(inicial)



#Ejercicio 19
#Programa que pide una nota de un examen por teclado y muestra la nota como “Sobresaliente”, “Notable”, “Bien”, “Suficiente”, “Suspendido”. En pseudocódigo podemos usar la instrucción Segun:

numero = int(input("Numero:"))

if numero<4:
	print("Suspendido")
elif numero == 5:
	print("Suficiente")
elif numero == 6:
	print("Bien")
elif numero>=7 and numero<=8:
	print("Notable")
elif numero>=9 and numero<=10:
	print("Sobresaliente")
else:
	print("No existe esa nota")



#Ejercicio 20
#Algoritmo que pida un número y diga si es positivo, negativo o 0.

numero = int(input("Numero:")

if numero == 0:
	print("Es un cero")
elif numero>0:
	print("Numero positivo")
else:
	print("Numero negativo")



#Ejercicio 21
#Escribe un programa que pida un nombre de usuario y una contraseña y si se ha introducido “pepe” y “asdasd” se indica “Has entrado al sistema”, sino se da un error.

usuario = input("Nombre:")
password = input("Pass:")

if usuario == 'pepe' and password == 'asdasd':
	print("Bienvenido",usuario)
else:
	print("Usuario o contraseña incorrectos")



#Ejercicio 22
#Algoritmo que pida tres números y los muestre ordenados (de mayor a menor);
a = int(input("Numero 1:"))
b = int(input("Numero 2:"))
c = int(input("Numero 3:"))

if a>b and a>c:
	if b>c:
		print(a,b,c)
	else:
		print(a,c,b)
elif b>a and b>c:
	if a>c:
		print(b,a,c)
	else:
		print(b,c,a)
elif c>a and c>b:
	if a>b:
		print(c,a,b)
	else:
		print(c,b,a)
		


#Ejercicio 23
#Escribe un programa que pida una fecha (día, mes y año) y diga si es correcta.
dia = int(input("Introduce el dia:"))
mes = int(input("Introduce el mes:"))
year = int(input("Introduce el año:"))

if mes == 1 or mes == 3 or mes == 5 or mes == 7 or mes == 8 or mes == 10 or mes == 12:
	dias_del_mes = 31;
elif mes == 4 or mes == 6 or mes == 9 or mes == 11:
	dias_del_mes = 30;
elif mes == 2:
	if (year % 4 == 0 and not (year % 100 == 0)) or year % 400 == 0:
		dias_del_mes = 29;
	else:
		dias_del_mes = 28;
else:
	print("Fecha incorrecta")
	
if dia < 0 or dia > dias_del_mes:
	print("Fecha incorrecta")
else:
	print("Fecha correcta")



#Ejercicio 24
#Crea un programa que pida al usuario una contraseña, de forma repetitiva mientras que no introduzca “asdasd”. Cuando finalmente escriba la contraseña correcta, se le dirá “Bienvenido” y terminará el programa.

contra = input("Contraseña:")
clave = "asdasd"

while contra != clave:
	print("Clave incorrecta")
	contra = input("Contraseña:")
print("Bienvenido")



#Ejercicio 25
#Contador, saca impares.

cont = 0

while cont<10:
	cont += 1
	if cont % 2 == 0:
		continue
	print(cont)

'''

#Repetitivas
'''
for var in range(1,11):
	print(var," ",end="")

print("")
	
for var in range(10,0,-1):
	print(var," ",end="")

print("")
	
for var in range(2,11,2):
	print(var," ",end="")


	
cont = 0
for var in range(1,11):
	num = int(input("Numero:"))
	if num % 2 == 0:
		cont+=1
print("Has introducido",cont,"numeros pares")


resultado = 1;
contador = 2;
num = int(input("Numero:"))

while contador <= num:
	resultado = resultado * contador
	contador += 1
print("El resultado es:",resultado)

print("---------")

resultado = 1
num = int(input("Numero:"))

for var in range(2,num+1):
	resultado = resultado * var
print("El resultado es:",resultado)



#Ejercicio 25
#Algoritmo que pida números hasta que se introduzca un cero. Debe imprimir la suma y la media de todos los números introducidos.

suma = 0
cont = 0
num = int(input("0 para salir,Numero:"))
while num != 0:
	cont += 1
	suma += num
	num = int(input("0 para salir, Numero:"))
media = int(suma/cont)
print("La suma de todos los numeros es:",suma)
print("La media de la suma de todos los numeros es:",media)



#Ejercicio 26
#Realizar una algoritmo que muestre la tabla de multiplicar de un número introducido por teclado.

num = int(input("Numero:"))
resultado = 0

for var in range(1,11):
	resultado = var*num
	print(var,"x",num,"=",resultado)

	

#Ejercicio 27
#Algoritmo que muestre la tabla de multiplicar de los números 1,2,3,4 y 5.

for tabla in range(1,6):
	for num in range(1,11):
		print("%d * %d = %d" %(tabla,num,tabla*num))



#Ejercicio 28
#Escribe un programa que diga si un número introducido por teclado es o no primo. Un número primo es aquel que sólo es divisible entre él mismo y la unidad. Nota: Es suficiente probar hasta la raíz cuadrada del número para ver si es divisible por algún otro número.

es_primo = True
num = int(input("Introduce numero:"))

for var in range(2,num):
	if num % var == 0:
		es_primo = False
		break
if es_primo:
	print("Es primo")
else:
	print("No es primo")



#Ejercicios cadenas

#Ejercicio 2
#Realizar un programa que comprueba si una cadena leída por teclado comienza por una subcadena introducida por teclado.

cadena1 = input("Introduce cadena")
cadena2 = input("Introduce 2 cadena")

if cadena1.startswith(cadena2):
	print("La cadena 1 empieza por la cadena 2")
else:
	print("No empieza")



#Ejercicio 3
#Pide una cadena y un carácter por teclado (valida que sea un carácter) y muestra cuantas veces aparece el carácter en la cadena.

cad = input("Introduce una cadena")

car = input("Introduce un caracter")

if len(car) > 1:
	print("Eso no es un caracter")
else:
	print("En la cadena",cad,"se repite el caracter",car,cad.count(car),"veces")



#Ejercicio 4
#Suponiendo que hemos introducido una cadena por teclado que representa una frase (palabras separadas por espacios), realiza un programa que cuente cuantas palabras tiene.

cont = 0
posicion = 0
cadena = input("Introduce cadena: ")
cadena.strip()

posicion = cadena.find(" ",posicion)

while posicion != -1:
	cont += 1
	while cadena[posicion + 1] == " ":
		posicion += 1
	posicion = cadena.find(" ",posicion + 1)
print("La frase tiene",cont,"palabras")



#Ejercicio 9
#Realizar un programa que compruebe si una cadena contiene una subcadena. Las dos cadenas se introducen por teclado.

cad1 = input("Introduce cadena: ")
cad2 = input("Introduce cadena2: ")

if cad2 in cad1:
	print("La cadena 1 contiene la cadena 2")
else:
	print("No contiene")



#Tuplas

#Ejercicio 1
#Realizar un programa que inicialice una lista con 10 valores aleatorios (del 1 al 10) y posteriormente muestre en pantalla cada elemento de la lista junto con su cuadrado y su cubo.

lista = []

for var in range(1,11):
	lista.append(random.randint(1,10))

for numero in lista:
	print(numero,numero ** 2, numero ** 3)



#Ejercicio 3
#Se quiere realizar un programa que lea por teclado las 5 notas obtenidas por un alumno (comprendidas entre 0 y 10). A continuación debe mostrar todas las notas, la nota media, la nota más alta que ha sacado y la menor.

lista = []

for var in range(1,6):
	num = int(input("Introduce numero: "))
	lista.append(num)
print("Notas:",lista,"\n","Media de las notas:",(sum(lista)/len(lista)),"\n","Nota maxima",max(lista),"\n","Nota minima:",min(lista))



#Ejercicio 10
#Diseñar el algoritmo correspondiente a un programa, que:

    #Crea una tabla (lista con dos dimensiones) de 5x5 enteros.
    #Carga la tabla con valores numéricos enteros.
    #Suma todos los elementos de cada fila y todos los elementos de cada columna visualizando los resultados en pantalla.

tabla = []

for num in range(1,6):
	fila = []
	for num2 in range(1,6):
		fila.append(int(input("Introduce el numero de fila %d y columna %d" % (num,num2))))
	tabla.append(fila)

indice_fila = 1
for fila in tabla:
	print("La suma de los elementos de la fila %d son %d" % (indice_fila,sum(fila)))
	indice_fila += 1

for indice_col in range(1,6):
	suma = 0
	for fila in tabla:
		suma += fila[indice_col-1]
	print("La suma de la columna %d es %d" % (indice_col,suma))



#Diccionarios

#Ejercicio 2
#Escribe un programa que lea una cadena y devuelva un diccionario con la cantidad de apariciones de cada carácter en la cadena. 

dict = {}
cadena = input("Introduce una cadena")

for caracter in cadena:
	if caracter in dict:
		dict[caracter]+=1
	else:
		dict[caracter]=1
for clave,valor in dict.items():
	print(clave, valor)


#Excepciones

#Ejemplo

while True:
	try:
		x = int(input("Introduce numero: "))
		break
	except ValueError:
		print("Debes introducir un numero")



#Funciones

#Ejercicio 2
#Crea un programa que pida dos número enteros al usuario y diga si alguno de ellos es múltiplo del otro. Crea una función EsMultiplo que reciba los dos números, y devuelve si el primero es múltiplo del segundo.

def esMultiplo(num1, num2):
	if num1 % num2 == 0:
		return True
	else:
		return False

numero1 = int(input("Introduce numero1: "))
numero2 = int(input("Introduce numero2: "))
if esMultiplo(numero1,numero2):
	print("El numero %d es multiplo del numero %d" % (numero1,numero2))
else:
	print("El numero %d no es multiplo del numero %d" % (numero1,numero2))
	
#Ejercicio3

def calcularMaxMin(lista):
	
	return (max(lista),min(lista))

lista = [1,5,2,3,8,2]
	
max,min = calcularMaxMin(lista)

print(max,min)

'''



















