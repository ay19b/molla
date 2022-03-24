
import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    home:{
      backgroundImage: "url(../images/home.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center',
      backgroundSize:'cover',
      minHeight:'100vh',
    },
    firstNav:{
      backgroundColor:'black',
      position:"relative"
    },
    container:{
      backgroundColor:'black',
    },
	conNav:{
	   alignItems: 'center',
	},
	conNavBreak:{
	   alignItems: 'center',
	   padding: '16px 0%',
     [theme.breakpoints.down("sm")]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
	},
    nav:{
      color:'white',
      boxShodow:'none',
      width: '100%',
      zIndex:'10',
      backgroundColor:'black',
	    animationName: '$scroll',
      animationDuration: '.4s',
      [theme.breakpoints.down("sm")]: {
        position:'fixed',
      },
    },
	'@keyframes scroll':{
		'0%' :{
          opacity: 1,
          transform: 'translateY(0)',
        },
		'100%' :{
          opacity: 1,
          transform: 'translateY(-60px)',
        },
	},
    navActive:{
      backgroundColor:'black',
      color:'white',
      position:'fixed',
      width: '100%',
      zIndex:'10',
      padding:'5px',
	    top:'0%',
	    animationName: '$scrollNav',
      animationDuration: '.3s',
      
      [theme.breakpoints.down("sm")]: {
        padding:'3% 1%',
      },
    },
	'@keyframes scrollNav':{
		'0%' :{
          opacity: 0,
          transform: 'translateY(-60px)',
        },
		'100%' :{
          opacity: 1,
          transform: 'translateY(0)',
        },
	},
	logo:{
		display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
	},
    list:{
      listStyle:'none',
      display:'flex',
      flexDirection:'row',
      justifyContent: "space-around",
      fontSize:"0.9rem",
      [theme.breakpoints.down("sm")]:{
        flexDirection:'column',
		    display:'flex',
		    listStyle:'none',
		    position:'fixed',
		    left:'0',
		    top: '-14px',
		    textAlign:'center',
		    backgroundColor:'#333',
		    alignItems: 'flex-start',
		    width: '100%',
		    height:'100vh',
		    zIndex: '10',
		    transform: 'translateX(-100%)',
		    transition: 'transform 0.5s ease-in',
		    animationName: '$animate',
        animationDuration: '4s',
      },
    },
	active:{
		[theme.breakpoints.down("sm")]:{
		 transform: 'translateX(0%)',
		 transition: 'transform 0.5s ease-in',
		 animationName: '$animate',
         animationDuration: '0.7s',
        },
	},
	'@keyframes animate':{
		'0%' :{
          opacity: 0,
        },
		'100%' :{
          opacity: 1,
        },
	},
	on:{
		[theme.breakpoints.down("sm")]: {
		  transform: 'translateX(0%)',
		  transition: 'transform 0.5s ease-in',
        },
	},
	itemSocial:{
	  [theme.breakpoints.up("md")]: {
        display:'none',
      },
	  [theme.breakpoints.down("sm")]: {
        marginBottom: '2%',
      },
	},
	iconsSocail:{
		display: 'flex',
        alignItems: 'center',
	},
	iconSocail:{
		    width: '40px',
        height: '40px',
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
    linksNav:{
      [theme.breakpoints.up("md")]: {
        display:'none'
      },
    },
    listItemActive:{
      color:theme.palette.primary.main,
      cursor:'pointer',
      fontWeight:'bold',
	  [theme.breakpoints.down("sm")]: {
        marginBottom: '15%'
      },
    },
    listItemAppNav:{
      color:'#ccc',
      cursor:'pointer',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      fontWeight:'bold',
      fontSize:"0.75rem",
      '&:hover':{
        color:theme.palette.primary.main,
      },
	  
	},
    menu:{
      marginRight:'4%',
      fontSize:'1.5rem',
      cursor:'pointer',
      [theme.breakpoints.up("md")]: {
        display:'none'
      },
    },
	cancel:{
		cursor:'pointer',
		width: '90%',
        position: 'relative',
		[theme.breakpoints.up("md")]: {
          display:'none'
      },
	},
	iconCancel:{
		position: 'absolute',
    right: '0px',
	},
  close:{
    display:'none',
    width: '100%',
    position: 'relative',
    cursor:'pointer',
    marginBottom: '6%',
    [theme.breakpoints.down("sm")]: {
      display:'block',
    },
  },
  iconClose:{
    position: 'absolute',
    right: '7.5%',
  },
    listItem:{
      cursor:'pointer',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      fontWeight:'bold',
      '&:hover':{
        color:theme.palette.primary.main,
      },
	  [theme.breakpoints.down("sm")]: {
        marginBottom: '2%',
		    width: '96%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
	input:{
		borderRadius: '20px',
        outline: 'none',
        border: 'none',
        padding: '3%',
	},
    icon:{
      fontSize: "1.6rem",
	  cursor:'pointer',
    },
    box:{
      position: "absolute",
      top: "30%",
      marginLeft:"15%",
      width: "27rem",
      color: "white",
      fontWeight:'bold',
	  [theme.breakpoints.down("xs")]: {
        marginLeft:"2%",
      },
    },
    addBtn:{
      backgroundColor:theme.palette.primary.main,
      color:'white',
      borderRadius: '20px',
      padding: '2% 8%',
      marginRight:'2%',
      '&:hover':{
        backgroundColor:'#0000fb'
      }
    },
	linkToCart:{
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		cursor:'pointer',
		'&:hover':{
        color:theme.palette.primary.main
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'end !important',
    },   
	},
	searchSctn:{
		display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    },
	},
  addDsc:{
      backgroundColor:'transparent',
      color:'white',
      border:'1px solid white',
      borderRadius: '20px',
      padding: '2% 8%',
      boxSizing:'none',
      '&:hover':{
        backgroundColor:theme.palette.primary.main,
        borderColor:'transparent'
      }
    },
}));

export default useStyles