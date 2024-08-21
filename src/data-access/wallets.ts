import { database } from "@/db";
import { wallets } from "@/db/schema";
import { UserId } from "@/use-cases/types";
import { and, eq } from "drizzle-orm";

export async function getWalletsByUserId(userId: UserId) {
  return await database.query.wallets.findMany({
    where: eq(wallets.userId, userId),
  });
}

export async function getWalletById(walletId: number) {
  return await database.query.wallets.findFirst({
    where: eq(wallets.id, walletId),
  });
}
