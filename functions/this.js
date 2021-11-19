const person = {
   name: 'John'
};

function talk(){
  return `Hello ${this.name}`
}

const copy = talk.bind(person);
console.log(copy());

function request(lang, isPolite){
    if(isPolite){
      if(lang === 'en'){
        return `Hello, my name is ${this.name}`
      }
      else if(lang === 'md'){
        return `Salut, ma numesc ${this.name}`
      }
    }

    if(!isPolite){
      if(lang === 'en'){
        return `${this.name}, wtf u want?`
      }
      if(lang === 'md'){
        return `Sii? Eu? ${this.name}. Si vrei?`
      }
    }
}

const req = request.call(person, 'en', false);
console.log(req);

const req2 = request.apply(person, ['en', true]);
console.log(req2);
