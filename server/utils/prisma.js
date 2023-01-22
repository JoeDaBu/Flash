import { PrismaClient } from '@prisma/client';

export class PrismaInstance {
    prisma;

    constructor() {
        this.prisma = null;
    };

    createInstance = () => {
        if (!this.prisma) {
            this.prisma = new PrismaClient();
        }
    };

    getInstance = () => {
        if (!this.prisma) {
            throw new Error('No prisma instance was made.');
        }

        return this.prisma;
    };
}