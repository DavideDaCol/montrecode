# Sorting

Il problema dell'ordinamento parte da una sequenza di n valori e produce come output una nuova sequenza degli stessi valori, tale che **ogni valore sia minore o uguale al successivo**.
Nel corso, tra gli innumerevoli algoritmi esistenti, ne vengono presentati: Selection Sort, Insertion Sort e Merge Sort.

## Selection sort

Il selection sort è l'approccio più immediato al problema dell'ordinamento: consiste nel **cercare il minimo** e posizionarlo nella posizione corretta, ripetendo l'operazione per _tutti_ i valori da ordinare.

```cpp
-------------------------------
SelectionSort(Item[ ] A, int n)
-------------------------------
for i = 1 to n − 1 do
    int min = min(A, i, n)
    A[i] <=> A[min]
```

L'algoritmo ha complessità O(n^2), in quanto cercare il minimo ha costo lineare e va fatto per ogni elemento dell'array. L'implementazione della funzione min si trova negli [algoritmi elementari](./elementari.md#minimo).

## Insertion sort

Insertion sort prende un approccio leggermente diverso: partendo dal primo elemento, **sposta indietro gli elementi successivi** finchè il valore precedente non è più grande di quello spostato. 

Ripetendo questa operazione per tutto l'array otteniamo un ordinamento corretto.

```cpp
-------------------------------
InsertionSort(Item[ ] A, int n)
-------------------------------
for i = 2 to n do
    Item temp = A[i]
    int j = i
    while j > 1 and A[j − 1] > temp do
        A[j] = A[j − 1]
        j = j − 1
    A[j] = temp
```

Questo algoritmo ha sempre complessità O(n^2), ma risulta piuttosto rapido su array di dimensioni ridotte.

## Merge sort

In poche parole, merge sort si basa su una strategia risolutiva detta **divide et impera**, dove si cerca di scomporre il problema in sottoproblemi di piccola dimensione (_divide_) e di risolvere ogni sottoproblema (_impera_). 

Merge sort parte dall'array intero e lo continua a dividere in sottovettori di dimensione n/2, finchè non è più possibile fare altre divisioni; una volta fatto ciò, i vettori vengono ricomposti in modo che ogni unione (_merge_) porti ad un sottovettore ordinato, fino ad arrivare al vettore finale.

```cpp
-----------------------------------------------
Merge(Item A[ ], int start, int end , int mid )
-----------------------------------------------
int i, j, k, h
i = start
j = mid + 1
k = start
while i ≤ mid and j ≤ end do
    if A[i] ≤ A[j] then
        B[k] = A[i]
        i = i + 1
    else
        B[k] = A[j]
        j = j + 1
    k = k + 1
j = end
for h = mid downto i do
    A[j] = A[h]
    j = j − 1
for j = start to k − 1 do
    A[j] = B[j]
```

la funzione merge unisce due sottovettori in modo che il risultato finale sia ordinato; ha costo O(n).

```cpp
-----------------------------------------
MergeSort(Item A[ ], int start, int end )
-----------------------------------------
if start < end then
    int mid = floor((start + end)/2)
    MergeSort(A, start, mid)
    MergeSort(A, mid + 1, end)
    Merge(A, start, end, mid)
```

Merge sort ha una complessità O(n log n), la spiegazione di questo risultato trascende lo scopo di questa reference.