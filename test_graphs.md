# `test_graphs.md`

Mermaid has a [configurable limit] for the maximum allowed number of edges on a
graph. The purpose of this file is to allow probing of roughly what that limit
is in any given context.

In my Markdown preview in VS Code on Windows, that limit falls somewhere between
256 and 269 edges.

On GitHub, that limit is somewhere above 676 edges....

## 16 edges

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '10px', 'lineColor': '#003812', 'primaryColor': '#e8ffe0', 'primaryTextColor': '#000000', 'primaryBorderColor': '#d3f1c8'}}}%%
graph LR
  a & b & c & d --> e & f & g & h

```

## 256 edges

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '10px', 'lineColor': '#003812', 'primaryColor': '#e8ffe0', 'primaryTextColor': '#000000', 'primaryBorderColor': '#d3f1c8'}}}%%
graph LR
  a1 & b1 & c1 & d1 & e1 & f1 & g1 & h1 & i1 & j1 & k1 & l1 & m1 & n1 & o1 & p1 --> a2 & b2 & c2 & d2 & e2 & f2 & g2 & h2 & i2 & j2 & k2 & l2 & m2 & n2 & o2 & p2

```

## 289 edges

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '10px', 'lineColor': '#003812', 'primaryColor': '#e8ffe0', 'primaryTextColor': '#000000', 'primaryBorderColor': '#d3f1c8'}}}%%
graph LR
  a1 & b1 & c1 & d1 & e1 & f1 & g1 & h1 & i1 & j1 & k1 & l1 & m1 & n1 & o1 & p1 & q1 --> a2 & b2 & c2 & d2 & e2 & f2 & g2 & h2 & i2 & j2 & k2 & l2 & m2 & n2 & o2 & p2 & q2

```

## 400 edges

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '10px', 'lineColor': '#003812', 'primaryColor': '#e8ffe0', 'primaryTextColor': '#000000', 'primaryBorderColor': '#d3f1c8'}}}%%
graph LR
  a1 & b1 & c1 & d1 & e1 & f1 & g1 & h1 & i1 & j1 & k1 & l1 & m1 & n1 & o1 & p1 & q1 & r1 & s1 & t1 --> a2 & b2 & c2 & d2 & e2 & f2 & g2 & h2 & i2 & j2 & k2 & l2 & m2 & n2 & o2 & p2 & q2 & r2 & s2 & t2

```

## 529 edges

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '10px', 'lineColor': '#003812', 'primaryColor': '#e8ffe0', 'primaryTextColor': '#000000', 'primaryBorderColor': '#d3f1c8'}}}%%
graph LR
  a1 & b1 & c1 & d1 & e1 & f1 & g1 & h1 & i1 & j1 & k1 & l1 & m1 & n1 & o1 & p1 & q1 & r1 & s1 & t1 & u1 & v1 & w1 --> a2 & b2 & c2 & d2 & e2 & f2 & g2 & h2 & i2 & j2 & k2 & l2 & m2 & n2 & o2 & p2 & q2 & r2 & s2 & t2 & u2 & v2 & w2

```

## 676 edges

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '10px', 'lineColor': '#003812', 'primaryColor': '#e8ffe0', 'primaryTextColor': '#000000', 'primaryBorderColor': '#d3f1c8'}}}%%
graph LR
  a1 & b1 & c1 & d1 & e1 & f1 & g1 & h1 & i1 & j1 & k1 & l1 & m1 & n1 & o1 & p1 & q1 & r1 & s1 & t1 & u1 & v1 & w1 & x1 & y1 & z1 --> a2 & b2 & c2 & d2 & e2 & f2 & g2 & h2 & i2 & j2 & k2 & l2 & m2 & n2 & o2 & p2 & q2 & r2 & s2 & t2 & u2 & v2 & w2 & x2 & y2 & z2

```

[configurable limit]: https://github.com/mermaid-js/mermaid/pull/5086
