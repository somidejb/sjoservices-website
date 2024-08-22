import { z } from "zod";

export const bookFormSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters.').max(50, 'Name must be less than 50 characters.'),
    businessName: z.string().min(3, 'Business name must be at least 3 characters.').max(50, 'Business name must be less than 50 characters.'),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    phoneNo: z.string().array().min(2, 'At least twos images must be uploaded.').max(4, 'Maximum of 4 images can be uploaded.'),
    more: z.string().min(3, 'Category must be selected.'),
});
