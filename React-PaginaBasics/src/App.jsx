import './App.css'
import { TwiterFollowCard } from './assets/TwiterFollowCard'


//Shawncito, 

function App() {
  return (
    <div className="App">
      <TwiterFollowCard userName= 'JexonMG' inicialIsFollowing={true}>
        Jexon Mejias
      </TwiterFollowCard>
    </div>
  )
}

export default App