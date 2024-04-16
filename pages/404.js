import Link from "next/link"

export default function CustomNotFound() {
  return(
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <h1>{`404 - Page not found`}</h1>
      <p>{`Better try looking somewhere else :/`}</p>
      <Link href='/'>
        <b>Let's go home.</b>
      </Link>
    </div>
  )
}