import React, { useState } from 'react';
import LoginModal from './LoginModal';

const App: React.FC = () => {
    const [modalVisibled, setModalVisibled] = useState(false)
    return <div>
        <a href='#/detail'>go to detail</a>
        <LoginModal visibled={modalVisibled}></LoginModal>
    </div>;
}

export default App