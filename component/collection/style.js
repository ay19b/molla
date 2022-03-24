
import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
	collection:{
		backgroundColor: 'black',
        maxWidth: '1280px',
        margin: 'auto',
	},
    allColl:{
       padding:'2% 0% 0% 0%',
       display: 'flex',
    },
	coll:{
		textAlign:'center',
	},
    divIcon:{
        flex:'0.3',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    icon:{
      color:'white',
    },
    divDisc:{
        flex:'0.7',
		[theme.breakpoints.down("xs")]: {
          textAlign:'center',
        },
    },
}));

export default useStyles