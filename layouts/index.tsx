import { FC, useState } from 'react';
import Head from 'next/head'
import Headers from 'layouts/headers'
import Sidebars from 'layouts/sidebars'
import styles from 'styles/Home.module.css'
import { sideBarsHome } from './json';
import { UTILITIESLAYOUTS } from './structure';

const Components: FC<UTILITIESLAYOUTS> = ({ Layouts }) => {
    const [open, setopen] = useState<boolean>(false)
    return (<div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="head-wrapper">
            <div className="logos">
                <Sidebars barOpenTreatment={open} sidebarData={sideBarsHome} sidebarTheme="#3aa5d9" />
            </div>
            <div className="headers-between">
                <Headers openBarFunc={() => setopen(!open)} />
                <div className="main-page">
                    {Layouts}
                </div>
            </div>
        </div>
        <div className="footer">

        </div>
    </div>)
}
export default Components;