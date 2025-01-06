---
sidebar_position: 3
---

# Algoritmi elementari
Questa pagina riporta alcuni algoritmi relativamente semplici che vengono utilizzati in parti di altri algoritmi più complicati.

## Minimo

Dato un array qualsiasi, trova l'elemento più piccolo al suo interno in tempo lineare.
```cpp
--------------------------------
int min(Item[ ] A, int i, int n)
--------------------------------
// Posizione del minimo parziale
int min = i
    for j = i + 1 to n do
        if A[j] < A[min] then
        // Nuovo minimo parziale
        min = j
return min
```