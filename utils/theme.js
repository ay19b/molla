import { createTheme } from '@material-ui/core';
// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#66f"
    },
  },
  typography:{
	  h6:{
		  fontSize:'1rem',
		  fontWeight:'initial'
	  }
  },
  overrides:{
    MuiInput:{
        root:{
          color:'white',
          fontSize: '0.8rem',
        }
      },
      MuiNativeSelect:{
      icon:{
        color:'white',
        fontSize: '0.8rem',
        top: 'calc(70% - 12px)'
      },
      select:{
          '&:not([multiple]) option' :{
            backgroundColor:'black'
          },
      },
  },
  MuiAvatar:{
		  root:{
			 width: '80px',
             height: '80px',
		  },
    },
	MuiInputBase:{
		inputMarginDense:{
			textAlign: 'center !important'
		},
	},
	MuiSnackbarContent:{
		root:{
			backgroundColor:'#66f',
		},
	},
  MuiAvatar:{
    root:{
      width: '90px',
      height: '90px',
    },
  },
  },
});