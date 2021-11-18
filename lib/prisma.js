import { PrismaClient } from '@prisma/client'

const prisma = global.prisma || new PrismaClient();
if (process.send.NODE_ENV ==="development") global.prisma = prisma;

export default prisma