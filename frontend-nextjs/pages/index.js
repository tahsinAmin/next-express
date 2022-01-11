import { usestate } from 'react'

const Home = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div>
      <form>
        <h1>Formula 1</h1>
        <input type='text' name='name' value={name} />
      </form>
    </div>
  )
}

export default Home
