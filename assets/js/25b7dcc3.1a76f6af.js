"use strict";(self.webpackChunkmontrecode_docs=self.webpackChunkmontrecode_docs||[]).push([[848],{8809:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"Strutture Dati Base/sequenza","title":"Sequenza","description":"La sequenza \xe8 il corrispettivo generalizzato del famosissimo Array: una struttura dati dinamica e lineare che rappresenta i propri valori secondo una sequenza crescente di identificativi, detti indici. Al contrario di altre strutture dati, l\'ordine \xe8 importante ma gli elementi possono apparire pi\xf9 volte.","source":"@site/docs/04-Strutture Dati Base/01-sequenza.md","sourceDirName":"04-Strutture Dati Base","slug":"/Strutture Dati Base/sequenza","permalink":"/montrecode/Strutture Dati Base/sequenza","draft":false,"unlisted":false,"editUrl":"https://github.com/DavideDaCol/montrecode/tree/main/docs/04-Strutture Dati Base/01-sequenza.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Dizionario","permalink":"/montrecode/Strutture Dati Base/dizionario"},"next":{"title":"Insieme","permalink":"/montrecode/Strutture Dati Base/insieme"}}');var o=i(4848),s=i(8453);const a={sidebar_position:5},r="Sequenza",l={},c=[];function u(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"sequenza",children:"Sequenza"})}),"\n",(0,o.jsx)(t.p,{children:"La sequenza \xe8 il corrispettivo generalizzato del famosissimo Array: una struttura dati dinamica e lineare che rappresenta i propri valori secondo una sequenza crescente di identificativi, detti indici. Al contrario di altre strutture dati, l'ordine \xe8 importante ma gli elementi possono apparire pi\xf9 volte."}),"\n",(0,o.jsx)(t.p,{children:"Ecco una lista di funzioni che possiamo chiamare su qualsiasi sequenza:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"// Restituisce true se la sequenza \xe8 vuota\nboolean isEmpty()\n// Restituisce true se p \xe8 uguale a pos0 oppure a posn+1\nboolean finished(Pos p)\n// Legge l\u2019elemento di tipo Item contenuto nella posizione p\nItem read(Pos p)\n// Scrive l\u2019elemento v di tipo Item nella posizione p\nwrite(Pos p, Item v)\n"})}),"\n",(0,o.jsx)(t.p,{children:"Pos \xe8 una struttura dati astratta che indica la posizione di un elemento all'interno di una sequenza; si possono anche utilizzare degli interi."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"// Restituisce la posizione del primo elemento\nPos head()\n// Restituisce la posizione dell\u2019ultimo elemento\nPos tail()\n// Restituisce la posizione dell\u2019elemento che segue p\nPos next(Pos p)\n// Restituisce la posizione dell\u2019elemento che precede p\nPos prev(Pos p)\n// Inserisce l\u2019elemento v di tipo Item nella posizione p.\n// Restituisce la posizione del nuovo elemento, che diviene il predecessore di p\nPos insert(Pos p, Item v)\n// Rimuove l\u2019elemento contenuto nella posizione p.\n// Restituisce la posizione del successore di p,\n// che diviene successore del predecessore di p\nPos remove(Pos p)\n"})}),"\n",(0,o.jsx)(t.p,{children:"Tutte queste operazioni vengono eseguite in tempo costante (O(1))."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(6540);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);