
import { useDispatch, useSelector } from "react-redux";
import { Container, Table } from "reactstrap";
import { deleteBook } from "../slice/bookSlice.jsx";

export default function ViewBook() {
    const myBook = useSelector((state) => state.mybook.items);
    const dispatch = useDispatch();

    const handleDelete = (bCode) => {
        dispatch(deleteBook(bCode));
    };

    return (
        <Container className="col-10">
            <Table striped bordered hover responsive>
                <thead className="table-dark">
                    <tr>
                        <th>ISBN</th>
                        <th>NAME</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>

                <tbody>
                    {myBook.map((book) => (
                        <tr key={book.ISBN}>
                            <td>{book.ISBN}</td>
                            <td>{book.bookName}</td>
                            <td>{book.category}</td>
                            <td>{book.price}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(book.ISBN)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
