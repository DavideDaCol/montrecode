# Dizionario

Il dizionario è una struttura dati che rappresenta il concetto matematico di **relazione univoca** tra un identificativo e un elemento, o associazione chiave-valore. 

Lo incontreremo di nuovo nella sua implementazione più comune, ossia come Hash Table.

Ecco una lista di funzioni che possiamo chiamare su qualsiasi dizionario:

```cpp
// Restituisce il valore associato alla chiave k se presente, nil altrimenti. complessità media O(1) se hash
Item lookup(Item k)
// Associa il valore v alla chiave k
insert(Item k, Item v)
// Rimuove l’associazione della chiave k
remove(Item k)
```