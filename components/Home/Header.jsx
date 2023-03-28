import Head from 'next/head'

export default function Header() {
    return <Head>
        <link rel="shortcut icon" href="/enantraLogoWhite.svg" media="(prefers-color-scheme: light)" />
        <link rel="shortcut icon" href="/enantraLogo.svg" media="(prefers-color-scheme: dark)" />
    </Head>
}