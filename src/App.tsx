import './App.css'
import MyComponent from "./components/MyComponent.tsx";


function App(){
  return (
      <>
        <MyComponent title="hello 1">
          Lorem ipsum dolor.
        </MyComponent>
          <MyComponent title="hello 2"/>
        <MyComponent title="hello 3"/>
      </>
  )
}

export default App
