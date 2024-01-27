import React, { useEffect, useState } from 'react';
import BootSplash from "react-native-bootsplash";
import RNSecureStorage from 'rn-secure-storage';
import { USER_NAME_KEY } from './utils/const';
import { UserNameForm } from './components/user-name-form';
import { Game } from './components/game';

function App(): React.JSX.Element {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [name, setName] = useState<null | string>(null);

  useEffect(() => {
    RNSecureStorage.getItem(USER_NAME_KEY)
      .then((res) => {
        setName(res)
        setIsReady(true)
      })
      .catch(() => {
        setIsReady(true)
      })
  }, [])

  useEffect(() => {
    if (isReady) {
      BootSplash.hide({ fade: true });
    }
  }, [isReady])

  return (
    !name
      ? <UserNameForm setName={setName} />
      : <Game />
  );
}

export default App;
