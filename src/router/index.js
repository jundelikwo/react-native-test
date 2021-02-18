import React from 'react';
import {Scene, Stack, Tabs, Router} from 'react-native-router-flux';

import Account from '../screens/Account';
import Activity from '../screens/Activity';
import Explore from '../screens/Explore';
import Login from '../screens/Login';
import Messages from '../screens/Messages';
import Ranting from '../screens/Ranting';
import Rooms from '../screens/Rooms';
import Username from '../screens/Username';

const router = () => (
    <Router>
        <Stack key="root" headerMode="none">
            <Scene key="login" title="Login" component={Login} />
            <Scene key="ranting" title="Ranting" component={Ranting} />
            <Scene key="username" title="Username" component={Username} />
        </Stack>
    </Router>
);

export default router;