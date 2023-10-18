import { useAuthContext } from "@/features/auth/context/auth_context";
import { HomeLoggedIn } from "./home_logged_in";
import { HomeLoggedOut } from "./home_logged_out";

export function HomePage() {
  const { loggedIn } = useAuthContext();
  return <>{loggedIn ? <HomeLoggedIn /> : <HomeLoggedOut />}</>;
}
