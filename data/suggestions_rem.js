(function () {
	'use strict';

	function removeSuggestions() {
		let wtfNt = document.getElementsByClassName('ProfileWTFAndTrends');

		if (wtfNt.length) {
			let wtf = wtfNt[0].getElementsByClassName('WhoToFollow')[0];
			wtfNt[0].removeChild(wtf);
		}

		let rDashboard = document.getElementsByClassName('dashboard-right');

		if (rDashboard.length) {
			let wtf = rDashboard[0].getElementsByClassName('wtf-module')[0];
			rDashboard[0].removeChild(wtf);
		}
	}

	let container = document.getElementById('page-container');

	let mutationObserver = new MutationObserver(removeSuggestions);
	let config = {
	  childList: true
	};

	mutationObserver.observe(container, config);

	removeSuggestions();
})();