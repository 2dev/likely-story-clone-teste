import './styles.scss'

const array = [1, 2, 3, 4, 5]

const Footer = () => {
  const handleLog = data => {
    console.log(data)
  }

  return (
    <footer className="footer" onDoubleClick={() => handleLog('data')}>
      Footer Pull Request {array[1]}
    </footer>
  )
}

export default Footer
