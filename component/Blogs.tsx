import { 
    Text, 
    View,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    Linking
} from 'react-native';

const styles = StyleSheet.create({
    headingText: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 15,
        marginVertical: 10,
        fontSize: 25,
        fontWeight: "600",
        color: "#fff"
    },
    imageMain: {
        width: 500,       
        height: 333,
    },
    container: {
        backgroundColor: "#ffffff",
        height: 500
    },
    paragraphText: {
        marginVertical: 0,
        textAlign: "center",
        fontSize: 16,
        fontFamily: 'Cochin',
        fontWeight: "600"
    },
    textHeading: {
        flexDirection: 'row',
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600"
    },
    buttons: {
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    buttonsText: {
        backgroundColor: "red",
        fontSize: 18,
        paddingHorizontal: 15,
        paddingVertical: 8,
        color: "#fff",
        borderRadius: 5
    }
});

function App() {

    const openLink = (url: string) => {
        Linking.openURL(url).catch(err => 
            console.error("Failed to open URL:", err)
        );
    };

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.headingText}>Blog's Here</Text>
                <View style={styles.container}>
                    <Text style={styles.textHeading}>
                        Here is the Introduction of the Youtube Video
                    </Text>
                    <Image 
                        style={styles.imageMain}
                        source={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUX2yA6R0v3PhqHU8ut3pIRVEAPV6HWjQ92Q&s"
                        }}
                    />
                    <Text style={styles.paragraphText}>
                        Hi follow my channel to promote your video and also follow my channel to get latest update about my travel Blogs. Help me in learning React Native, I would definitely admire your effort in my journey of learning React Native.
                    </Text>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={() => openLink("https://www.youtube.com/shorts/pvGh_Q1Mwaw")}>
                            <Text style={styles.buttonsText}>Read More</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => openLink("https://www.wikipedia.org/")}>
                            <Text style={styles.buttonsText}>Follow Us</Text>
                        </TouchableOpacity>
                    </View>
                </View>      
            </View>
        </SafeAreaView>
    );
}

export default App;
