var Backbone = require('backbone');
var $ = require('jquery');
Backbone.LocalStorage = require("backbone.localstorage");
Backbone.$ = $;
var Handlebars = require('handlebars');
/** templates **/
var form = require('./views/form.hbs');
var formTemplate = Handlebars.compile(form);

/**
Miners
**/
var Miner = require('./src/js/Miner.js');
var MinerCollection = require('./src/js/collections/MinerCollection.js');
var MinerView = require('./src/js/views/MinerView.js');

var AppView = Backbone.View.extend({
  initialize: function () {
    var a =  new Miner ({'id': 3, 'name':'Pluto','model': 'blade', 'group':'Solar','hashRate':'6 G/HS','powerUsage': 6});
    var b =  new Miner ({'id': 4, 'name':'Mars', 'model': 'blade','group':'Solar','hashRate':'6 G/HS','powerUsage': 6});

    var aView = new MinerView({model:a});
    var bView = new MinerView({model:b});
    var Servers = new MinerCollection.Miners();
    Servers.add(a);
    Servers.add(b);
     $("#miners").append(aView.render().el);
     $("#miners").append(bView.render().el);
  },
});


var AppRouter = new (Backbone.Router.extend({
  initialize: function () {
    var App = new AppView();
  },
  routes: {
    "index":      "",
    "miner/:id":  "edit",
    "new":        "new",
    "miner/:id/status": "status"
  },
  index: function() {
    //$("#miners").append(aView.render().el);
  },
  events: {
  "click td": "edit"
  },
  edit: function(id) {
    console.log(id);
    $(".panel-body").html(formTemplate(id));
  },
  new: function() {
    console.log("clicked");
    $("#appbody").html(formTemplate({}));
  },
  status: function() {
  },
  start: function(){
    Backbone.history.start();//{pushState: true}
  }
}))();


$(function(){
  AppRouter.start();
});
