import { IconPath } from "@/constants/iconPath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import DrawerModal from "../Model";
import MenuDropdown from "./Dropdown";
import SearchField from "./SearchField";
import Show from "./show";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";
import DataNotFound from '../../assests/Images/datafound.jpg';
import Image from "next/image";
const FilterTable = ({ data, setData, edit, setEditData }) => {
  const [open, setOpen] = useState(false);
  const [showPassword, setpassword] = useState(false);
  const [val, setValue] = useState();
  const [sorting, setSorting] = useState(false);
  const handleOpen = () => setOpen(true);

  const searchInput = useMemo(() => {
    const search = val && new RegExp(`${val}`, "gi");
    return data?.filter(
      (item) => !search || search.test(item.email) || search.test(item.about)
    );
  }, [data, val]);

  const handleSort = () => {
    setSorting(!sorting)
    const newData = data.sort((a, b) => {
      if (a.email < b.email) {
        return -1;
      }
      if (a.email > b.email) {
        return 1;
      }
      return 0;
    });
    setData([...newData]);
  };
const resetSorting = () => {
  const resetData = data.sort((a, b) => {
    if (a.email > b.email) {
      return -1;
    }
    if (a.email < b.email) {
      return 1;
    }
    return 0;
  });
  setData([...resetData]);
  setSorting(!sorting)
}
  return (
    <div>
      <Container>
        <Row
          style={{
            border: "1px solid #dee2e6",
            padding: "30px 10px",
            borderRadius: "5px",
            marginTop: "30px",
          }}
        >
          <Col xs="12" md="4" lg="4">
            <SearchField setValue={setValue} val={val} />
          </Col>
          <Col xs="12" md="4" lg="8" style={{ textAlign: "end" }}>
            <Button
              variant="outlined"
              onClick={handleOpen}
              style={{ borderColor: "black", color: "black" }}
            >
              Add User
            </Button>
          </Col>

          <Col xs="12" md="4" lg="4">
            <DrawerModal
              open={open}
              setOpen={setOpen}
              setData={setData}
              data={data}
              edit={edit}
              setEditData={setEditData}
            />
          </Col>
          <Col xs="12" md="10" lg="12">
            <div style={{ height: "320px", overflowY: "scroll" }}>
              <Table
                striped
                bordered
                hover
                responsive
                style={{ textAlign: "center" }}
              >
                <thead>
                  <tr>
                    <th>id</th>
                    <th>
                      Email{" "}
                      {sorting === true ? (
                        <NorthOutlinedIcon
                          style={{
                            fontSize: "16px",
                            cursor: "pointer",
                            marginBottom: "3px",
                          }}
                          onClick={handleSort}
                        />
                      ) : (
                        <SouthOutlinedIcon
                          style={{
                            fontSize: "16px",
                            cursor: "pointer",
                            marginBottom: "3px",
                          }}
                          onClick={resetSorting}
                        />
                      )}
                    </th>
                    <th>Password</th>
                    <th>About Us</th>
                    <th>Created Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {searchInput.length > 0 ? (
                    searchInput?.map(
                      ({ about, email, password, createdDate, id }, index) => {
                        return (
                          <>
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{email}</td>
                              <td>
                                {showPassword ? (
                                  <div>
                                    <p>
                                      {password}
                                      <span style={{ marginLeft: "8px" }}>
                                        <FontAwesomeIcon
                                          icon={IconPath.unlock}
                                          onClick={() =>
                                            setpassword(index,!showPassword)
                                          }
                                        />
                                      </span>
                                    </p>
                                  </div>
                                ) : (
                                  <div>
                                    <p>
                                      XXXX{" "}
                                      <span style={{ marginLeft: "8px" }}>
                                        <FontAwesomeIcon
                                          icon={IconPath.lock}
                                          onClick={() =>
                                            setpassword(!showPassword)
                                          }
                                        />
                                      </span>
                                    </p>
                                  </div>
                                )}
                              </td>
                              <td>
                                <Show about={about} />
                              </td>
                              <td>{createdDate}</td>
                              <td>
                                <MenuDropdown
                                  id={id}
                                  data={data}
                                  setData={setData}
                                  setEditData={setEditData}
                                  setOpen={setOpen}
                                />
                              </td>
                            </tr>
                          </>
                        );
                      }
                    )
                  ) : (
                    <tr>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "20px 0",
                          color: "gray",
                        }}
                        colSpan={6}
                      >
                       <Image src={DataNotFound} width={250} height={200} alt='no data'/>
                       <h4 style={{textAlign:'center',margin:'10px 0'}}>No Data Found</h4>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FilterTable;
