import { SignedIn } from "@/components/auth";
import { SignedOut } from "@/components/auth";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="bg-white dark:bg-background">
      <Container>
        <div className="flex flex-col md:flex-row gap-y-14 w-full justify-between">
          <div className="">
            <Badge className="text-sm md:text-base">
              Effortless Cryptocurrency Management
            </Badge>
            <h1 className="text-5xl md:text-7xl max-w-3xl mt-10 leading-[1.2] font-semibold">
              Streamline Your Crypto Portfolio
            </h1>
            <p className="mt-5 text-gray-500 dark:text-gray-400 text-lg max-w-[600px]">
              Cryptoace is designed to simplify the management of your
              cryptocurrency assets. With an intuitive interface, you can track
              the value of your holdings in real-time. Manage all major market
              coins, integrate your wallets, and access a dedicated section for
              centralized market indicators. Empower yourself to make informed
              decisions and take control of your crypto investments today!
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-10">
              <SignedIn>
                <Button asChild>
                  <Link href={"/tools/portfolios"}>View Portfolio</Link>
                </Button>
              </SignedIn>

              <SignedOut>
                <Button asChild>
                  <Link href={"/sign-in"}>Create an Account</Link>
                </Button>
              </SignedOut>
            </div>
          </div>
          <Image
            className="rounded-xl w-[400px] h-[400px]"
            width="400"
            height="400"
            src="/hero.jpg"
            alt="hero image"
          />
        </div>
      </Container>
    </div>
  );
}
