import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Krafted</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center h-screen font-sans bg-white">
        <div className="grid w-full max-w-xl grid-cols-1 gap-6 px-8">
          <header className="flex items-center space-x-5 text-6xl font-extrabold">
            <a href="/" className="flex items-center justify-center w-24 h-24 transition duration-200 ease-in-out transform shadow-xl rounded-2xl focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-white focus:ring-gray-900 hover:-translate-y-1 focus:translate-y-0 bg-gradient-to-br from-gray-600 to-gray-900 hover:hover:from-gray-500 hover:to-gray-800">
              <svg className="w-16" viewBox="0 0 1460 1319" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </a>
          </header>
          <section className="space-y-3">
            <h2 className="text-3xl font-medium text-gray-800">An independent development studio focused on crafting quality experiences.</h2>
          </section>
          <section>
            <a
              className="inline-flex items-center justify-center px-8 py-2.5 font-medium text-white transition duration-200 ease-in-out transform rounded-lg shadow-lg bg-gradient-to-br from-gray-600 to-gray-900 focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-white focus:ring-gray-900 hover:-translate-y-1 focus:translate-y-0 hover:from-gray-500 hover:to-gray-800"
              href="mailto:hi@krafted.dev"
            >
              <span className="mt-0.5 text-lg">
                Let's talk
              </span>
            </a>
          </section>
        </div>
      </main>
    </>
  )
}
