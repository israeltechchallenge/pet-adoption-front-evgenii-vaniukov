import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CTA } from "../components/cta_section";
// test
export function HomeLoggedIn() {
  return (
    <div className="bg-white">
      <Navbar />
      <CTA />
      <Footer />
    </div>
  );
}
