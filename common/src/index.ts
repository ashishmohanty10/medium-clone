import z from "zod";

//create blog
export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export type CreateBlogInput = z.infer<typeof createBlogInput>;

// update blog
export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});

export type UpdateBlogInput = z.infer<typeof updateBlogInput>;

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

// type inference in zod
export type SignupInput = z.infer<typeof signupInput>;

export const signinInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

// type inference in zod
export type SigninInput = z.infer<typeof signinInput>;
