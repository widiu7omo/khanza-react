import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Nav from '../components/nav'
import Navbar from '../components/navbar/navbar'
import Button from "@material-ui/core/Button";
import {CardContent, CardHeader, Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import {makeStyles} from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    space: {
        marginTop: theme.spacing(3)
    }
}))
const title = "Home";

const Home = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Head>
                <title>Home</title>
            </Head>
            <Navbar/>
            <div className={classes.root}>
                <Container root="true">
                    <div className={classes.space}>
                        <Grid container>
                            <Grid item mt={2} xs={12} sm={12} md={6}>
                                <Card>
                                    <CardHeader>
                                        <Typography>
                                            Kunjungan Pasien
                                        </Typography>
                                    </CardHeader>
                                    <CardContent>
                                        <Typography>
                                            Test dkajhdakdh
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>

                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
};

Home.getInitialProps = async ({query}) => {
    const pageRequest = `http://localhost:3000/api/pasiens?page=${query.page ||
    1}&limit=${query.limit || 9}`;
    console.log(query)
    const res = await fetch(pageRequest);
    const json = await res.json();
    return json
};
export default Home
