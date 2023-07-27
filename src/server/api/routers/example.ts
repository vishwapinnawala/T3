import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    
    .query(async function ({ input }) {
      const users = await prisma.$queryRaw`SELECT * FROM User`; 
      console.log("Running uery")
      console.table(users)
      
      return users
      //{greeting: `Hello ${input.text}`,};
    }),
    /*
  getAll: publicProcedure.query(function ({ ctx }) {
    return ctx.prisma.example.findMany();
  }),*/
});
