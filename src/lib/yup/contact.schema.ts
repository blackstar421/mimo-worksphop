import { IContactForm } from "@/interfaces/form";
import { object, ObjectSchema, string } from "yup";

export const ContactFormSchema: ObjectSchema<IContactForm> = object({
  name: string().required("Champ obligatoire"),
  email: string().required("Champ obligatoire"),
  phone: string().required("Champ obligatoire"),
  subject: string().required("Champ obligatoire"),
  message: string().required("Champ obligatoire"),
});
