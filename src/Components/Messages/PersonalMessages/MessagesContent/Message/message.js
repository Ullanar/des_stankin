import React from 'react';
import {Comment, Tooltip, Avatar} from 'antd';
import moment from 'moment';

function Message(props) {
    return (
        <div>

            <Comment
                author={'Jew'}
                avatar={
                    <Avatar
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAQlBMVEXjAwMAgCYATf91Bob+7QH/iwB2Bob/jwT77wb/7AD/8waRuhgAeiMBfigDej4BUt8ATv3tSRD/iAM9LMP7jwbfAAG+lKEiAAABTElEQVR4nO3Zx20DARAEwaVO3lGO+adKgD9tp1AVQmN+MwMAAAAAAAAA3FzY5pttntjmgU2T0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqTmh82f3HNH9u8sM09myalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCY1z2z+4ppXtnljm3e2ObFpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUvPBZic1n2xzZps7Nk1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk5ovNk1qftnmkX+O49CkNClNSpOag02T0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTeoKNmPHOC3fUawAAAAASUVORK5CYII="
                        alt="avatar"
                    />
                }
                content={
                    <p id="message">
                        {/*{props.message.messageText}*/}
                    </p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />

        </div>
    );
}

export default Message;
