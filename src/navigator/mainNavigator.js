import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings178995Navigator from '../features/Settings178995/navigator';
import UserProfile178993Navigator from '../features/UserProfile178993/navigator';
import ArticleList178955Navigator from '../features/ArticleList178955/navigator';
import ArticleList178954Navigator from '../features/ArticleList178954/navigator';
import ArticleList178953Navigator from '../features/ArticleList178953/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings178995: { screen: Settings178995Navigator },
UserProfile178993: { screen: UserProfile178993Navigator },
ArticleList178955: { screen: ArticleList178955Navigator },
ArticleList178954: { screen: ArticleList178954Navigator },
ArticleList178953: { screen: ArticleList178953Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
