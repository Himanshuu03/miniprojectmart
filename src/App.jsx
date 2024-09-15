import { projects } from "./api/project"
import Card from "./components/Card"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-800">
      <Navbar/>
      <div className='flex justify-center items-center gap-5 flex-wrap mt-3'>
        {
          projects.map(project => (
            <Card key={project.id} project={project}/>
          ))
        }
      </div>
    </div>
  )
}

export default App