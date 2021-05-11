import './styles.scss'

const Footer = () => {
  const handleLog = data => {
    console.log(data)
  }

  return (
    <footer className="footer" onDoubleClick={() => handleLog('data')}>
      Footer Pull Request 2
    </footer>
  )
}

export default Footer
