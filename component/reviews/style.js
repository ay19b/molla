
import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    products:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		flexDirection: 'column',
		backgroundColor:"white",
		textAlign:'center',
	    padding:'4% 0',
		maxWidth: '1280px',
        margin: 'auto',
	},
	slide:{
		display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
		paddingTop:'10%',
	},
	reviews:{
		marginTop:'8%',
	},
	card:{
		justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
		[theme.breakpoints.down("sm")]: {
         flexDirection: 'column',
        },
	},
	img:{
        top: '10%',
	},
	inf:{
		border: '1px solid #ccc6c6',
        padding: '13% 7% 13% 7%',
        borderRadius: '8px',
		boxShadow: '4px 8px 15px -16px rgba(0,0,0,0.76)',
	},
	rate:{
		marginTop:'3%',
		[theme.breakpoints.down("sm")]: {
         marginTop:'-2%',
        },
		[theme.breakpoints.down("xs")]: {
         marginTop:'1%',
        },
	},
	star:{
		color:theme.palette.primary.main,
	    fontSize: '1.5rem'
    },
}));

export default useStyles