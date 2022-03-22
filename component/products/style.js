
import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    products:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		flexDirection: 'column',
		backgroundColor:"white",
		textAlign:'center',
		height:'100vh',
		padding:'4% 0',
		margin:'6rem 0% 5rem 0%',
	},
	slide:{
		display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
		paddingTop:'10%',
	},
	img:{
		width:'100%',
		height:'100%',
	},
	disc:{
		paddingTop: '5%',
	},
	infProd:{
		display:'flex',
		flexWrap:'wrap',
		justifyContent: 'center',
		margin:'1% 0',
	},
	btnAdd:{
		borderRadius:'13px',
		padding:'0.5rem 1.7rem',
        boxShadow: '0px 1px 5px -2px rgba(0,0,0,0.75)',
	},
}));

export default useStyles