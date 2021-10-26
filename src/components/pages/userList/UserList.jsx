import "./UserList.css";
import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "./DummyData";
import { Link } from "react-router-dom";

function UserList() {
  // initial state is the dummy data
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    // look at every item and return those different from id
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 140 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImage" src={params.row.avatar} alt="user" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "email",
      width: 180,
      editable: true,
    },
    {
      field: "status",
      headerName: "status",
      type: "text",
      width: 120,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "transaction",
      type: "number",
      width: 160,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList;
