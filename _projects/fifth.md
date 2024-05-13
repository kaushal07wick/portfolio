---
layout: post
title:  "IntelliEmacs"
subtitle: "A code-assistant for emacs lovers"
date:  2024-05-10
---


## Motivation
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/EmacsIcon.svg/1024px-EmacsIcon.svg.png" width=380 height=300>
This project was a intial try to experiment with code assistants such as <a href="https://github.com/features/copilot" style="color: darkred;">Github Copilot</a>, working with emacs editor.

It uses <a href="https://github.com/replit/ReplitLM/tree/main" style="color: darkred;">Replit-3b-v1 model</a> for code suggestions.

## Features

1. It is easily integrated with AI, and works without any extra prompting.

2. Just put the command ``` copilot ``` in the command bar.

3. It is first iteration so some latencies and error could pop up.

## Example Code. Try it out!!

{% highlight python %}
import re

pattern = '^a...s$'
test_string = 'abyss'
result = re.match(pattern, test_string)

if result:
  print("Search successful.")
else:
  print("Search unsuccessful.")	
{% endhighlight %}


## User Interface

<img src="/assets/images/demo1.gif" alt="click here" height="500px" width="600px" style="align: center;"/>

Feel free to look up the open-source code at <a href="https://github.com/kaushal07wick/Emac-Assist" style="color: darkred;">GitHub</a>
