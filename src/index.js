import {useState, useEffect} from 'react'

const useMediaQuery = query => {
  const [match, setMatch] = useState(false)

  const updateMatch = () => setMatch(window.matchMedia(query).matches)

  useEffect(() => {
    updateMatch()
    window.addEventListener('resize', updateMatch)
    window.addEventListener('orientationchange', updateMatch)
    return () => {
      window.removeEventListener('resize', updateMatch)
      window.removeEventListener('orientationchange', updateMatch)
    }
  }, [])

  return match
}

export default useMediaQuery
