import React, { Component } from 'react'
import './ProfileGamer.scss'
import { FaChessKnight } from 'react-icons/fa';

export default class ProfileGamer extends Component {
    render() {
        return (
            <div className='profile'>
                <div className='profile__img'>
                    <img src='https://avatars.mds.yandex.net/i?id=83ddc007e675bab73d435d6a0a7eacbef5e25746-9182174-images-thumbs&n=13' />
                </div>
                <div className='profile__info'>
                    <div className='profile__info-header'>
                        <img className='chess-img' src='https://avatars.mds.yandex.net/i?id=dca3ce5406174f7b143b49630fa6e27455fafb9c-8392873-images-thumbs&n=13' />
                        <div className='gamer__container'>
                            <div className='gamer__name'>Antooon</div>
                            <div className='gamer__about'>
                                <img className='gamer__from' src='https://avatars.mds.yandex.net/i?id=50874bb6ff4a6b4078e31c89dcc89c1dead52868-4896902-images-thumbs&n=13' />
                                <div className='gamer__rating'>4356</div>
                                <div className='gamer__time-zone'>GM</div>
                            </div>
                        
                        </div>
                        <div className='network'></div>
                    </div>
                    <div className='profile__info-footer'>
                        <div className='time'>45:34</div>
                        <div className='shape-color'>
                            <FaChessKnight/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}