import { useNavigate } from 'react-router'

function useGoBack(): () => void {
  const navigate = useNavigate()

  const goBack = (): void => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1) // Go back to the previous page
    }
    else {
      navigate('/') // Redirect to home if no history exists
    }
  }

  return goBack
}

export default useGoBack
