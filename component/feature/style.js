
import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
	sectionFeature:{
		backgroundColor:'#f1f1f1',
		height:'100%',
	},
    feature:{
        backgroundImage: "url(../images/bg-1.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize:'cover',
        backgroundColor:'#f1f1f1',
        padding:'4% 0%',
        [theme.breakpoints.down("sm")]: {
            backgroundColor: '#f1f1f1',
			backgroundPosition: 'top',
			padding: '22% 0%',
        },
    },
    headerItem:{
        fontWeight:'bold',
        color:"white"
    },
    iconInf:{
		display:'flex',
		alignItems: 'center',
	},
    icon:{
        color:theme.palette.primary.main,
		marginRight:'2%',
		fontSize: '2rem',
    },
	divIcon:{
        flex:'0.3',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
	divDisc:{
        flex:'0.7',
    },
	hdIcon:{
		color:'white',
	},
    extraHead:{
        backgroundImage: "url(../images/bg-2.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize:'cover', 
        height:'100vh',
        position: "relative",
    },
    box:{
        position: "absolute",
        top: "20%",
        marginLeft:"15%",
        width: "27rem",
        color: "white",
        fontWeight:'bold',
		[theme.breakpoints.down("xs")]: {
           marginLeft:"4%",
           width: "90%",
        },
    },
    boxItemHeader:{
        fontWeight:'bold',
        color:"black"
    },
    boxHeader:{
        fontWeight:'bold',
        color:"black",
        width:'100%'
    },
    boxParag:{
        color:"#828080",
    },
    AllBtn:{
        display:'flex',
        marginTop:'2%',
    },
    btn:{
        color: 'black',
        textAlign: "center",
        border: '1px dashed',
        padding: '0.8rem',
        borderRadius: '8px',
        marginRight: '6%',
		width: '6rem',
        '&:hover':{
            color:'white',
            backgroundColor:'black'
        }
    },
}));

export default useStyles