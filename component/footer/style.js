import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
	footer:{
		backgroundColor: 'black',
		maxWidth: '1280px',
        margin: 'auto',
	},
    icons:{
		display: 'flex',
        alignItems: 'center',
        marginTop: '8%'
	},
	icon:{
		width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '3%',
        cursor: 'pointer',
		'&:hover':{
         color:'black',
		 backgroundColor:'white'
        }
	},
	headerList:{
		color:'white',
	},
	listItem:{
		listStyle:'none',
	},
	item:{
		marginBottom: '2%',
		color: '#bbb',
	},
	lastFooter:{
		textAlign: 'center',
		marginTop:'1%',
	}
}));

export default useStyles