
import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
	closeIconSctn:{
		display: 'flex',
        alignItems: 'center',
	},
	closeIcon:{
		cursor:'pointer',
	},
    emptyCart:{
		backgroundColor:'white',
	},
	shopingCart:{
		fontSize:'10rem',
	},
	card:{
		width: '20rem',
        position: 'absolute',
        right: '2%',
		top:'3rem',
        zIndex: '15',
		borderRadius: '8px',
		padding: '1% 2% 1% 2%',
		display:'block',
        [theme.breakpoints.down("xs")]: {
			width: '18rem',
		 },
	},
	cardDisp:{
		display:'none',
	},
	subtotal:{
		marginBottom: '2%',
		marginTop: '2%',
		display: 'flex',
        justifyContent: 'space-between',
		color:'#4d4d4d'
	},
}));

export default useStyles