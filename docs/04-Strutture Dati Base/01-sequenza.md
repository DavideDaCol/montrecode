---
sidebar_position: 5
---

# Sequenza

La sequenza è il corrispettivo generalizzato del famosissimo Array: una struttura dati dinamica e lineare che rappresenta i propri valori secondo una sequenza crescente di identificativi, detti indici. Al contrario di altre strutture dati, l'ordine è importante ma gli elementi possono apparire più volte.

Ecco una lista di funzioni che possiamo chiamare su qualsiasi sequenza:

```cpp
// Restituisce true se la sequenza è vuota
boolean isEmpty()
// Restituisce true se p è uguale a pos0 oppure a posn+1
boolean finished(Pos p)
// Legge l’elemento di tipo Item contenuto nella posizione p
Item read(Pos p)
// Scrive l’elemento v di tipo Item nella posizione p
write(Pos p, Item v)
```

Pos è una struttura dati astratta che indica la posizione di un elemento all'interno di una sequenza; si possono anche utilizzare degli interi.

```cpp
// Restituisce la posizione del primo elemento
Pos head()
// Restituisce la posizione dell’ultimo elemento
Pos tail()
// Restituisce la posizione dell’elemento che segue p
Pos next(Pos p)
// Restituisce la posizione dell’elemento che precede p
Pos prev(Pos p)
// Inserisce l’elemento v di tipo Item nella posizione p.
// Restituisce la posizione del nuovo elemento, che diviene il predecessore di p
Pos insert(Pos p, Item v)
// Rimuove l’elemento contenuto nella posizione p.
// Restituisce la posizione del successore di p,
// che diviene successore del predecessore di p
Pos remove(Pos p)
```

Tutte queste operazioni vengono eseguite in tempo costante (O(1)).