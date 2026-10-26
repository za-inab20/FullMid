
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Container, FormGroup, Label } from "reactstrap";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addBook } from "../slice/bookSlice.jsx";

const validationSchema = yup.object({
    bookName: yup
        .string()
        .trim()
        .required("Book name cannot be blank"),

    category: yup
        .string()
        .required("Please select a category!"),

    price: yup
        .number()
        .typeError("Price must be a number")
        .positive("Price must be positive")
        .required("Price cannot be blank"),
});

export default function AddBook() {
    const dispatch = useDispatch();

    const initialValues = {
        bookName: "",
        category: "",
        price: "",
    };

    const handleSubmit = (values, { resetForm }) => {
        const newBook = {
            ISBN: Date.now(),
            bookName: values.bookName.trim(),
            category: values.category,
            price: Number(values.price),
        };

        dispatch(addBook(newBook));
        resetForm();
    };

    return (
        <Container className="col-5 bg-light p-3">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <FormGroup>
                        <Label for="bookName">Book Name</Label>
                        <Field
                            id="bookName"
                            name="bookName"
                            type="text"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="bookName"
                            component="p"
                            className="text-danger"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="category">Category</Label>
                        <Field
                            id="category"
                            name="category"
                            as="select"
                            className="form-control"
                        >
                            <option value="">Select category</option>
                            <option value="English">English</option>
                            <option value="Science">Science</option>
                            <option value="Math">Math</option>
                        </Field>
                        <ErrorMessage
                            name="category"
                            component="p"
                            className="text-danger"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="price">Book Price</Label>
                        <Field
                            id="price"
                            name="price"
                            type="number"
                            min="0"
                            step="any"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="price"
                            component="p"
                            className="text-danger"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Button color="primary" type="submit">
                            Add Book
                        </Button>
                    </FormGroup>
                </Form>
            </Formik>
        </Container>
    );
}
