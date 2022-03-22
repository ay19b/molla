
import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    gallery:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		flexDirection: 'column',
		backgroundColor:"white",
	    padding:'4% 0',
	},
	grid:{
		display: 'flex',
        flexDirection: 'column',
		[theme.breakpoints.down("sm")]: {
           display:'block',
		   textAlign: 'center',
        },
	}
}));

export default useStyles