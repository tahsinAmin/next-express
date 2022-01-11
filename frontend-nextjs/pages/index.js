import { useState } from 'react'

const Home = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const onChangeName = (evt) => {
    setName(evt.target.value)
  }

  const onChangeEmail = (evt) => {
    setEmail(evt.target.value)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(name, email)
  }

  return (
    <div>
      <form onSubmit={sendEmail} method='post'>
        <h1>Formula 1</h1>
        <input type='text' name='name' value={name} onChange={onChangeName} />
        <input
          type='text'
          name='email'
          value={email}
          onChange={onChangeEmail}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Home
