import { StyleSheet, Appearance, Image, Platform, View, Text } from 'react-native';
import { Link } from 'expo-router';
import { Fontisto } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ContactScreen(){
 const colorScheme = Appearance.getColorScheme();

 const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

 const imgColor = colorScheme === 'dark' ? Colors.dark :Colors.light;
 
 const styles = createStyles(theme, colorScheme);

  return(
    <SafeAreaView style={styles.container}>
      
      <View style={styles.imgContainer}>
        <Fontisto 
        name="coffeescript"
        size={250}
        color={imgColor}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Coffee Shop</Text>

        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text>555 Coffee Lane</Text>{'\n'}
            <Text>Harare, ZW </Text>
          </Text>
        </View>

        <View style={styles.textView}>
          <Text Style={styles.text}>
            Phone:{'\n'}
            <Link href="tel:0772080565" style={styles.link}>0772-080-565</Link>{'\n'}
            or{' '}
            <Link href="sms:0772080565" style={styles.link}>Click here to Text</Link>{'\n'}
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            Hours:{'\n'}
            <Text>Open 6am to 4pm daily </Text> {'\n'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      paddingTop: 0,
      flexGrow: 1
    },
    imgContainer: {
      backgroundColor: colorScheme === 'dark' ? '#353636' : '#D0D0D0',
      height: 250,
    },
    textContainer: {
      backgroundColor: theme.background,
      padding: 12,
    },
    title: {
      color: theme.text,
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 32,
      marginBottom: 10,
    },
    textView: {
      marginBottom: 10,
    },
    text: {
      color: theme.text,
      fontSize: 16,
      lineHeight: 24,
    },
    link: {
      textDecorationLine: 'underline',
    }
  });
}