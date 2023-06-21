
import React, { useEffect, useState } from "react"
import { Container, Typography, Divider, Hidden } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import { ThemeProvider } from "styled-components"
import { chosenTheme } from "../theme"
import { makeStyles } from "@material-ui/core/styles"
import { trackPromise } from "react-promise-tracker"
import PostQuestion from "./Community/PostQuestion"
import SearchQuestion from "./Community/SearchQuestion"
import Question from "./Community/Question"
import axios from "axios"

const useStyles = makeStyles({
  title: {
    fontFamily: "arial",
    fontWeight: 500,
    margin: "20px auto",
  },
})

export default function Query({ user }) {
  const classes = useStyles()
  const [queries, setQueries] = useState([])
  const [reload, setReload] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const token = localStorage.getItem('Authorization');
        const res = await axios.get('https://server-express-pay-houy.vercel.app/query', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        if (res.data) {
          setQueries(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    trackPromise(fetchdata())
  }, [reload])
  return (
    <>
      <ThemeProvider theme={chosenTheme}>
        <center>
          <Typography className={classes.title} align="center" variant="h1">
            Community
          </Typography>
        </center>
        <Divider />
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Hidden mdUp>
              <Grid item xs={12} md={7}>
                <PostQuestion
                  data-aos="zoom-in"
                  theme={chosenTheme}
                  reload={reload}
                  setReload={setReload}
                  user={user}
                />
                <SearchQuestion
                  search={search}
                  setSearch={setSearch}
                  theme={chosenTheme}
                  reload={reload}
                  setReload={setReload}
                  user={user}
                />
              </Grid>
            </Hidden>
            <Grid item xs={12} md={7}>
              {" "}
              {queries.length > 0 ? (
                queries
                  .sort(value => {
                    return value.isResolved ? 1 : -1
                  })
                  .filter(data => {
                    return (
                      data.desc.toLowerCase().includes(search.toLowerCase()) ||
                      data.title.toLowerCase().includes(search.toLowerCase()) ||
                      data.tag.toLowerCase().includes(search.toLowerCase())
                    )
                  })
                  .map(data => (
                    <div data-aos="zoom-in">
                      <Question
                        key={data._id}
                        data={data}
                        reload={reload}
                        setReload={setReload}
                        theme={chosenTheme}
                        user={user}
                      />
                    </div>
                  ))
              ) : (
                <></>
              )}
            </Grid>

            <Hidden smDown>
              <Grid item xs={12} md={5}>
                <SearchQuestion
                  data-aos="zoom-in"
                  search={search}
                  setSearch={setSearch}
                  theme={chosenTheme}
                  reload={reload}
                  setReload={setReload}
                  user={user}
                />
                <PostQuestion
                  data-aos="zoom-in"
                  theme={chosenTheme}
                  reload={reload}
                  setReload={setReload}
                  user={user}
                />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  )
}