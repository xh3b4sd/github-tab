chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading

    // This code represents the actual behavior to put the focus to the right
    // button when hitting the tab key.
    document.addEventListener("keydown", function(event) {
      if (event.code == "Tab" && event.path[0].nodeName == "TEXTAREA") {

        for (var i = 0; i < event.path.length; i++) {
          var className = event.path[i].className;
          if (className == "js-inline-comment-form") {
            var commentForm = event.path[i];

            for (var j = 0; j < commentForm.elements.length; j++) {
              var className = commentForm.elements[j].className;
              if (className == "btn review-simple-reply-button") {
                var button = commentForm.elements[j]
                setTimeout(function() { button.focus(); }, 10);
                return;
              }
            }
          }
        }
      }
    })
		// ----------------------------------------------------------

	}
	}, 10);
});
