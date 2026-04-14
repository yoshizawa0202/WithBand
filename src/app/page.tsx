import { getCurrentUser } from "@/app/auth";
import { HomeClient } from "@/app/home-client";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return <HomeClient currentUser={currentUser} />;
}