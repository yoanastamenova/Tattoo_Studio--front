export const Header = () => {

    const navigate = useNavigate();         //hook to use navigate function
  
    return (
      <>
        <div onClick={() => navigate('/login')}> Login </div>
        <CSurfer path="/register" content="Register" />
        <CSurfer path="/services" content="Services" />
      </>
    )
  }
