
import './App.css'
import { ControlField } from './copmonents/ControlField/ControlField'
import { FamilyTree } from './copmonents/FamilyTree/FamilyTree'
import { FormAction } from './copmonents/FormAction/formAction'
import { HookForm } from './copmonents/HookForm/HookForm'
import { ProductManagment } from './copmonents/ProductManagment/ProductManagment'
import { SimpleForm } from './copmonents/SimpleForm/SimpleForm'
import { UnControledField } from './copmonents/UnControledField/UnControledField'

function App() {

  return (
    <>
      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlField></ControlField> */}
      {/* <UnControledField></UnControledField> */}
      {/* <HookForm></HookForm> */}
      {/* <ProductManagment></ProductManagment> */}
      <FamilyTree></FamilyTree>
    </>
  )
}

export default App
