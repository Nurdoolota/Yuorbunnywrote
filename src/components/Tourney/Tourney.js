import React, { Component } from 'react'
import './Tourney.scss'
import { GiTrophy } from 'react-icons/gi'

export default function Tourney(){
    return (
        <div className='tourney'>
            <GiTrophy className='tourney__icon' />
            <div className='tourney__about'>Учавствуйте в турнирах PROF CHESS</div>
            <a  href='#' className='tourney__link'>Перейти</a>
        </div>
    )
}