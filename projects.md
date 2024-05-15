---
layout: page
title: Projects
subtitle: What I do?
permalink: /project/
---
 
<ul class="list-posts">
    {% for project in site.projects %}
        <li class="post-teaser">
            <a href="{{ project.url | prepend: site.baseurl }}">
                <span class="post-teaser__title">{{ project.title }}</span>
                <span class="post-teaser__date">{{ project.date | date: "%d %B %Y" }}</span>
            </a>
        </li>
    {% endfor %}
</ul>

