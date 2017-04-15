import { StackNavigator } from 'react-navigation';

import Chat from './chat';
import LoginDialog from './logindialog';
import Splash from './splash';

const Navigator = StackNavigator({
    Login: { screen: LoginDialog },
    Chat: { screen: Chat },
    Splash: { screen: Splash },
},
{
    initialRouteName: 'Splash',
    headerMode: 'none',
    cardStyle: { backgroundColor: '#fff' }
});

export default Navigator;