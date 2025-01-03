"use strict";(self.webpackChunkmontrecode_docs=self.webpackChunkmontrecode_docs||[]).push([[580],{3563:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"Introduzione/istruzioni","title":"Le istruzioni","description":"Guardiamo i 3 tipi principali di istruzione in pseudocodice:","source":"@site/docs/Introduzione/istruzioni.md","sourceDirName":"Introduzione","slug":"/Introduzione/istruzioni","permalink":"/montrecode/Introduzione/istruzioni","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Introduzione/istruzioni.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduzione","permalink":"/montrecode/Introduzione/intro"},"next":{"title":"Algoritmi elementari","permalink":"/montrecode/elementari"}}');var a=n(4848),r=n(8453);const l={sidebar_position:2},t="Le istruzioni",s={},c=[{value:"Istruzioni elementari",id:"istruzioni-elementari",level:2},{value:"Dichiarazione e inizializzazione",id:"dichiarazione-e-inizializzazione",level:3},{value:"Assignment",id:"assignment",level:4},{value:"Operazioni logico-aritmetiche",id:"operazioni-logico-aritmetiche",level:3},{value:"Istruzioni condizionali",id:"istruzioni-condizionali",level:2},{value:"Cicli",id:"cicli",level:2},{value:"Cicli while",id:"cicli-while",level:3},{value:"Cicli for",id:"cicli-for",level:3}];function d(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...i.components},{Details:n}=e;return n||function(i,e){throw new Error("Expected "+(e?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"le-istruzioni",children:"Le istruzioni"})}),"\n",(0,a.jsx)(e.p,{children:"Guardiamo i 3 tipi principali di istruzione in pseudocodice:"}),"\n",(0,a.jsx)(e.h2,{id:"istruzioni-elementari",children:"Istruzioni elementari"}),"\n",(0,a.jsx)(e.h3,{id:"dichiarazione-e-inizializzazione",children:"Dichiarazione e inizializzazione"}),"\n",(0,a.jsx)(e.p,{children:"per dichiarare una variabile \xe8 sufficiente associare il suo tipo all'identificativo. Una variabile pu\xf2 essere di tipo:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["semplice, che include:","\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"int"}),"\n",(0,a.jsx)(e.li,{children:"float"}),"\n",(0,a.jsx)(e.li,{children:"boolean"}),"\n",(0,a.jsx)(e.li,{children:"altri tipi base presenti nei linguaggi pi\xf9 utilizzati"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.li,{children:"composto, quindi definito dall'utente e contenente uno o pi\xf9 tipi base"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"I vettori vengono dichiarati specificando il tipo di dati contenuti e la lunghezza."}),"\n",(0,a.jsx)(e.p,{children:"Un esempio:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"int a\nint b = 5\nint c = b //inizializza c con il valore di b\nfloat d = 4.72\nboolean isTrue = true\nint[] A = new int[1..n] // array di interi di lunghezza n indicizzato a 1\nfloat[][] B = new float[0..n][0..m] // matrice di float di area nm indicizzata a 0\n"})}),"\n",(0,a.jsx)(e.h4,{id:"assignment",children:"Assignment"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"a = b"})," assegna un valore (costante o non) ad una variabile."]}),"\n",(0,a.jsxs)(e.p,{children:["i valori possono essere ",(0,a.jsx)(e.strong,{children:"scambiati"})," con la sintassi ",(0,a.jsx)(e.code,{children:"a <=> b"}),": questo assegna il valore di b alla variabile a ",(0,a.jsx)(e.strong,{children:"e viceversa"}),"."]}),"\n",(0,a.jsx)(e.h3,{id:"operazioni-logico-aritmetiche",children:"Operazioni logico-aritmetiche"}),"\n",(0,a.jsxs)(e.p,{children:["pseudo codice permette l'utilizzo dei ",(0,a.jsx)(e.strong,{children:"3 operatori logici fondamentali"})," (AND,OR,NOT) mediante le keyword esplicite (letteralmente and, or e not). l'operatore NOT pu\xf2 anche essere indicato ponendo un punto esclamativo ",(0,a.jsx)(e.em,{children:"di fronte"})," all'espressione da negare."]}),"\n",(0,a.jsx)(e.p,{children:"Qualche esempio:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"boolean a = true\nboolean b = false\na and b // false\na or b // true\nnot a // false\n!b // true\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Sono presenti anche operatori di ",(0,a.jsx)(e.strong,{children:"uguaglianza"})," e ",(0,a.jsx)(e.strong,{children:"disuguaglianza"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"int a = 5\nint b = 6\na == 5 // true\nb == a // false\na != b // true\na >= b // false\na < b // true\n"})}),"\n",(0,a.jsxs)(e.p,{children:["pseudocodice permette anche l'utilizzo di ",(0,a.jsx)(e.strong,{children:"qualsiasi operatore matematico elementare"}),": addizione, sottrazione, moltiplicazione, divisione, logaritmo, esponenziazione... possono anche essere utilizzati gli indicatori di intero inferiore e superiore, (|_ x _|, |\xaf x \xaf|)"]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Nota importante!"}),(0,a.jsxs)(e.p,{children:["gli estremi superiori e inferiori saranno rappresentati dalla funzione ",(0,a.jsx)(e.strong,{children:"floor() e ceil()"})," in questa reference, in quanto non vengono renderizzati in markdown. il codice \xe8 comunque funzionalmente lo stesso: floor restituisce l'intero inferiore del suo argomento e ceil l'intero superiore."]})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"int a = 7 + 9 - 7 * 2 // a = 2\nint b = floor(5.67) // b = 5\nint c = ceil(9.21) // c = 10\nint d = floor(b/a) // d = 2\nint e = log(4) // e = 2, la base 2 \xe8 sottointesa se non presente\nint f = e^2 // f = 4 \n"})}),"\n",(0,a.jsx)(e.h2,{id:"istruzioni-condizionali",children:"Istruzioni condizionali"}),"\n",(0,a.jsxs)(e.p,{children:["le istruzioni condizionali si incentrano sul paradigma if-then-else comune in qualsiasi linguaggio di programmazione. oltre alla solita struttura, \xe8 presente anche ",(0,a.jsx)(e.strong,{children:"l'operatore ternario"}),": prende come argomento la condizione, il valore assegnato se la condizione \xe8 vera e quello da assegnare se la condizione \xe8 falsa"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"boolean test = true\nint a = 2\nint b\nif test then\n|   b = 3 \nelse \n|   b = 4 \n// b = 3\nc = iif(!test, 5, 6) //operatore ternario, c = 6\n"})}),"\n",(0,a.jsx)(e.h2,{id:"cicli",children:"Cicli"}),"\n",(0,a.jsx)(e.h3,{id:"cicli-while",children:"Cicli while"}),"\n",(0,a.jsx)(e.p,{children:"come da nome, i cicli while vengono eseguiti finch\xe8 la condizione fornita rimane vera."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"int a = 1\nwhile a < 5 do\n|   a = a + 1\n// a fine ciclo a = 5\n"})}),"\n",(0,a.jsxs)(e.p,{children:["una possibile variazione \xe8 il ciclo do-while, che esegue le istruzioni del ciclo ",(0,a.jsx)(e.em,{children:"prima"})," di verificare lo stato della condizione da rispettare."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"int a = 1\ndo\n|   a = a + 1\nwhile a < 1\n// a fine ciclo a = 2\n"})}),"\n",(0,a.jsx)(e.h3,{id:"cicli-for",children:"Cicli for"}),"\n",(0,a.jsxs)(e.p,{children:["i cicli for sono leggermente diversi dalle implementazioni nei linguaggi di programmazione: non necessitano di esplicitare l'istruzione da eseguire al termine di ogni iterazione poich\xe8 viene gi\xe0 indicata dalla keyword ",(0,a.jsx)(e.strong,{children:"to"})," (somma di 1 all'indice) o ",(0,a.jsx)(e.strong,{children:"downto"})," (sottrazione di 1 all'indice)."]}),"\n",(0,a.jsxs)(e.p,{children:["Esiste anche il ",(0,a.jsx)(e.strong,{children:"foreach"}),", il quale opera su ogni elemento all'interno di una struttura dati uno per volta"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"int a = 0\nfor i = 1 to 5 do a++ // a fine ciclo a = 5\nfor i = 3 downto 1 do a-- // a fine ciclo a = 2\nint[] A = new int [1..5]\nforeach int i in A do\n|   i = a\n|   a++\n// a fine ciclo A = [2,3,4,5,6]\n"})})]})}function u(i={}){const{wrapper:e}={...(0,r.R)(),...i.components};return e?(0,a.jsx)(e,{...i,children:(0,a.jsx)(d,{...i})}):d(i)}},8453:(i,e,n)=>{n.d(e,{R:()=>l,x:()=>t});var o=n(6540);const a={},r=o.createContext(a);function l(i){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function t(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(a):i.components||a:l(i.components),o.createElement(r.Provider,{value:e},i.children)}}}]);