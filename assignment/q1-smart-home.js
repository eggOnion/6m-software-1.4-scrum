/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/

// Task: Add code here

class BaseSignal {
    constructor(signalType) {

		if(new.target===BaseSignal){

		//throw new Error will prevent the code from continue running
		throw new Error('Not advisible to instantiated base class. You will get an error if using c#');
  
		//or use console.error()
		console.error(`
		Base on my understand - The base class serve as an abstract to provide common interface & behavior for 
            their subclass. It was never meant to be used.
            
            Meaning, the deriving classes must implement all the base class's members - aka variables & functions 
            that the base class contains. After that, it is then allow to have its own implementation.           
            
            In layman's term, it works like a cake mould to produce the shape of the cake. The cake is meant for
            consumption, but not the mould. After the cake is cooked, you can then add different toppings on it, but
            the shape of the cake cannot be changed.

            This is called "Polymorphism." It is one of the OOP concept.
            
            Pls correct my understanding if I'm wrong. Appreciated🙏`);  
        }
        this.type=signalType;
    }
    send() {
        console.log(`Sending ${this.type} signals`);
    }
}

class TvSignal extends BaseSignal {
    constructor() {
        // Add code here               
        super('tv');
    }
}

class AirconSignal extends BaseSignal {
    constructor() {
        // Add code here
        super('aircon');
    }
}

class DoorSignal extends BaseSignal {
    constructor() {
        // Add code here
        super('door');
    }
}

// const baseSignal = new BaseSignal();              //throw error when base class instantiated
// baseSignal.send();


const tv = new TvSignal();
tv.send(); // prints "Sending tv signal"

const door = new DoorSignal();
door.send(); // prints "Sending door signal"

const aircon = new AirconSignal();
aircon.send(); // prints "Sending aircon signal"

//Example of Referencing Online Resources    
    //1. https://www.w3schools.com/js/js_class_inheritance.asp
    //2. https://www.youtube.com/watch?v=XkiFnYSjK4A
    //3. https://www.youtube.com/watch?v=khuDeNwXkfI
    //4. https://chat.openai.com/
    //  4.1 How to prevent base class from getting instantiated in JS
    //  4.2 Why cannot instantiate base class?