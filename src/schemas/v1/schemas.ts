import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

const AddressSchema = z.object({
  city: z.string(),
  street: z.string(),
  block: z.string()
});
export type AddressSchema = z.infer<typeof AddressSchema>;

export const RequestSchema = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
  address: AddressSchema
}).openapi('CreateUserRequest');

export const ResponseSchema = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
}).openapi('CreateUserResponse');

export type CreateUserRequestSchema = z.infer<typeof RequestSchema>;
export type CreateUserResponseSchema = z.infer<typeof ResponseSchema>;
