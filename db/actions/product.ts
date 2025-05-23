"use server"

import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants"
import { PrismaClient } from "@prisma/client"

export async function getproducts() {
    const prisma = new PrismaClient()
    const data = await prisma.product.findMany({
        orderBy: {createdAt: 'desc'},
        take : LATEST_PRODUCTS_LIMIT
    })
    return data
}