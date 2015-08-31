export default Ember.Service.extend({
	currentUser: null,
	currentAuthToken: null,
	init: function () {
		console.log("Authentication Service Init")
	},

	login: function(username, password, onSuccess, onFailure){
		console.log("Authentication Service login");
    var _this = this;
		$.post("http://localhost:3000/login", {
      email: username,
      password: password,
    }).then(function(data) {
      console.log(data);
      if(data.status == "error"){
        onFailure()
      }else {
        onSuccess();
        _this.set("currentUser", data)
      }
    });
	}
});
