import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-cornerstone bg-cover bg-no-repeat bg-center min-h-screen">
      <div className="px-4 flex justify-center items-center min-h-screen">
        <div className="bg-white py-8 px-6 rounded-lg max-w-[550px]">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image width={80} height={80} src="/logo.png" alt="Eventify logo" />
            <p className="uppercase text-[1.2rem] text-blue">
              Cornerstone <br></br><span className="font-extrabold">Events</span>
            </p>
          </div>
          <div className="text-darkGray">
            <p>
              Discover the best events in Vancouver with Cornerstone Connect, your
              all-access pass to life on and off campus, exclusive for our students.
              Stay engaged, make new friends, and find exciting things to do in your free time.
            </p>
            <p className="mt-6">
              Use the&nbsp;
              <strong>same email registered on Classe365&nbsp;</strong>
              to create your account and take advantage of these amazing events!
            </p>
          </div>
          <div className='text-white flex justify-center gap-4 mt-6'>
            <Link href="/login" className='bg-darkBlue py-2 px-4 rounded-md hover:opacity-70'>Sign Up</Link>
            <Link href="" className='bg-darkBlue py-2 px-4 rounded-md hover:opacity-70'>See Events</Link>
          </div>
        </div>
      </div>
    </div>  
  );
}
