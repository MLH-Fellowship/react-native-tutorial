import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';

registerScreens();
export const start = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'HomeScreen',
              },
            },
          ],
        },
      },
    });
  });
};

export const pushScreen = (props) => {
  const {componentId} = props;
  Navigation.push(componentId, {
    component: {
      name: 'PushedScreen',
    },
  });
};

export const openModal = () => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: 'ModalScreen',
            passProps: {
              text: 'This is the modal screen',
            },
            options: {
              topBar: {
                title: {
                  text: 'Title text',
                },
                leftButtons: [
                  {
                    color: '#00bfff',
                    text: 'button',
                    id: 'leftButton',
                  },
                ],
              },
            },
          },
        },
      ],
    },
  });
};
