---
published: false

---
---
layout: default
title: In The Media
description: "Ned Presnall talks to the press about addiction and mental health."
permalink: /Theoretical_Foundations/
---

  <header class="blog-header --page-header">
      <h1 class="blog-title">{{ page.title }}</h1>
      <h2 class="blog-description">{{ page.description }}</h2>
  </header>

<main class="content" role="main">


  <div class="cf frame">
    {% for post in site.data.media %}
     <h2>{{ post.title }}</h2>

     <div class="flex-video">
  <iframe width="420" height="315" src="https://www.youtube.com/embed/{{post.id}}" frameborder="0" allowfullscreen></iframe>
</div>
          
     <!-- <amp-youtube data-videoid="{{post.id}}" layout="responsive" width="480" height="270"></amp-youtube> -->
    {% endfor %}
  </div>



</main>

{% include footer.html %}