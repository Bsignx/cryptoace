import { database } from "@/db";
import { wallets, transactions } from "@/db/schema";
import { UserId } from "@/use-cases/types";
import { and, eq } from "drizzle-orm";

export async function getTransactionsByWalletId(walletId: number) {
  return await database.query.transactions.findMany({
    where: eq(wallets.id, walletId),
  });
}

export async function getTransactionById(transactionId: number) {
  return await database.query.transactions.findFirst({
    where: eq(wallets.id, transactionId),
  });
}

export async function getTransactionsByUserId(userId: UserId) {
  return await database.query.transactions.findMany({
    where: eq(wallets.userId, userId),
  });
}

export async function getTransactionsByCoinNameAndWalletIdAndUserId(
  coinName: string,
  walletId: UserId,
  userId: UserId
) {
  return await database.query.transactions.findMany({
    where: and(
      eq(transactions.coin, coinName),
      eq(transactions.walletId, walletId),
      eq(wallets.userId, userId)
    ),
  });
}
