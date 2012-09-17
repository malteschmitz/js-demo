window.addEventListener("load", function() {
	var h1 = document.getElementsByTagName('h1')[0];
	h1.addEventListener('click', function() {
		if (h1.hasAttribute('class')) {
			h1.removeAttribute('class');
		} else {
			h1.setAttribute('class', 'alerted');
		}
	}, false);
}, false);
