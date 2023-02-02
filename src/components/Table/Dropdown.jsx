import { IconPath } from "@/constants/iconPath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
const MenuDropdown = ({id, data, setData, setEditData, setOpen}) => {

  const handleDelete = (id) => {
    console.log(id, 'id')
    setData(data.filter((item)=> item.id !== id))
  }
  const handleEdit = (id) => {
    setEditData(data?.find((item)=> item.id === id))
    setOpen(true)
  }
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="light">
          <FontAwesomeIcon
            icon={IconPath.ecllipse}
            style={{ fontSize: 30, color: "black" }}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu className="text-center">
          <Dropdown.Item href="#/action-1" onClick={()=>handleEdit(id)}>
            Edit{" "}
            <span>
              <FontAwesomeIcon icon={IconPath.edit} />
            </span>
          </Dropdown.Item>
          <hr />
          <Dropdown.Item href="#/action-2" onClick={() =>handleDelete(id)}>
            Delete
            <span>
              <FontAwesomeIcon icon={IconPath.delete} />
            </span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default MenuDropdown;
