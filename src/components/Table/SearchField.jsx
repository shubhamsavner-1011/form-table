import { IconPath } from '@/constants/iconPath';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const SearchField = ({val, setValue, data, setData}) => {
  
  // const handleSearch = () => {
  // }

  

  
  return (
    <div>
        <InputGroup className="mb-3">
        <Form.Control
          autoFocus="off"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          value={val}
          onChange={(e)=> setValue(e.target.value)}
        />
        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={IconPath.search} /></InputGroup.Text>
      </InputGroup>

    </div>
  )
}

export default SearchField