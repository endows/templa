Post = new Meteor.Collection('posts')

class App extends BlazeComponent {
  posts() {
    return Post.find().fetch().reverse()
  }

}

App.register('App');
