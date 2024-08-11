import CJInovicesLogo from '@/app/ui/cjinvoices-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <CJInovicesLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-black md:text-3xl md:leading-normal`}>
            <strong>Welcome to CJ Invoices.</strong> This is my first project that manages customer invoices.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-center mt-8 rounded-lg bg-blue-500 px-8 py-4 text-xl font-medium text-white transition-colors hover:bg-blue-400 md:text-2xl"
          >
            <span>Log in</span> <ArrowRightIcon className="w-8 md:w-12 stroke-[1.5px] md:stroke-[2.5px]" />
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-black md:text-3xl md:leading-normal text-center`}>
            <strong>Tech Stack</strong><br/><br/>
          </p>
            <ul className="grid grid-cols-2 gap-x-4 list-disc list-inside text-xl md:text-2xl text-gray-800">
              <li>NextJS</li>
              <li>CSS Tailwind</li>
              <li>SQL</li>
              <li>Vercel</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Java</li>
            </ul>
        </div>
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal text-center`}>
            <strong>Login Details</strong><br/><br/>
            Email - user@nextmail.com 
            Password - 123456
          </p>
        </div>
      </div>
    </main>
  );
}
