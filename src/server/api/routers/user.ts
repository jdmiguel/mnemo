import { z } from "zod";
import { hash } from "bcrypt";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        password: z.string().min(8),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { name, email, password } = input;
      const existingUserByEmail = await ctx.db.user.findUnique({
        where: { email },
      });

      if (existingUserByEmail) {
        throw new TRPCError({ code: "CONFLICT" });
      }

      const hashedPassword = await hash(password, 10);

      await ctx.db.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      return { success: true };
    }),
});
