import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    divider:{
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    column:{
        display: 'flex',
        flexDirection: 'column',
    },
    profile_image:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 20,
        marginBottom: 10,
    },
    name_text:{
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 10,
    },
    messageDisplay: {
        color: 'gray',
        fontSize: 16,
        marginLeft: 10,
        marginTop: 6,
    },
    messageDate: {
        color: 'gray',
        fontSize: 16,
        marginLeft: 40,
    } 

})

export default styles;