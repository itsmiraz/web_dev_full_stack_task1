import React from 'react';
import Button from 'react-bootstrap/Button';
import AddCatagoryModal from '../../Components/AddCatagoryModal/AddCatagoryModal';

const Settings = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <h1>Settings</h1>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <AddCatagoryModal

                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default Settings;