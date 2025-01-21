import { lazy, Suspense } from "react"
import CreateForm from "./components/CreateForm"
const TaskListContainer = lazy(() => {
 return import( "./components/TaskListContainer")
});
import Spinner from "./components/Spinner"


const page = () => {
  return (
    <main className="container mx-auto">
      <CreateForm/>
      <Suspense fallback={<Spinner/>}>

      <TaskListContainer/>
      </Suspense>
    </main>
  )
}

export default page