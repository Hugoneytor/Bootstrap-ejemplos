export default class Employee{
    constructor(name,email,birthday){
        this._name = name.toUpperCase();
        this._email = email;
        this._birthday = birthday;
        this._months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    }

    get name(){
        return this._name;
    }
    get email(){
        return this._email;
    }
    get birthday(){
        return this._birthday;
    }

    getBirthdayAsString(){
        let date = 
        this._birthday.getDate() + '/'+ this._months[this._birthday.getMonth()] + '/' + this._birthday.getFullYear();
        return date;
        
    }
   getAge(){
       let oneDay = 24 * 60*60*1000;
       let oneYear = oneDay * 365;
       let differenceMs = new Date() - this._birthday;
       let age = Math.trunc(differenceMs / oneYear);
       return age;
    }
    /* getAge(fechaActual){
        let edad = fechaActual - this._birthday;
        console.log(`La edad de ${this._name} es de ${Math.trunc((edad)/(1000*60*60*25)/365)} años`);
    }*/
}