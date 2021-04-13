import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from '~/screens/HomeScreen';
import ComponentsScreen from '~/screens/ComponentsScreen';
import ListScreen from '~/screens/ListScreen';
import ImageScreen from '~/screens/ImageScreen';
import CounterScreen from '~/screens/CounterScreen';
import ColorScreen from '~/screens/ColorScreen';
import SquareScreen from '~/screens/SquareScreen';
import TextScreen from '~/screens/TextScreen';
import BoxScreen from '~/screens/BoxScreen';
import PanGuestureScreen from '~/screens/animations/PanGuestureScreen'
import UseEffectScreen from "~/screens/animations/UseEffectScreen";
import AnimationScreen from "~/screens/animations/AnimationScreen"
import DragSquareScreen from "~/screens/animations/DragSuareScreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
    Pan: PanGuestureScreen,
    UE: UseEffectScreen,
    Animation: AnimationScreen,
    DragSquare: DragSquareScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
