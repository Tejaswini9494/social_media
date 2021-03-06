import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../assets/images/social-media.png'
import Grid from '@material-ui/core/Grid'
import auth from './../auth/auth-helper'
import FindPeople from './../user/FindPeople'
import Newsfeed from './../post/Newsfeed'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(1)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.info.main
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#000',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#000'
    } 
  }
}))

export default function Home({history}){
  const classes = useStyles()
  const [defaultPage, setDefaultPage] = useState(false)

  useEffect(()=> {
    setDefaultPage(auth.isAuthenticated())
    const unlisten = history.listen (() => {
      setDefaultPage(auth.isAuthenticated())
    })
    return () => {
      unlisten()
    }
  }, [])

    return (
      <div style={{
        backgroundColor: 'palette.background.paper'
      }} className={classes.root}>
        { !defaultPage &&
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <Typography variant="h6" className={classes.title}><center>
                  WELCOME!!!</center>
                </Typography>
                <CardMedia className={classes.media} image={unicornbikeImg} title="Unicorn Bicycle"/>
    
                <CardContent>
                  <Typography type="body1" component="p"><center>
                     </center>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        }
        {defaultPage &&
          <Grid container spacing={8}>
            <Grid item xs={8} sm={7}>
              <Newsfeed/>
            </Grid>
            <Grid item xs={6} sm={5}>
              <FindPeople/>
            </Grid>
          </Grid>
        }
      </div>
    )
}
