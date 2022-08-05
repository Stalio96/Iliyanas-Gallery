import { useNavigate } from 'react-router-dom';
import { useAuthContext } from "../../contexts/AuthContext";

import * as photoService from '../../services/photoService';

const Create = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const onCreateHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get('name');
        const date = formData.get('date');
        const img = formData.get('image');
        const description = formData.get('description');
        const album = formData.get('album');
        const ownerId = user._id;

        photoService.create({
            name,
            date,
            img,
            description,
            album,
            ownerId
        })
            .then(result => {
                navigate('/gallery');
            });
    }

    return (
        <form className="create" onSubmit={onCreateHandler} method="POST">
            <fieldset>
                <legend>Edit photo</legend>
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input name="name" type="text" placeholder="" />
                    </span>
                </div>
                <div className="date">
                    <label htmlFor="date">Date</label>
                    <span className="input">
                        <input name="date" type="text" placeholder="" />
                    </span>
                </div>
                <div className="image">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input name="image" type="text" placeholder="" />
                    </span>
                </div>
                <div className="description">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <input name="description" type="text" placeholder="" />
                    </span>
                </div>
                <div className="album">
                    <label htmlFor="album">Album</label>
                    <span className="input">
                        <input name="album" type="text" placeholder="" />
                    </span>
                </div>

                <input type="submit" value="Edit" />
            </fieldset>
        </form>
    );
}

export default Create;