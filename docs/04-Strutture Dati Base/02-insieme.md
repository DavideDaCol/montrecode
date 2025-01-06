---
sidebar_position: 6
---

# Insieme

L'insieme è una struttura dati dinamica ma NON lineare: memorizza valori distinti **senza ammettere ripetizioni**, in modo non ordinato. L'unico ordine presente nell'insieme è l'ordinamento eventualmente fornito **dai dati stessi**.

Ecco una lista di funzioni che possiamo chiamare su qualsiasi insieme:

```cpp
Set S = new Set()
// Restituisce la cardinalità dell’insieme
int c = S.size()
// Restituisce true se x è contenuto nell’insieme
boolean contains(Item x)
// Inserisce x nell’insieme, se non già presente
S.insert(Item x)
// Rimuove x dall’insieme, se presente
S.remove(Item x)
// Restituisce un nuovo insieme che è l’unione di A e B
Set union(Set A, Set B)
// Restituisce un nuovo insieme che è l’intersezione di A e B
Set intersection(Set A, Set B)
// Restituisce un nuovo insieme che è la differenza di A e B
Set difference(Set A, Set B)
```

la complessità di queste funzioni dipende dall'implementazione utilizzata.