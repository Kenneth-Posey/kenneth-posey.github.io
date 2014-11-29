---
layout: post
title:  "ASPNET Session Value Manager"
date:   2014-11-23 23:12:57
categories:
- csharp
- programming
---

<p>This is a short post, but I invented a session value manager with some interesting properties for my work in ASP.NET. I had an issue with typos in keys for the session, plus it was a pain to keep up with key names manually, so I wanted to create a manager that could manage those values through static methods with some sort of enumerated value for the keys. <br><br></p>

<p>The idea is that with the enumerated values, in this case a static list of string values in a simple static class, provides you a consistent way to refer to values that you have in your session. You create your list of available session values that you want to work with, pass that to the session manager, and then use your session manager for saving/loading those values from your session.<br><br></p>

<p>I have a simple <a href="https://gist.github.com/Kenneth-Posey/59ae57444fe075aa3768">gist</a> with the base class, an implementation for a page and example saving/loading of values. Right now I'm quite sure it supports primitives and objects that serialize to/from strings easily, and I'm looking to upgrade it to support anything the Session supports in the future. For now though, it's quite useful for easily managing complex form data across multiple postbacks.</p>
