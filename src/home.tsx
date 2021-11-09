import React, { useState } from 'react';
import LoginModal from './LoginModal';

const Home: React.FC = () => {
    const [modalVisibled, setModalVisibled] = useState(false)
    return <div>
        <a href='#/detail'>go to detail</a>
        <button onClick={() => setModalVisibled(true)}>登陆</button>
        <LoginModal visibled={modalVisibled}></LoginModal>
    </div>;
}

export default Home