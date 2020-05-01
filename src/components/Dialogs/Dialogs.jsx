import React from 'react';
import s from './Dialogs.module.sass'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map( el => <DialogItem name={el.name} key={el.id} id={el.id} />)
    let messagesElement = state.messages.map( el => <Message message={el.message} key={el.id} id={el.id} />)
    let newMessageBody = state.newMassageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea onChange={onNewMessageChange} value={newMessageBody}></textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick }>Добавить сообщение</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

