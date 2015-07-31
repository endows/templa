class Templa extends BlazeComponent {
  onCreated() {
    this.template = 'で、でた〜 $ 奴〜'
    this.body = new ReactiveVar('bb');
  }

  content() {
    return this.template.replace('$',this.body.get())
  }

  onChange(e) {
    console.log(e.target.value)
    this.body.set(e.target.value)
  }

  events() {
    return [{
      'keyup input': this.onChange
    }];
  }

}

Templa.register('Templa');
