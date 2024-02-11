import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, IconButton, TextField } from "@mui/material";

const { Fragment } = require("react")

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';

const ChatScope = () => {
    return (
        <Fragment>
            <Card elevation={4} sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />

                <CardContent sx={{ bgcolor: "lightgray", flex: 1 }}>

                </CardContent>

                <CardActions sx={{ pl: 2 }}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        autoComplete="false"
                        size="small"
                        placeholder="Type Something"
                    />
                    <IconButton aria-label="add to favorites" sx={{ ml: 2 }}>
                        <SendIcon />
                    </IconButton>
                </CardActions>

            </Card>
        </Fragment >
    )
}

export default ChatScope;