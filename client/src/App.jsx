import './App.scss'
import DraggableCard from './components/DraggableCard'
import AnotherCard from './components/CardContent'
import EducationCard from './components/EducationContent'
import InterestsCard from './components/InterestsContent'
import PlaceCard from './components/PlaceContent'
import PlaceCard2 from './components/PlaceContent2'

function App() {

  return (
    <div className="App">
      <DraggableCard CardContent={<AnotherCard />}/>
      <DraggableCard CardContent={<EducationCard />}/>
      <DraggableCard CardContent={<InterestsCard />}/>
      <DraggableCard CardContent={<PlaceCard />}/>
      <DraggableCard CardContent={<PlaceCard2 />}/>
    </div>
  )
}

export default App
