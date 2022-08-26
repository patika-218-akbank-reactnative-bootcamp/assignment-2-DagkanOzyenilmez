import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    top_row: {
        marginTop: 50,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    edit_text: {
        fontSize: 16,
        color: 'blue',
    }, 
    new_button: {
        width: 18,
        height: 18,
        marginRight: 10,
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
        borderBottomColor: 'gray'
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
        marginRight: 10,
    },
})

export default styles;