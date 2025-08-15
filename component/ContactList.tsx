import { Text,
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image
} from 'react-native'

function App(){
    const contacts =[
        {
            uid:1,
            name:'Prakhar Shukla',
            Status: 'Just a Engineering Student Learning React',
            imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png'
        },
        {
            uid:2,
            name:'Amit Kumar',
            Status: 'Just a Engineering Student Learning React',
            imageUrl: 'https://static.vecteezy.com/system/resources/previews/028/238/588/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png'
        },
        {
            uid:3,
            name:'Abhinav',
            Status: 'Just a Engineering Student Learning React',
            imageUrl: 'https://www.shutterstock.com/image-vector/vector-bright-portrait-beautiful-brunette-600nw-2452267975.jpg'
        },
        {
            uid:4,
            name:'Aman',
            Status: 'Just a Engineering Student Learning React',
            imageUrl: 'https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg'
        },
        {
            uid:5,
            name:'Amod Kumar',
            Status: 'Just a Engineering Student Learning React',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZnF8ElwCzCgHGTNVnaElToLnw3zE4AgEVQ&s'
        }
    ]
    return(
        <SafeAreaView>
            <View>
                <Text style ={styles.headingText}>ContactList</Text>
                <ScrollView style ={styles.container}>
                    {/* Loope through element */}
                    {contacts.map(({uid, name, Status, imageUrl}) => (
                        <View key={uid} style={styles.usercard}>
                            <Image 
                                source={{ uri: imageUrl }}
                                style={styles.userimage}
                            />
                            <View>
                                <Text style={styles.username}>{name}</Text>
                                <Text style={styles.userstatus}>{Status}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    headingText:{
        fontSize:30,
        fontWeight: "600",
        color: "#fff",
        marginHorizontal: 20,
        marginVertical: 10
    },
    container:{
        paddingHorizontal:16,
        marginBottom: 4
    },
    usercard:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userimage:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight:14
    },
    username:{
        fontSize: 16,
        fontWeight: "600",
        color: "#fff"
    },
    userstatus:{
        fontSize: 12,
        color: "#fff"
    }
})
export default App
