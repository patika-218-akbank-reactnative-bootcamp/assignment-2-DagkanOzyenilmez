import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    top_row: {
        marginTop: 60,
        marginLeft: 20,
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    edit_text: {
        fontSize: 16,
        color: 'blue',
    }, 
    new_button: {
        width: 20,
        height: 20,
        marginRight: 20,
    },
    chats_text: {
        fontSize: 28,
        fontWeight: '700',
        marginLeft: 20,
    },
    buttom_row:{
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
        marginBottom: 10,
    },
    broadCast_list_text: {
        marginLeft: 20,
        marginBottom: 16,
        fontSize: 16,
        color: 'blue',
    },
    new_group_text: {
        fontSize: 16,
        color: 'blue',
        marginRight: 20,
    },
})

export default styles;