import { PrismaClient } from '@prisma/client';

const createPrismaClient = () => new PrismaClient();

declare global {
  // Сохраняем PrismaClient в глобальную переменную для dev-среды
  var prismaGlobal: undefined | ReturnType<typeof createPrismaClient>;
}

export const prisma = globalThis.prismaGlobal ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}
