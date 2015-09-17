class Foo {

  constructor(bar){
    this.bar = bar;
  }

  foobar(){
    console.log(this.bar);
  }
}

var foo = new Foo('foobar');
foo.foobar();
