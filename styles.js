import { Row } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        //backgroundColor: 'black',
        height: '100%',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'flex-start'
    },
    statusbar:{
        height: '13%',
        textAlign:'center',
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'blue',
        color: 'white'
        
    },
    header:{
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold',
        color: 'white',
        marginTop: '10%'
    },
    body:{
        flexGrow: 1
    },
    addtodo:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: '1%',
        padding: '2%'
    },
    button:{
        width: '30%',
        textAlign: 'center',
        justifyContent: 'center'
    },
    tb:{
        flexGrow: 1
    },
    todoitem:
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '3%',
        width: '100%'
    }
});

export default styles;