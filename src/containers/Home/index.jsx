import { formData } from '@/components/Form/formData'
import FilterTable from '@/components/Table'
import { useState } from 'react'
import Form from '../../components/Form'
const Home = () => {
    const [data, setData] = useState(formData)
    const [edit, setEditData]= useState();
  return (
    <div>
       <FilterTable setData={setData} data={data} setEditData={setEditData} edit={edit}/>
    </div>
  )
}

export default Home