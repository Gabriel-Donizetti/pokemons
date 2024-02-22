import {z} from "zod"

export const userSchema = z.object({
    name: z.string({required_error: "Name is required",invalid_type_error: "Name must be a string",}),
    type: z.string({required_error: "Type is required",invalid_type_error: "Type must be a string",}),
})