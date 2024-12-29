/* eslint-disable react/prop-types */
import userApi from '../../api/user'
import { dateWriteParser } from '../../utils/dateParser'
export default function CreateSection({ onClose, user, onType, set }) {
    async function onUpdate(e) {
        e.preventDefault()
        const date = dateWriteParser(new Date())
        try {
            set.setLoading(true);
            const data = await userApi.updateOrCreateUser(user, date, user?._id,)
            set.setUsers((prev) => {
                const newData = [...prev];
                const idx = newData.findIndex((el) => el._id == data._id);
                if (idx != -1) {
                    newData.splice(idx, 1, data);
                    return newData
                } else {
                    newData.push(data)
                    return newData
                }
            })
            onClose()
            set.setLoading(false);
        } catch (error) {
            console.log(error);

            return set.setError(true)
        }
    }
    return (
        <div className="overlay">
            <div onClick={onClose} className="backdrop"></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Edit User/Add User</h2>
                        <button onClick={onClose} className="btn close">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={onUpdate}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input value={user.firstName} onChange={onType} id="firstName" name="firstName" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input value={user.lastName} onChange={onType} id="lastName" name="lastName" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-envelope"></i></span>
                                    <input value={user.email} onChange={onType} id="email" name="email" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                    <input value={user.phoneNumber} onChange={onType} id="phoneNumber" name="phoneNumber" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-image"></i></span>
                                <input value={user.imageUrl} onChange={onType} id="imageUrl" name="imageUrl" type="text" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input value={user.address?.country} onChange={onType} id="country" name="country" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-city"></i></span>
                                    <input value={user.address?.city} onChange={onType} id="city" name="city" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input value={user.address?.street} onChange={onType} id="street" name="street" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetNumber">Street number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-house-chimney"></i></span>
                                    <input value={user.address?.streetNumber} onChange={onType} id="streetNumber" name="streetNumber" type="text" />
                                </div>
                            </div>
                        </div>
                        <div id="form-actions">
                            <button onClick={onUpdate} id="action-save" className="btn" type="submit">Save</button>
                            <button onClick={onClose} id="action-cancel" className="btn" type="button">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
