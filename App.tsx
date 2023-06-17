import {View, Text, SafeAreaView, Image} from 'react-native';
import Welcome from './scr/screens/Welcome';

function App() {
  const handlePress = () => {
    console.log('hello');
  };
  return (
    <SafeAreaView>
      <Welcome />
    </SafeAreaView>
  );
}
export default App;
