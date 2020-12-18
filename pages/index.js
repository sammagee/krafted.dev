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
            <div className="flex items-center justify-center w-24 h-24 shadow-xl rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900">
              <svg className="w-16 mt-1 ml-1" viewBox="0 0 1544 1319" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="412" cy="907" r="412" fill="#FACC16"/>
                <circle cx="412" cy="907" r="412" fill="url(#paint0_linear)"/>
                <path d="M252 335.5C459 281 610 339 698.5 387C795.5 175 938.5 147.5 1075 175V116C1075 51.935 1023.07 0 959 0H368C303.935 0 252 51.935 252 116V335.5Z" fill="#C4C4C4"/>
                <path d="M252 335.5C459 281 610 339 698.5 387C795.5 175 938.5 147.5 1075 175V116C1075 51.935 1023.07 0 959 0H368C303.935 0 252 51.935 252 116V335.5Z" fill="#EE4444"/>
                <path d="M252 335.5C459 281 610 339 698.5 387C795.5 175 938.5 147.5 1075 175V116C1075 51.935 1023.07 0 959 0H368C303.935 0 252 51.935 252 116V335.5Z" fill="url(#paint1_linear)"/>
                <path d="M1443.08 997.84L1099.3 404.59C1054.63 327.495 943.32 327.464 898.602 404.534L843.5 499.5C843.5 499.5 1109 740 944 1172H1342.75C1432.12 1172 1487.89 1075.17 1443.08 997.84Z" fill="#3B82F6"/>
                <path d="M1443.08 997.84L1099.3 404.59C1054.63 327.495 943.32 327.464 898.602 404.534L843.5 499.5C843.5 499.5 1109 740 944 1172H1342.75C1432.12 1172 1487.89 1075.17 1443.08 997.84Z" fill="url(#paint2_linear)"/>
                <path d="M1443.08 997.84L1099.3 404.59C1054.63 327.495 943.32 327.464 898.602 404.534L843.5 499.5C843.5 499.5 1109 740 944 1172H1342.75C1432.12 1172 1487.89 1075.17 1443.08 997.84Z" stroke="black"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="495" x2="824" y2="1319" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F3E582"/>
                    <stop offset="1" stop-color="#F97217"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="252" y1="0" x2="330.877" y2="839.326" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#ED4897"/>
                    <stop offset="1" stop-color="#F43F5F"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear" x1="843.5" y1="231.5" x2="1778.09" y2="750.272" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3ABBF8"/>
                    <stop offset="1" stop-color="#6367F1"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className="mt-1 text-gray-900">krafted</h1>
          </header>
          <section>
            <h2 className="text-3xl font-medium text-gray-800">Independent development studio focused on crafting quality experiences.</h2>
          </section>
          <section>
            <a
              className="inline-flex items-center justify-center px-8 py-2.5 font-medium text-white transition duration-200 ease-in-out transform rounded-lg shadow-lg bg-gradient-to-br from-gray-700 to-gray-900 focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-white focus:ring-gray-900 hover:-translate-y-1 focus:translate-y-0 hover:from-gray-600 hover:to-gray-800"
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
