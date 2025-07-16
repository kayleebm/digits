import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

// ✅ Contact validation schemas

export const AddContactSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  address: Yup.string().required(),
  image: Yup.string().url().required(),
  description: Yup.string().required(),
  owner: Yup.string().required(),
});

export const EditContactSchema = Yup.object({
  id: Yup.number().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  address: Yup.string().required(),
  image: Yup.string().url().required(),
  description: Yup.string().required(),
  owner: Yup.string().required(),
});

// ✅ Add Note schema

export const AddNoteSchema = Yup.object({
  note: Yup.string().required('Note is required'),
  contactId: Yup.number().required(),
  owner: Yup.string().required(),
});

// ✅ Contact interface (still valid for both add/edit)

export interface Contact {
  id?: number; // Include id optionally for AddContact use
  firstName: string;
  lastName: string;
  address: string;
  image: string;
  description: string;
  owner: string;
}