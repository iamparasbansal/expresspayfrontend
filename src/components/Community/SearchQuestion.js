import React from "react"
import {
    Grid,
    Paper,
    TextField,
    Container,
    Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
// import SendIcon from "@material-ui/icons/Send"
// import { useSelector } from "react-redux"
const useStyles = makeStyles({
    root: {
        borderRadius: 30,
    },
    title: {
        fontFamily: "serif",
    },
    textfield: {
        margin: "20px auto",
        borderRadius: 20,
    },
    button: {
        background: "linear-gradient(45deg, #af58f5 30%, #901af0  90%)",
        boxShadow: "0 3px 5px 2px rgba(181, 99, 247, .3)",
        color: "white",
        borderRadius: 3,
        height: 48,
        padding: "0 30px",
    },
})
const SearchQuestion = ({ setSearch = f => f, search = "", user }) => {

    const classes = useStyles()

    return (
        <Container data-aos="zoom-in">
            <Paper
                className={classes.root}
                elevation="20"
                style={{ padding: "40px 20px", margin: "20px auto" }}
            >
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <Typography align="center" variant="h2" className={classes.title}>
                            Search your Query
                        </Typography>

                        <TextField
                            label="Keyword"
                            id="outlined-size-small"
                            variant="outlined"
                            fullWidth
                            placeholder="Keyword"
                            name="Keyword"
                            value={search}
                            onChange={event => setSearch(event.target.value)}
                            className={classes.textfield}
                            autoComplete="off"
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default SearchQuestion;