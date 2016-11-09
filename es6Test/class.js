/**
 * Des
 * Created by luowei5 on 2016/8/30.
 * E-mail luowei5@jd.com
 * Update 2016/8/30
 */
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    showName(){
        console.log(`name: ${this.name}`);
    }
    showAge(){
        console.log(`age: ${this.age}`);
    }
}

var p1 = new Person('lemonleo', 18);

p1.showName();

class NewPerson extends Person{
    constructor(x, y, sex, job){
        super(x, y);

        this.sex = sex;
        this.job = job;
    }

    showSex(){
        console.log(`我是NewPerson sex: ${this.sex} name: ${this.name}`);
    }
    showName(){
        console.log(`job: ${this.job}`);
        super.showName(`name: ${this.name}`);
    }
}

let p2 = new NewPerson('newLemonleo', '20', 'boy', '前端工程师');
//p2.showName();
//console.log(p2);
p2.showSex();

class Foo{
    constructor (){}

    static classMethod(){
        console.log(`这是一个静态方法，可以直接调用，不需要实例化~`);
    }

    static testName = {
        a: '类的静态属性还只是ES7的一个草案'
    }
}

Foo.classMethod();
console.log(Foo.testName);

class Bar extends Foo {
    static classMethod(){
        super.classMethod();
        console.log(`继承了父级的静态方法~`);
    }
}

Bar.classMethod();

const MyClass = class Me{
    getClassName(){
        return Me.name;
    }
};

let inst = new MyClass();

console.log(inst.getClassName());

let runNow = new class {
    constructor (say){
        this.say = say;
    }

    sayName(){
        console.log(this.say);
    }
}('立即执行!');

runNow.sayName();


class Shape{
    constructor (x, y){
        if (new.target == Shape){
            throw new Error(`本类不能实例化~！`);
        }

        console.log(x, y);
    }
}

class Angle extends Shape {
    constructor (x, y){
        super(x, y);
    }
}

//var x = new Shape(2);
var y = new Angle(4, 6);