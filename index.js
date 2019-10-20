function appendStyle(css) {
  var head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");

  head.appendChild(style);

  style.type = "text/css";
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

if (typeof window !== "undefined") {
  appendStyle(
    ".no-focus-outline a:focus," +
      ".no-focus-outline button:focus {" +
      "  outline: none;" +
      "}"
  );

  var doc = document.documentElement;

  function addDocumentClass(className) {
    if ((" " + doc.className + " ").indexOf(" " + className + " ") < 0) {
      doc.className += " " + className;
    }
  }

  function removeDocumentClass(className) {
    var reg = new RegExp("(^| )" + className + "($| )", "g");
    doc.className = doc.className.replace(reg, " ");
  }

  // Listen to tab events to enable outlines (accessibility improvement)
  document.body.addEventListener("keyup", function(e) {
    if (e.which === 9) {
      /* tab */
      removeDocumentClass("no-focus-outline");
    }
  });

  addDocumentClass("no-focus-outline");
}
