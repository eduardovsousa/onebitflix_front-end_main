// import styles from '../styles/registerLogin.modules.scss';
import Head from 'next/head';
import HeaderGenric from '../src/components/common/headerGenric';

const Register = function () {
    return (<>
        <Head>
            <title>Onebitflix - Registro
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </title>
        </Head>
        <main>
            <HeaderGenric logoUrl="/" btnUrl="/login" btnContent="Quero fazer login" />
        </main>
    </>)
}

export default Register;
