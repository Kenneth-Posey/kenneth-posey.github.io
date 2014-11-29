---
layout: post
title: "Brief Website Technical Overview"
categories:
- about
---

<div class="entry-content" id="entry-content-text">
<p>
  <strong>Introduction</strong>
</p>
<p>
  This document is a brief overview of the construction process and technical workings of this website. In it I intend to explain the creative process behind designing the site and its requirements, and then how I fulfilled the requirements.
</p>
<p>
  <strong>Inception</strong>
</p>
<p>
  At the very beginning of my starting the design, I had decided that I wanted to meet several goals to demonstrate my knowledge of the technology at hand and display some cutting edge browser features. After a fair bit of refining, I shortened the list to these items:
</p>
<ul>
  <li>
    Have Smart Phone Friendly Design
  </li>
  <li>
    Use Touch Friendly Navigation
  </li>
  <li>
    Use a Non-Traditional Website Interface
  </li>
  <li>
    No Page Load Flash (use pushState and ajax)
  </li>
  <li>
    Incorporate "The Matrix" as a Theme
  </li>
</ul>
<p><strong>Evolution</strong></p><p>It was by sketching different ideas by hand that I decided on using a menu bar, similar to the windows taskbar, at the top of the screen, and then use a drop down interface for the site navigation. I decided on this very non-traditional design because I wanted to maximize the reading pane presented by the website for people with low resolutions, especially on smartphones and touch/tablet devices.&nbsp;</p><p>In thinking more on the touch device problem, I decided to ensure that there were no hover actions used on the website for any purpose. Hover is simply impossible to use on a typical touch device, and I don't trust browser sniffing to continue to provide a good indicator of whether the person is using a touch device, especially something like the new touch screen laptops.&nbsp;</p><p>As it happens, the interface also lends itself well to loading the content via ajax, and that gave me an excuse to implement pushState. Ajax itself is fairly straightforward and something that I've used multiple times, but using pushState encouraged me to focus on the url of my content sources more closely than I think I would have if I was using solely ajax.&nbsp;</p><p><strong>Future Plans</strong></p><ul><li>Next/Previous Article Links</li><li>Sitemap Styling</li><li>Page Footer</li><li>Optimized Digital Rain Effect</li></ul>
</div>
