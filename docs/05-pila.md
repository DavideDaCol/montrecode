# Pila

La pila è una struttura dati dinamica e lineare (come la [sequenza](./04-Strutture%20Dati%20Base/01-sequenza.md)), la quale impone una regola particolare nella gestione dell'inserimento e rimozione degli elementi: l'elemento da rimuovere è sempre quello che ha percorso meno tempo all'interno dell'insieme. 

In questi casi si parla di "Politica LIFO (Last In First Out)", siccome _l'ultimo_ elemento inserito sarà il _primo_ ad essere rimosso; è il fratello della [coda](./06-coda.md).


## Operazioni

Queste le operazioni che si possono effettuare su una pila:

```cpp
// Restituisce true se la pila è vuota
boolean isEmpty()
// Inserisce v in cima alla pila
push(Item v)
// Estrae l’elemento in cima alla pila e lo restituisce al chiamante
Item pop()
// Legge l’elemento in cima alla pila
Item top()
```

## Possibile implementazione

Mostriamo una possibile implementazione di una pila basata sui vettori:

```cpp
Item[ ] A // Elementi
int n // Cursore
int m // Dim. massima

Stack Stack(int dim)
    Stack t = new Stack
    t.A = new int[1 ... dim]
    t.m = dim
    t.n = 0
    return t

Item top()
    precondition: n > 0
    return A[n]

boolean isEmpty()
    return n = 0

Item pop()
    precondition: n > 0
    Item t = A[n]
    n = n − 1
    return t

push(Item v)
    precondition: n < m
    n = n + 1
    A[n] = v
```