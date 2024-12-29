import { useEffect, useState } from "react";

import SearchSection from "../search/SearchSection";
import TableRow from "./TableRow";
import Spinner from "../spinner/Spinner";
import user from "../../api/user";
import ErrorFetch from "./ErrorFetch";
import NoUsers from "../user/NoUsers";
import PaginationSection from "./PaginationSection";
import CreateSection from "../user/CreateSection";
import DeleteSection from "../user/DeleteSection";
import DetailsSection from "../user/DetailsSection";

export default function TableSection() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [modals, setModals] = useState({
        edit: false,
        delete: false,
        info: false,
        create: false,
        user: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            createdAt: '',
            updatedAt: '',
            imageUrl: '',
            address: {
                country: '',
                city: '',
                street: '',
                streetNumber: '',
            }
        }
    })
    useEffect(() => {
        (async function () {
            setLoading(true);
            try {
                const data = await user.getUsers();
                setUsers(Object.values(data));
            } catch (err) {
                console.log(err);
                throw setError(true)
            } finally {
                setLoading(false);
            }
        })()
    }, [])

    function onModals(method, userId) {
        if (userId) {
            const user = users.find(el => el._id == userId)
            setModals((prev) => ({ ...prev, [method]: true, user }))
        } else {
            setModals((prev) => ({ ...prev, [method]: true }))
        }

    }
    function closeModals() {
        setModals(prev => Object.keys(prev).reduce((acc, key) => {
            acc[key] = false;
            return acc
        }, {}))
    }
    function onType(e) {
        setModals(prev => {
            const name = e.target.name;
            const value = e.target.value;
            if (name == 'country' || name == 'city' || name == 'street' || name == 'streetNumber') {
                return ({
                    ...prev,
                    user: {
                        ...prev.user,
                        address: {
                            ...prev.user.address, [name]: value,
                        }
                    }
                })
            }
            return ({
                ...prev,
                user: {
                    ...prev.user,
                    [name]: value
                }
            })
        })

    }

    return (
        <section className="card users-container">
            <SearchSection />
            {loading ? <Spinner /> :
                error ? <ErrorFetch /> : users.length == 0 ? <NoUsers /> :
                    <div className="table-wrapper">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>
                                        First name<svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="arrow-down"
                                            className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                            ></path>
                                        </svg>
                                    </th>
                                    <th>
                                        Last name<svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="arrow-down"
                                            className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                            ></path>
                                        </svg>
                                    </th>
                                    <th>
                                        Email<svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="arrow-down"
                                            className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                            ></path>
                                        </svg>
                                    </th>
                                    <th>
                                        Phone<svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="arrow-down"
                                            className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                            ></path>
                                        </svg>
                                    </th>
                                    <th>
                                        Created
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="arrow-down"
                                            className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                            ></path>
                                        </svg>
                                    </th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow users={users} onModals={onModals} />
                            </tbody>
                        </table>
                        {modals.edit && <CreateSection set={{ setError, setLoading, setUsers }} user={modals.user} onClose={closeModals} onType={onType} />}
                        {modals.delete && <DeleteSection onClose={closeModals} userId={modals.user._id} set={{ setError, setLoading, setUsers }} />}
                        {modals.info && <DetailsSection onClose={closeModals} user={modals.user} />}
                        {modals.create && <CreateSection set={{ setError, setLoading, setUsers }} user={modals.user} onClose={closeModals} onType={onType} />}
                    </div>}
            <button onClick={() => onModals('create')} className="btn-add btn">Add new user</button>
            <PaginationSection />
        </section>
    )
}