import { formData } from '@/components/Form/formData'
import Table from '@/components/Table'
import { useState } from 'react'
import Form from '../../components/Form'
const Home = () => {
    const [data, setData] = useState(formData)
  return (
    <div>
        <Form setData={setData} data={data}/>
        <Table/>
    </div>
  )
}

export default Home