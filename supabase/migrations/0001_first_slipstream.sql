CREATE TABLE IF NOT EXISTS "gf_transactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"walletId" serial NOT NULL,
	"coin" text NOT NULL,
	"amount" integer NOT NULL,
	"price" integer NOT NULL,
	"date" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "gf_wallets" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" serial NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "gf_transactions" ADD CONSTRAINT "gf_transactions_walletId_gf_wallets_id_fk" FOREIGN KEY ("walletId") REFERENCES "public"."gf_wallets"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "gf_wallets" ADD CONSTRAINT "gf_wallets_userId_gf_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."gf_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
