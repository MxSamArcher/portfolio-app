import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LandingPage from "./welcome";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/welcome')
  },[])
  return (
    <div>
      <LandingPage />
    </div>
  );
}