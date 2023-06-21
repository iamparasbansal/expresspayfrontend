import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import axiosFetch from '../utils/axiosFetch';


const Home = () => {

    const [userName, setUserName] = useState('');
    const user = useSelector(selectUser);

    useEffect(() => {
        const userHomePage = async () => {
            if (user) {
                try {
                    const res = await axiosFetch.get(`getdata`, {
                    })
                    setUserName(res.data.name);
                } catch (err) {
                    console.log("eroor received")
                    console.log(err);
                }
            }
        }
        userHomePage();
    }, []);

    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                    <h1>{user ? userName : ''}</h1>
                    <h2> {user ? 'Happy, to see you back' : 'To ExpressPay'}</h2>
                </div>
            </div>

        </>
    )
};

export default Home;


