import React, { useState, useEffect, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Modal, Button, Row, Col, Container } from "react-bootstrap";
function Crud() {
	const emptyData = [
		{ id: 1, name: "Mike", age: 38, isActive: 1 },
		{ id: 2, name: "John", age: 43, isActive: 0 },
		{ id: 3, name: "Mark", age: 90, isActive: 0 },
		{ id: 4, name: "Wosi", age: 12, isActive: 1 },
		{ id: 5, name: "Bingo", age: 22, isActive: 1 },
	];
	const [data, setData] = useState([]);
	const [show, setShow] = useState(false);

	//form STATE
	const [age, setAge] = useState("");
	const [name, setName] = useState("");
	const [id, setId] = useState("");
	const [isActive, setIsActive] = useState(0);

	const [editName, setEditName] = useState("");
	const [editAge, setEditAge] = useState("");
	const [editID, setEditID] = useState("");
	const [editIsActive, setEditIsActive] = useState(0);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	useEffect(() => {
		setData(emptyData);
	}, []);
	const handleEdit = (id) => {
		handleShow();
		alert(id);
	};
	const handleDelete = (id) => {
		if (window.confirm("Are you sure?") == true) {
			alert(id);
		}
	};
	const handleUpdate = () => {};

	return (
		<Fragment>
			<Container>
				<Row>
					<Col>
						<input
							type="text"
							placeholder="Enter Name"
							id=""
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Col>
					<Col>
						<input
							type="text"
							placeholder="Enter Age"
							id=""
							value={age}
							onChange={(e) => setAge(e.target.value)}
						/>
					</Col>
					<Col>
						<input
							type="checkbox"
							placeholder="isActive"
							id="active"
							value={isActive === 1 ? true : false}
							onChange={(e) => setIsActive(e.target.value)}
						/>
						<label htmlFor="active">Is Active</label>
					</Col>
					<Col>
						<button className="btn btn-primary">Submit</button>
					</Col>
				</Row>
			</Container>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Age</th>
						<th>Acive</th>
					</tr>
				</thead>
				<tbody>
					{data && data.length > 0 ? (
						data.map((user, index) => {
							return (
								<tr key={index + user.name}>
									<td>{user.id}</td>
									<td>{user.name}</td>
									<td>{user.age}</td>
									<td>{user.isActive ? "yes" : "no"}</td>
									<td colSpan={2}>
										<button
											className="btn btn-primary"
											onClick={() => handleEdit(user.id)}>
											Edit
										</button>{" "}
										&nbsp;
										<button
											className="btn btn-danger"
											onClick={() => handleDelete(user.id)}>
											Delete
										</button>
									</td>
								</tr>
							);
						})
					) : (
						<div>
							<button className="btn btn-warning">No Data</button>
						</div>
					)}
				</tbody>
			</Table>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit user</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col>
							<input
								type="text"
								placeholder="Enter Name"
								id=""
								value={editName}
								onChange={(e) => setEditName(e.target.value)}
							/>
						</Col>
						<Col>
							<input
								type="text"
								placeholder="Enter Age"
								id=""
								value={editAge}
								onChange={(e) => setEditAge(e.target.value)}
							/>
						</Col>
						<Col>
							<input
								type="checkbox"
								placeholder="isActive"
								id="active"
								checked={editIsActive === 1 ? true : false}
								value={editIsActive}
								onChange={(e) => setEditIsActive(e.target.value)}
							/>
							<label htmlFor="active">Is Active</label>
						</Col>
						<Col>
							<button className="btn btn-primary" onClick={handleUpdate}>
								Submit
							</button>
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleUpdate}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
}

export default Crud;
