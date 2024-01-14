# `test_graphs.md`

Mermaid has a configurable limit for the maximum allowed number of edges on a
graph. The purpose of this file is to allow probing of roughly what that limit
is in any given context.

In my Markdown preview in VS Code on Windows, that limit falls somewhere between
256 and 269 edges.

On GitHub, that limit is somewhere between ..........?

### 16 edges

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '10px', 'lineColor': '#003812', 'primaryColor': '#e8ffe0', 'primaryTextColor': '#000000', 'primaryBorderColor': '#d3f1c8'}}}%%
graph LR
  a & b & c & d --> e & f & g & h

```

### 256 edges

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '10px', 'lineColor': '#003812', 'primaryColor': '#e8ffe0', 'primaryTextColor': '#000000', 'primaryBorderColor': '#d3f1c8'}}}%%
graph LR
  a1 & b1 & c1 & d1 & e1 & f1 & g1 & h1 & i1 & j1 & k1 & l1 & m1 & n1 & o1 & p1 --> a2 & b2 & c2 & d2 & e2 & f2 & g2 & h2 & i2 & j2 & k2 & l2 & m2 & n2 & o2 & p2

```

### 269 edges

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '10px', 'lineColor': '#003812', 'primaryColor': '#e8ffe0', 'primaryTextColor': '#000000', 'primaryBorderColor': '#d3f1c8'}}}%%
graph LR
  a1 & b1 & c1 & d1 & e1 & f1 & g1 & h1 & i1 & j1 & k1 & l1 & m1 & n1 & o1 & p1 & q1 --> a2 & b2 & c2 & d2 & e2 & f2 & g2 & h2 & i2 & j2 & k2 & l2 & m2 & n2 & o2 & p2 & q2

```
