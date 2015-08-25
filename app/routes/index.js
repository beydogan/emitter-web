export default Ember.Route.extend({
  setupController(controller, model) {
    controller.set('model', model);
    console.log("Index Route");
  }
});
