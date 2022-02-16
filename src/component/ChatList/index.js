import React, { useState } from 'react';
import styles from './ChatList.module.css';
import { List, ListItem, Avatar, ListItemAvatar, ListItemText, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { getChatByIdLink } from '../../navigation';

import { useSelector } from 'react-redux';
import { getChatList } from '../../store/chatList';

export const ChatList = ({ selectedChatId, deleteChat }) => {

    const chatList = useSelector(getChatList);

    const [contextMenu, setContextMenu] = useState(null);

    const handleContextMenu = (event) => {
        //console.log('aaa' + event.currentTarget);

        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                    mouseX: event.clientX - 2,
                    mouseY: event.clientY - 4,
                    id: event.currentTarget.dataset.id
                }
                : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
                // Other native context menus might behave different.
                // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
                null,
        );
    };

    const handleClose = () => {
        setContextMenu(null);
    };

    const onDeleteClick = () => {
        const deletedId = contextMenu.id;
        //console.log('click ' + deletedId);
        handleClose();
        deleteChat(deletedId);
    }
    return (
        <List class={styles.chatlist} >
            {
                chatList.map(item =>
                    <Link to={getChatByIdLink(item.id)} key={item.id}>
                        <ListItem selected={item.id === selectedChatId}
                            onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}
                            data-id={item.id}>
                            <ListItemAvatar>
                                <Avatar alt={item.caption} src={'/img/' + item.avatar} />
                            </ListItemAvatar>
                            <ListItemText primary={item.caption} secondary={item.statusStr} />
                            <Menu
                                open={contextMenu !== null}
                                onClose={handleClose}
                                anchorReference="anchorPosition"
                                anchorPosition={
                                    contextMenu !== null
                                        ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                                        : undefined
                                }
                            >
                                <MenuItem onClick={onDeleteClick}>Удалить</MenuItem>
                            </Menu>
                        </ListItem>
                    </Link>
                )
            }
        </List>
    )
}



