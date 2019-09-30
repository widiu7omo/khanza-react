import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Nav from '../../components/nav'
import Button from "@material-ui/core/Button";

const Pasiens = () =>{
    return (
        <div>
            <Head>
                <title>Data Pasien</title>
            </Head>
            <Nav/>
        </div>

    )
}
export default Pasiens