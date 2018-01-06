import Head from 'next/head'

export default ({ children }) =>
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      {/* <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/3.1.0/antd.min.css' /> */}
    </Head>
    <style jsx global>{`
      body {
      }
    `}</style>
    {children}
  </div>
