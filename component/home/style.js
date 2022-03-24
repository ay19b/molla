
import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    home:{
      backgroundImage: "url(../images/home.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center',
      backgroundSize:'cover',
      height:'100vh',
      maxWidth: '1280px',
      margin: 'auto',
    },
    box:{
      position: "absolute",
      top: "12rem",
      marginLeft:"8rem",
      width: "27rem",
      color: "white",
      fontWeight:'bold',
      [theme.breakpoints.down("sm")]: {
        marginLeft:"4rem",
      },
	  [theme.breakpoints.down("xs")]: {
        marginLeft:"2%",
        width:'90%',
      },
    },
	
	allBtn:{
		display:'flex',
		justifyContent:'center',
	},
    addBtn:{
      backgroundColor:theme.palette.primary.main,
      color:'white',
      borderRadius: '20px',
      padding: '4% 8%',
      marginRight:'2%',
	    border: '1px solid transparent',
      width: '12rem',
      '&:hover':{
        backgroundColor:'#0000fb'
      },
	  [theme.breakpoints.down("xs")]: {
        padding: '2% 8%',
		 width: '13rem',
      },
    },
    addDsc:{
      backgroundColor:'transparent',
      color:'white',
      border:'1px solid white',
      borderRadius: '20px',
      padding: '4% 8%',
      boxSizing:'none',
	  width: '12rem',
      '&:hover':{
        backgroundColor:theme.palette.primary.main,
        borderColor:'transparent'
      },
	  [theme.breakpoints.down("xs")]: {
        padding: '2% 8%',
		width: '13rem',
      },
    },
}));

export default useStyles