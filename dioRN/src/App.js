import React from 'react';
import {
    View,
    Text,
    Image,
    Pressable,
    Linking,
    StyleSheet,
    SafeAreaView,
    StatusBar,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const profileImage = 'https://avatars.githubusercontent.com/u/41174251?v=4';

const urlGithubProfile = 'https://github.com/GeraldoPaes';

const App = () => {
    const handlePressGoToGithub = async () => {
        const res = await Linking.canOpenURL(urlGithubProfile);

        if (res) {
            await Linking.openURL(urlGithubProfile);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image
                    accessibilityLabel="Github Profile Image"
                    style={style.avatar}
                    source={{uri: profileImage}}
                />
                <Text style={[style.defaultText, style.name]}>Ravenborn</Text>
                <Text style={[style.defaultText, style.nickname]}>
                    GeraldoPaes
                </Text>
                <Text style={[style.defaultText, style.description]}>
                    Computer Science student at UFRPE.
                </Text>
            </View>
            <Pressable onPress={handlePressGoToGithub}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>
                        Open in Github
                    </Text>
                </View>
            </Pressable>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        // Column
        backgroundColor: colorGithub,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 12,
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
