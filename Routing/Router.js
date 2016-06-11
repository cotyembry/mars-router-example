//hash_callback will be a varying length array with the
//even index's will be the 'hash' value and the odd index's
//will be the callback for when/if that particular
//hash is navigated to
var hash_callback = [];

var Router = {
	hashStore: [],
	sayHello: function() { console.log('hello') },

	hashChange: function() {
		console.log('navigating to', window.location.hash);
		switch(window.location.hash) {
			case '#/one': 
				document.getElementById('page').src = 'one.html';
				break;

			case '#/two':
				console.log('#/two');
				document.getElementById('page').src = 'two.html';
				break;

			case '#/three':
				document.getElementById('page').src = 'three.html';
				break;

			case '#/four':
				document.getElementById('page').src = 'four.html';
				break;

			case '#/five':
				document.getElementById('page').src = 'five.html';
				break;

			case '#/six':
				document.getElementById('page').src = 'six.html';
				break;

			case '#/seven':
				document.getElementById('page').src = 'seven.html';
				break;

			default: 
				document.getElementById('page').src = 'PAGENOTFOUND.html';
		}
	},

	registerRoutes: function(hash_callback) {
		for(var i = 0; i < hash_callback.length; i += 2) {
			Router.hashStore[hash_callback[i]] = hash_callback[i+1];
		}
	}
}

module.exports = Router;

