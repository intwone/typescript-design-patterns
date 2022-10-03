abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (value !== 'string') return false;
    return /@/.test(value);
  }
}

class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'number';
  }
}

class ValidateComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }
    return true;
  }
}

// ------------

const validateEmail = new ValidateEmail();
const validateString = new ValidateString();
const validateNumber = new ValidateNumber();

const validateComposite = new ValidateComposite();
validateComposite.add(validateEmail, validateString, validateNumber);

console.log(validateComposite.validate('1@1'));
