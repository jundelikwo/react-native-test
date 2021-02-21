import React from 'react';
import {Scene, Stack, Tabs, Router} from 'react-native-router-flux';

import NavBar from './NavBar';
import Account from '../screens/Account';
import Activity from '../screens/Activity';
import Explore from '../screens/Explore';
import Login from '../screens/Login';
import Messages from '../screens/Messages';
import Ranting from '../screens/Ranting';
import Rooms from '../screens/Rooms';
import Username from '../screens/Username';

import Headphone from '../../assets/headphone-nav.svg';
import ActiveHeadphone from '../../assets/active-headphone.svg';
import MessageIcon from '../../assets/message-nav.svg';
import ActiveMessageIcon from '../../assets/active-message.svg';
import Wifi from '../../assets/wifi.svg';
import ActiveWifi from '../../assets/active-wifi.svg';
import Alarm from '../../assets/alarm-nav.svg';
import ActiveAlarm from '../../assets/active-alarm.svg';
import Profile from '../../assets/profile.svg';
import ActiveProfile from '../../assets/active-profile.svg';

const router = () => (
    <Router>
        <Stack key="root" headerMode="none">
            <Scene key="login" title="Login" component={Login} />
            <Scene key="ranting" title="Ranting" component={Ranting} />
            <Scene key="username" title="Username" component={Username} />

            <Tabs key="home" tabBarPosition="bottom" tabBarComponent={NavBar}>
                <Scene
                    key="rooms"
                    title="Rooms"
                    component={Rooms}
                    logo={Headphone}
                    activeLogo={ActiveHeadphone}
                />
                <Scene
                    key="messages"
                    title="Messages"
                    component={Messages}
                    logo={MessageIcon}
                    activeLogo={ActiveMessageIcon}
                />
                <Scene
                    key="explore"
                    title="Explore"
                    component={Explore}
                    logo={Wifi}
                    activeLogo={ActiveWifi}
                />
                <Scene
                    key="activity"
                    title="Activity"
                    component={Activity}
                    logo={Alarm}
                    activeLogo={ActiveAlarm}
                />
                <Scene
                    key="account"
                    title="Account"
                    component={Account}
                    logo={Profile}
                    activeLogo={ActiveProfile}
                />
            </Tabs>
        </Stack>
    </Router>
);

export default router;