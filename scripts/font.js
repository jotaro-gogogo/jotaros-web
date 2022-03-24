const uAgent = detect.parse(navigator.userAgent);
if(uAgent.os.family === 'iOS' || uAgent.os.family === 'Mac OS X')
  document.body.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Helvetica Neue'";
else if(uAgent.os.family === "Android" || uAgent.os.family === "Chrome OS")
  document.body.style.fontFamily = "Roboto";
else if(uAgent.os.family === "Windows 10")
  document.body.style.fontFamily = " 'Segoe UI' ";
else
  document.body.style.fontFamily = "Arial, Helvetica, sans-serif";