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
            <div className="flex items-center justify-center w-24 h-24 border shadow-xl rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900">
              <svg className="w-16" viewBox="0 0 1733 1602" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="325.92" y="87.3978" width="956.088" height="956.088" rx="197.453" fill="#EE4444"/>
                <rect x="325.92" y="87.3978" width="956.088" height="956.088" rx="197.453" fill="url(#paint0_linear)"/>
                <rect x="325.92" y="87.3978" width="956.088" height="956.088" rx="197.453" stroke="transparent" strokeWidth="173.204"/>
                <path d="M1293.5 516.071C1217.44 384.795 1027.89 384.795 951.817 516.07L626.286 1077.86C550.009 1209.49 644.991 1374.31 797.129 1374.31H1448.19C1600.33 1374.31 1695.31 1209.49 1619.04 1077.86L1293.5 516.071Z" fill="#3B82F6"/>
                <path d="M1293.5 516.071C1217.44 384.795 1027.89 384.795 951.817 516.07L626.286 1077.86C550.009 1209.49 644.991 1374.31 797.129 1374.31H1448.19C1600.33 1374.31 1695.31 1209.49 1619.04 1077.86L1293.5 516.071Z" fill="url(#paint1_linear)"/>
                <path d="M1293.5 516.071C1217.44 384.795 1027.89 384.795 951.817 516.07L626.286 1077.86C550.009 1209.49 644.991 1374.31 797.129 1374.31H1448.19C1600.33 1374.31 1695.31 1209.49 1619.04 1077.86L1293.5 516.071Z" stroke="transparent" strokeWidth="173.204"/>
                <circle cx="564.942" cy="1036.56" r="478.044" fill="#FACC16"/>
                <circle cx="564.942" cy="1036.56" r="478.044" fill="url(#paint2_linear)"/>
                <circle cx="564.942" cy="1036.56" r="478.044" stroke="transparent" strokeWidth="173.204"/>
                <defs>
                <linearGradient id="paint0_linear" x1="412.522" y1="174" x2="1195.41" y2="956.884" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ED4897"/>
                  <stop offset="1" stopColor="#F43F5F"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="604.779" y1="393.97" x2="1640.13" y2="1288.19" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3ABBF8"/>
                  <stop offset="1" stopColor="#6367F1"/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="173.5" y1="645.116" x2="956.384" y2="1428" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F3E582"/>
                  <stop offset="1" stopColor="#F97217"/>
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
