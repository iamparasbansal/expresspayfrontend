import React, { useState } from "react"
import {
    Divider,
    Grid,
    TextField,
    Button,
    ButtonGroup,
    Typography,
} from "@material-ui/core"
import axios from "axios"

const PostAnswer = ({ qid, setReload = f => f, reload, user }) => {
    const [desc, setDesc] = useState("")
    const postReply = async event => {
        event.preventDefault()

        if (!qid || desc.length < 10) {
            window.alert("invalid query or add valid reply (length > 10)")
            return
        }

        if (!user?.isLoggedin) {
            window.alert("Please Sign in to continue")
            return
        }

        try {

            const token = localStorage.getItem('token'); 
            const res = await axios.post(`https://server-express-pay-houy.vercel.app/comment/${qid}`, {
                desc,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
                withCredentials: true, 
            });

            if (res.data) {

                window.alert("success fully replied")
                setReload(!reload)
                setDesc("")
            }
        } catch (error) {
            window.alert(error)
            console.log(error.response.data.erorr)
        }
    }

    return (
        <>
            <Divider />

            <Grid container wrap="nowrap" spacing={2} style={{ margin: "20px auto" }}>
                <Grid justifyContent="left" item xs zeroMinWidth>
                    <Typography variant="h3" style={{ margin: 5 }}>
                        Your answer
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
            </Grid>

            <ButtonGroup
                color="primary"
                aria-label="vertical contained primary button group"
                variant="contained"
            >
                <Button onClick={postReply}>Post your reply</Button>
            </ButtonGroup>
        </>
    )
}

export default PostAnswer