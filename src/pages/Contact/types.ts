export interface ContactFormData {
  contact_name: string;
  contact_email: string;
  contact_message: string;
}

export interface ContactFormElements extends HTMLFormControlsCollection {
  contact_name: HTMLInputElement;
  contact_email: HTMLInputElement;
  contact_message: HTMLTextAreaElement;
}

export interface ContactFormElement extends HTMLFormElement {
  elements: ContactFormElements;
}
