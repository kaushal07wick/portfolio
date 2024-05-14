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
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28250%2C249%2C246%2C1%29&t=seti&wt=none&l=python&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=import%2520re%250A%250Apattern%2520%253D%2520%27%255Ea...s%2524%27%250Atest_string%2520%253D%2520%27abyss%27%250Aresult%2520%253D%2520re.match%28pattern%252C%2520test_string%29%250A%250Aif%2520result%253A%250A%2520%2520print%28%2522Search%2520successful.%2522%29%250Aelse%253A%250A%2520%2520print%28%2522Search%2520unsuccessful.%2522%29%2509"
  style="width: 479px; height: 426px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>


## User Interface

<img src="/assets/images/demo1.gif" alt="click here" height="500px" width="600px" style="align: center;"/>

Feel free to look up the open-source code at <a href="https://github.com/kaushal07wick/Emac-Assist" style="color: darkred;">GitHub</a>
