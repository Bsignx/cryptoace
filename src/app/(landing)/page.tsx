import { ComingSoon } from "@/app/(coming-soon)/coming-soon";
import { HeroSection } from "@/app/(landing)/_sections/hero";
import { PricingSection } from "@/app/(landing)/_sections/pricing";

import { appConfig } from "@/app-config";
import { getUserPlanUseCase } from "@/use-cases/subscriptions";
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  if (appConfig.mode === "comingSoon") {
    return <ComingSoon />;
  }

  if (appConfig.mode === "maintence") {
    return (
      <div>
        <h1>Maintence</h1>
      </div>
    );
  }

  if (appConfig.mode === "live") {
    const user = await getCurrentUser();
    const hasSubscription = user
      ? (await getUserPlanUseCase(user.id)) !== "free"
      : false;

    return (
      <div>
        <HeroSection />
        <PricingSection hasSubscription={hasSubscription} />
      </div>
    );
  }
}
