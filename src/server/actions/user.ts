"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
import { db } from "@/server/db";
import { SignUpSchema } from "@/lib/schema";

export async function createUser(input: z.infer<typeof SignUpSchema>) {
  const { name, email, password } = input;

  const validatedFields = SignUpSchema.safeParse({
    name,
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const {
    data: { name: validName, email: validEmail, password: validPassword },
  } = validatedFields;

  const existingUserByEmail = await db.user.findUnique({
    where: { email: validEmail },
  });

  if (existingUserByEmail) {
    return { success: false, message: "This email is connected to a user" };
  }

  const hashedPassword = bcrypt.hashSync(validPassword, 10);

  try {
    await db.user.create({
      data: {
        name: validName,
        email: validEmail,
        password: hashedPassword,
      },
    });

    return { success: true, message: "User created successfully" };
  } catch (error) {
    console.log({ error });
    return { success: false, message: "Something went wrong" };
  }
}
