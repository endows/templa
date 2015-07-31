class Templa extends BlazeComponent {
  onCreated() {
    this.template = this.data().template
    this.body = new ReactiveVar('◯◯◯◯');
  }

  content() {
    return this.template.replace('$',this.body.get())
  }

  onChange(e) {
    console.log(e.target.value)
    this.body.set(e.target.value)
  }

  onSubmit(e){
    e.preventDefault();
    Post.insert({content:this.template.replace('$',this.body.get())})
    e.target[0].value = ''
    this.body.set('◯◯◯◯')
  }

  events() {
    return [{
      'keyup input': this.onChange,
      'submit form': this.onSubmit
    }];
  }

}

Templa.register('Templa');
