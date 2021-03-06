---
layout: post
title:  "Choosing Hosting at PythonAnywhere"
date:   2014-11-23 23:12:57
categories:
- programming
published: false
---

<p>I use <a href="https://www.pythonanywhere.com/">PythonAnywhere</a>&nbsp;for my host, for a variety of reasons that I will briefly outline.&nbsp;</p><p>I knew from the start of working on my site that I wanted it to be written in python behind the scenes. I enjoy using python and I feel like wordpress is overused almost to the point of being cliche for getting websites working in a hurry. I decided then to go with one of python's industry standard CMS frameworks, namely <a href="https://www.djangoproject.com/">Django</a>, and then I installed <a href="http://django-blog-zinnia.com/">Zinnia</a>&nbsp;for the blog management.&nbsp;</p><p>My first instinct for the host was to go to <a href="http://www.namecheap.com/">NameCheap</a>, as they're my current domain registrar since I switched from Godaddy, due to Godaddy's incompetent customer service. Unfortunately, in spite of some hours of fruitless hacking, namecheap doesn't support the kind of changes that I wanted to make to my hosting for my website.&nbsp;</p><p>Further digging led me to PythonAnywhere, which I initially decided to choose because of their great built-in web based python IDE. At the time I was considering working on my blog engine at my university, and being able to work from the same interface at different locations was a great selling point.&nbsp;</p><p>In addition to the IDE, they allow online shell access for easily configuring your environment, so I was able to set up everything I needed to be able to. In addition, with the shell I update my website directly from my SVN repository, so I can rollback easily if needed.&nbsp;</p><p>Now I have django and zinnia installed in a properly separated virtual environment, and they really work wonderfully together. I will later document the installation process for PythonAnywhere specifically.</p>
