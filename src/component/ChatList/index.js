import React from 'react';
import styles from './ChatList.module.css';
import { List, ListItem, Avatar, ListItemAvatar, ListItemText } from '@mui/material';

export const ChatList = ({ chatList }) => {

    return (
        <List class={styles.chatlist} >
            {
                chatList.map(item =>
                    <ListItem key={item.id}>
                        <ListItemAvatar>
                            <Avatar alt={item.caption} src={'/img/' + item.avatar} />
                        </ListItemAvatar>
                        <ListItemText primary={item.caption} secondary={item.statusStr} />
                    </ListItem>
                )
            }
        </List>
    )
}

// sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}