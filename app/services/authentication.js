export default Ember.Service.extend({
	currentUser: null,
	currentAuthToken: null,
	init: function () {
		console.log("Authentication Service Init")
	},

	login: function(username, password){
		console.log("Authentication Service login");
		var status = false;
		$.post("http://localhost:3000/login", {
	      email: username,
	      password: password,
	    }).then(function(data) {
	      	
	    });
	}
});