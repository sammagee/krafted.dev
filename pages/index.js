import Head from 'next/head'
import Link from 'next/link'
import { toggleTheme } from '../utils/theme'

export default function Home() {
  return (
    <>
      <Head>
        <title>Krafted</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className="flex items-center justify-center min-h-screen">
        <div className="grid w-full max-w-xl grid-cols-1 gap-6 px-8">
          <header className="space-y-5 md:space-y-0 md:space-x-5 md:flex md:items-start">
            <button
              aria-label="Toggle Dark Mode"
              className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition duration-200 ease-in-out transform bg-gray-900 shadow-xl hover:bg-gray-800 rounded-2xl focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-white focus:ring-blue-500 hover:-translate-y-1 focus:translate-y-0 dark:focus:ring-offset-black"
              onClick={toggleTheme}
            >
              <svg className="w-8" viewBox="0 0 1460 1319" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <circle cx="412" cy="907" r="412" fill="#FACC16"/>
                  <circle cx="412" cy="907" r="412" fill="url(#paint0_linear)"/>
                  <path d="M252 335.5C459 281 610 339 698.5 387C795.5 175 938.5 147.5 1075 175V116C1075 51.935 1023.07 0 959 0H368C303.935 0 252 51.935 252 116V335.5Z" fill="#C4C4C4"/>
                  <path d="M252 335.5C459 281 610 339 698.5 387C795.5 175 938.5 147.5 1075 175V116C1075 51.935 1023.07 0 959 0H368C303.935 0 252 51.935 252 116V335.5Z" fill="#EE4444"/>
                  <path d="M252 335.5C459 281 610 339 698.5 387C795.5 175 938.5 147.5 1075 175V116C1075 51.935 1023.07 0 959 0H368C303.935 0 252 51.935 252 116V335.5Z" fill="url(#paint1_linear)"/>
                  <path d="M1443.24 997.724L1098.57 404.512C1053.86 327.572 942.749 327.541 898.002 404.456L842.5 499.858C842.5 499.858 1108.57 740.23 943.215 1172H1342.98C1432.42 1172 1488.17 1075.06 1443.24 997.724Z" fill="#3B82F6"/>
                  <path d="M1443.24 997.724L1098.57 404.512C1053.86 327.572 942.749 327.541 898.002 404.456L842.5 499.858C842.5 499.858 1108.57 740.23 943.215 1172H1342.98C1432.42 1172 1488.17 1075.06 1443.24 997.724Z" fill="url(#paint2_linear)"/>
                </g>
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="495" x2="824" y2="1319" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F3E582"/>
                    <stop offset="1" stopColor="#F97217"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="252" y1="0" x2="330.877" y2="839.326" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ED4897"/>
                    <stop offset="1" stopColor="#F43F5F"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear" x1="842.5" y1="232" x2="1777.91" y2="752.616" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3ABBF8"/>
                    <stop offset="1" stopColor="#6367F1"/>
                  </linearGradient>
                  <clipPath id="clip0">
                    <rect width="1460" height="1319" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </button>

            <section>
              <h2 className="text-3xl font-medium text-gray-800 dark:text-gray-200">
                Independent development studio focused on crafting quality experiences.
              </h2>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                We create software ranging from mobile apps to websites that focus on helping you get things done.
              </p>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Feel free to drop a line if you or your team has an idea that needs to be built.
              </p>

              <div className="flex items-center mt-5 space-x-5">
                <a
                  className="inline-flex items-center justify-center px-8 py-2.5 font-medium text-white transition duration-200 ease-in-out transform rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-white focus:ring-blue-500 hover:-translate-y-1 focus:translate-y-0 bg-gray-900 hover:bg-gray-800 dark:focus:ring-offset-black"
                  href="mailto:hi@krafted.dev"
                >
                  <span className="mt-0.5 text-lg">
                    Let's talk
                  </span>
                </a>

                <a
                  href="//sammagee.me/work"
                  className="text-gray-800 transition duration-200 ease-in-out transform border-b-2 border-gray-300 focus:outline-none hover:-translate-y-1 hover:border-gray-400 focus:border-gray-400 focus:translate-y-0"
                >
                  Check out our work
                </a>
              </div>
            </section>
          </header>
        </div>
      </main>
    </>
  )
}
