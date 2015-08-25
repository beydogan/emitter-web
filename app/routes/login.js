import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		login(){
			console.log("Login Route - Login")
			var username = this.controller.get('username')
			var password = this.controller.get('password')
			if(this.authentication.login(username, password)){
				this.transitionTo('index');
			}else{
				this.controllerFor('login').set("errorMsg", "That email/password combo didn't work.  Please try again")
			}
			
		}
	}
});
