function initialize (container, app) {
    app.inject('route', 'authentication', 'service:authentication');
    app.inject('controller', 'authentication', 'service:authentication');
}

export default {
    name: 'authentication',
    initialize: initialize
}