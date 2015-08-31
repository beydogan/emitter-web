import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		login(){
			console.log("Login Route - Login")
			var username = this.controller.get('username')
			var password = this.controller.get('password')
      var _this = this
			this.authentication.login(username, password, function() {
        _this.transitionTo('index');
      }, function(){
        _this.controllerFor('login').set("errorMsg", "That email/password combo didn't work.  Please try again")
      })
		}
	}
});
