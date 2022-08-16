export interface errorInput {
  name?: string;
  price?: number;
  description?: string;
  image?: string;
}

const validateForm = (input: any) => {
  let errors: any = {};

  if (input.name.length < 6) {
    errors.name = "El nombre debe tener entre 6 y 30 caracteres.";
  } else if (input.name.length > 30) {
    errors.name = "El nombre debe tener entre 6 y 30 caracteres.";
  }
  if (input.price == 0) {
    errors.price = "Por favor, ingrese un precio.";
  }
  if (input.description.length < 10) {
    errors.description = "La descripción debe tener entre 10 y 300 caracteres.";
  }
  if (input.description.length > 300) {
    errors.description = "La descripción debe tener entre 10 y 300 caracteres.";
  }
  if (input.image == /(.jpg|.jpeg|.png|.gif)$/i) {
    errors.image = "La imagen debe tener un formato válido.";
  } else if (input.image === "") {
    errors.image = "La imagen no puede estar vacía.";
  }

  return errors;
};

export { validateForm };
