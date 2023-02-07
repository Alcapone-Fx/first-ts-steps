const AutoBind = (_: any, __: string, propDescriptor: PropertyDescriptor) => {
  const originalMethod = propDescriptor.value;
  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    // is like having a value property with extra loginc that runs before the value is returned
    get() {
      // this will refer to whatever is responsible for triggering the getter method
      const boundFuntion = originalMethod.bind(this);
      return boundFuntion;
    }
  };

  return newDescriptor;
}


class Printer {
  message = 'This works!';

  @AutoBind
  showMessage () {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', printer.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]
  }
}

const registeredValidators: ValidatorConfig = {};

const Required = (target: any, propName: string) => {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required']
  }
};

const PositiveNumber = (target: any, propName: string) => {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive']
  }
};

const validate = (obj: any) => {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if(!objValidatorConfig) {
    return true;
  }

  let isValid = true;

  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid &&= Boolean(obj[prop]);
          break;
        case 'positive':
          isValid &&= obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
};

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }


}

const courseForm = document.querySelector('form')!;

courseForm.addEventListener('submit', event => {
  event.preventDefault();
  
  const titleElement = document.getElementById('title') as HTMLInputElement;
  const title = titleElement.value;
  const priceElement = document.getElementById('price') as HTMLInputElement;
  const price = Number(priceElement.value);

  const createdCourse = new Course(title, price);
  
  if(!validate(createdCourse)) {
    throw new Error('Wrong input!');
  }
  console.log(createdCourse);
});
