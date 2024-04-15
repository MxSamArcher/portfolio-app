import { useRouter } from "next/router";
import FullRepo from "@/components/FullRepo";

const RepoQuery = () => {
  const router = useRouter();
  if (!router.isReady) return null
  const urlId = router.query.id
  return (
    <>
      <FullRepo url_id={urlId}/>
    </>
  )
}

export default RepoQuery