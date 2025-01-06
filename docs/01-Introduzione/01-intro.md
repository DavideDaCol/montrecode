---
sidebar_position: 1
---

# Introduzione

Benvenuto! questo sito raccoglie le principali informazioni da sapere per poter sfruttare al meglio lo pseudocodice usato dal professor Alberto Montresor (da cui _MontreCode_) nel suo corso di **Algoritmi e Strutture Dati** presso l'Università di Trento.

Partiamo dalle basi e diamo un'occhiata alle **istruzioni elementari**.

## Le basi dello pseudocodice

Prendiamo un semplice algoritmo proposto dal prof: quello per la ricerca dell'elemento in un vettore. Questo algoritmo controlla se per ogni indice del vettore il valore in memoria è uguale a quello cercato; se i valori corrispondono restituisce la posizione attualmente considerata, altrimenti viene restituito zero. Viene implementato così:

```cpp
int lookup(int[] S, int n, int v)

for i = 1 to n do
    if S[i] == v then
        return i
return 0
```

La prima parte di questo blocco di codice è la firma della funzione, dove vanno esplicitate 3 cose:
    - il **tipo di ritorno** della funzione (es calcolo una somma tra interi, dovrò restituire un intero: tipo int)
    - il **nome** della funzione
    - la **lista dei parametri** della funzione, anche loro con il loro tipo e identificativo

La seconda parte contiene le istruzioni vere e proprie, divise in:
    - istruzioni **elementari** (assignment, operazioni logiche, operazioni algebriche...)
    - istruzioni **condizionali** (if, if-else...)
    - **cicli** (for, while, do-while...)

Queste istruzioni verranno affrontate nel dettaglio nella [prossima sezione](./02-istruzioni.md).