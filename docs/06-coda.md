# Coda

La coda è una struttura dati dinamica e lineare (come la [sequenza](./04-Strutture%20Dati%20Base/01-sequenza.md)), la quale impone una regola particolare nella gestione dell'inserimento e rimozione degli elementi: l'elemento da rimuovere è sempre quello che ha percorso il maggior tempo all'interno dell'insieme. 

In questi casi si parla di "Politica FIFO (First In First Out)", siccome _il primo_ elemento inserito sarà il _primo_ ad essere rimosso; è il fratello della [pila](./05-pila.md).

## Operazioni

Queste le operazioni che si possono effettuare su una pila:

```cpp
// Restituisce true se la coda è vuota
boolean isEmpty()
// Inserisce v in fondo alla coda
enqueue(Item v)
// Estrae l’elemento in testa alla coda e lo restituisce al chiamante
Item dequeue()
// Legge l’elemento in testa alla coda
Item top()
```

## Possibile implementazione

Mostriamo una possibile implementazione di una coda basata sui vettori circolari:

```cpp
Item[ ] A // Elementi
int n // Dim. attuale
int testa // Testa
int m // Dim. massima
Queue Queue(int dim)
    Queue t = new Queue
    t.A = new int[0 . . . dim − 1]
    t.m = dim
    t.testa = 0
    t.n = 0
    return t

Item top()
    precondition: n > 0
    return A[testa]

boolean isEmpty()
    return n = 0

Item dequeue()
    precondition: n > 0
    Item t = A[testa]
    testa = (testa + 1) mod m
    n = n − 1
    return t
enqueue(Item v)
    precondition: n < m
    A[(testa + n) mod m] = v
    n = n + 1
```