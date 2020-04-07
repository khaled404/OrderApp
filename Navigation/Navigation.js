import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import EnterPhoneNumberScreen from '../Screens/EnterPhoneNumberScreen';
import ActivationCodeScreen from '../Screens/ActivationCodeScreenScreen';
import RegistrationInformationScreen from '../Screens/RegistrationInformationScreen';
import SearchScreen from '../Screens/SearchScreen';
import SearchResultScreen from '../Screens/SearchResultScreen';
import FilterScreen from '../Screens/FilterScreen';
import MapScreen from '../Screens/MapScreen';
import RestaurantScreen from '../Screens/RestaurantScreen';
import MenuScreen from '../Screens/MenuScreen';
import ChooseOrderScreen from '../Screens/ChooseOrderScreen';
import CartScreen from '../Screens/CartScreen';
import CompleteScreen from '../Screens/CompleteScreen';
import CompleteRequestScreen from '../Screens/CompleteRequestScreen';
import WaitForAcceptanceScreen from '../Screens/WaitForAcceptanceScreen';
import RequestWasAcceptedScreen from '../Screens/RequestWasAcceptedScreen';
import RrestaurantWillDeliverScreen from '../Screens/RrestaurantWillDeliverScreen';
import DoneScreen from '../Screens/DoneScreen';
import ReceiveRequestScreen from '../Screens/ReceiveRequestScreen';
import WaitForTheRestaurantToAcceptSceeen from '../Screens/WaitForTheRestaurantToAcceptaScreen';
import ProcessingScreen from '../Screens/ProcessingScreen';
import OrderIsReadyScreen from '../Screens/OrderIsReadyScreen';
import HelpScreen from '../Screens/HelpScreen';
import OrdersScreen from '../Screens/OrdersScreen';
import FinishedOrderScreen from '../Screens/FinishedOrderScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import OffersScreen from '../Screens/OffersScreen';
import MoreScreen from '../Screens/MoreScreen';
import ProfileSettingsScreen from '../Screens/ProfileSettingsScreen';
import InfoScreen from '../Screens/InfoScreen';

const StackNav = createStackNavigator(
  {
    ChooseOrder: ChooseOrderScreen,
    Information: RegistrationInformationScreen,
    Search: SearchScreen,
    Result: SearchResultScreen,
    filter: FilterScreen,
    Map: MapScreen,
    Restauran: RestaurantScreen,
    Menu: MenuScreen,
    Cart: CartScreen,
    Complete: CompleteScreen,
    CompleteRequest: CompleteRequestScreen,
    WaitForAcceptance: WaitForAcceptanceScreen,
    RequestWasAccepted: RequestWasAcceptedScreen,
    RrestaurantWillDeliver: RrestaurantWillDeliverScreen,
    Done: DoneScreen,
    ReceiveRequest: ReceiveRequestScreen,
    WaitForTheRestaurantToAccept: WaitForTheRestaurantToAcceptSceeen,
    Processing: ProcessingScreen,
    OrderIsReady: OrderIsReadyScreen,
    Help: HelpScreen,
    Orders: OrdersScreen,
    FinishedOrder: FinishedOrderScreen,
    Favorite: FavoriteScreen,
    Offers: OffersScreen,
    More: MoreScreen,
    ProfileSettings: ProfileSettingsScreen,
    Info: InfoScreen,
  },
  {headerMode: 'none'},
);

const SwitchNav = createSwitchNavigator({
  RegistrationInformation: StackNav,
  EnterPhoneNumberScreen,
  ActivationCodeScreen,
});
export default createAppContainer(SwitchNav);
