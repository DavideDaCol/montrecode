---
sidebar_position: 2
---
# Le istruzioni

Guardiamo i 3 tipi principali di istruzione in pseudocodice:

## Istruzioni elementari

### Dichiarazione e inizializzazione

per dichiarare una variabile è sufficiente associare il suo tipo all'identificativo. Una variabile può essere di tipo:
    - semplice, che include:
        - int
        - float
        - boolean
        - altri tipi base presenti nei linguaggi più utilizzati
    - composto, quindi definito dall'utente e contenente uno o più tipi base

I vettori vengono dichiarati specificando il tipo di dati contenuti e la lunghezza.

Un esempio:

```cpp
int a
int b = 5
int c = b //inizializza c con il valore di b
float d = 4.72
boolean isTrue = true
int[] A = new int[1..n] // array di interi di lunghezza n indicizzato a 1
float[][] B = new float[0..n][0..m] // matrice di float di area nm indicizzata a 0
```

#### Assignment

`a = b` assegna un valore (costante o non) ad una variabile. 

i valori possono essere **scambiati** con la sintassi `a <=> b`: questo assegna il valore di b alla variabile a **e viceversa**. 

### Operazioni logico-aritmetiche

pseudo codice permette l'utilizzo dei **3 operatori logici fondamentali** (AND,OR,NOT) mediante le keyword esplicite (letteralmente and, or e not). l'operatore NOT può anche essere indicato ponendo un punto esclamativo _di fronte_ all'espressione da negare.

Qualche esempio:

```cpp
boolean a = true
boolean b = false
a and b // false
a or b // true
not a // false
!b // true
```

Sono presenti anche operatori di **uguaglianza** e **disuguaglianza**:

```cpp
int a = 5
int b = 6
a == 5 // true
b == a // false
a != b // true
a >= b // false
a < b // true
```

pseudocodice permette anche l'utilizzo di **qualsiasi operatore matematico elementare**: addizione, sottrazione, moltiplicazione, divisione, logaritmo, esponenziazione... possono anche essere utilizzati gli indicatori di intero inferiore e superiore, (|_ x _|, |¯ x ¯|)

<details>
    <summary>Nota importante!</summary>

    gli estremi superiori e inferiori saranno rappresentati dalla funzione **floor() e ceil()** in questa reference, in quanto non vengono renderizzati in markdown. il codice è comunque funzionalmente lo stesso: floor restituisce l'intero inferiore del suo argomento e ceil l'intero superiore. 
</details>

```cpp
int a = 7 + 9 - 7 * 2 // a = 2
int b = floor(5.67) // b = 5
int c = ceil(9.21) // c = 10
int d = floor(b/a) // d = 2
int e = log(4) // e = 2, la base 2 è sottointesa se non presente
int f = e^2 // f = 4 
```

## Istruzioni condizionali

le istruzioni condizionali si incentrano sul paradigma if-then-else comune in qualsiasi linguaggio di programmazione. oltre alla solita struttura, è presente anche **l'operatore ternario**: prende come argomento la condizione, il valore assegnato se la condizione è vera e quello da assegnare se la condizione è falsa

```cpp
boolean test = true
int a = 2
int b
if test then
|   b = 3 
else 
|   b = 4 
// b = 3
c = iif(!test, 5, 6) //operatore ternario, c = 6
```

## Cicli

### Cicli while

come da nome, i cicli while vengono eseguiti finchè la condizione fornita rimane vera.

```cpp
int a = 1
while a < 5 do
|   a = a + 1
// a fine ciclo a = 5
```

una possibile variazione è il ciclo do-while, che esegue le istruzioni del ciclo _prima_ di verificare lo stato della condizione da rispettare.

```cpp
int a = 1
do
|   a = a + 1
while a < 1
// a fine ciclo a = 2
```

### Cicli for
i cicli for sono leggermente diversi dalle implementazioni nei linguaggi di programmazione: non necessitano di esplicitare l'istruzione da eseguire al termine di ogni iterazione poichè viene già indicata dalla keyword **to** (somma di 1 all'indice) o **downto** (sottrazione di 1 all'indice).

Esiste anche il **foreach**, il quale opera su ogni elemento all'interno di una struttura dati uno per volta

```cpp
int a = 0
for i = 1 to 5 do a++ // a fine ciclo a = 5
for i = 3 downto 1 do a-- // a fine ciclo a = 2
int[] A = new int [1..5]
foreach int i in A do
|   i = a
|   a++
// a fine ciclo A = [2,3,4,5,6]
```