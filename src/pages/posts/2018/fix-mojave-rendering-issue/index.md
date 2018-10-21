---
path: "/blog/2018/fix-mojave-rendering-issue"
date: "2018-10-21"
title: "Fix Mojave Rendering Issue"
readtime: "2 mins"
---

<center>
  <img src="./fix-carbon.png" alt="Fix Mojave rendering issue" />
  <i><a href="https://carbon.now.sh">https://carbon.now.sh</a></i>
</center>

Today after updating macOS from `High Sierra` to `Mojave` in my MacBook Pro, I found out that Mojave has some render issue. Here is how to fix the issue.

### Steps to fix

- Copy this code `defaults write -g CGFontRenderingFontSmoothingDisabled -bool FALSE`.

- Open your terminal application.

- Paste the copied code.

- Logout or Restart your system.

Open the before/after screenshot below in two tabs to see the difference.

### Before

<center>
  <img src="./before-vscode.png" alt="Before fix in VS Code" />
  <i>VS Code Editor</i>
</center>

<center>
  <img src="./before-github.png" alt="Before fix in github" />
  <i>Github</i>
</center>

### After fix

<center>
  <img src="./after-vscode.png" alt="After fix in VS Code" />
  <i>VS Code Editor</i>
</center>

<center>
  <img src="./after-github.png" alt="After fix in github" />
  <i>Github</i>
</center>

#### Other issues I faced

- Git was not working due to [invalid active developer path](https://apple.stackexchange.com/questions/254380/macos-mojave-invalid-active-developer-path).

Thanks for reading!!

