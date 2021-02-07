import React from 'react';
import './Page.css';
import {Button} from '../../Button';
import { Link } from 'react-router-dom';

const Page = ({  
    topLine,headline,description,buttonLabel,img,alt,
    topLineTwo,headlineTwo,descriptionTwo,buttonLabelTwo,imgTwo,altTwo,}) => {
    return (
        <div className='page'>
            <div className='page_container'>
                <h1>Works With Your </h1>
                <h1>Revenue Management Stack</h1>
                <div className='page_para'>
                    <p>Managing sales, payments, customer experience or your books:</p>
                    <p>if it affects your revenue cycle, Chargebee works with it.</p>
                </div>
            </div>
            <img src='https://webstatic.chargebee.com/assets/web/351/images/home/lemon/revenue-management.svg' alt='' />
            
            
            <div className="page_">
                <div className='page_row'>
                    <div className='box'>
                    <div className="header">
                        <h3 className='topline'>{topLine}</h3>
                        <h2 className='headline'>{headline}</h2>
                    </div>
                    <div className='body'>

                        <img src={img} alt={alt} className='img' />
                        <p className='description'>{description}</p>
                    </div>
                    <div className='footer'>
                        <Link to='/learnmore'>
                            <Button>{buttonLabel}</Button>
                        </Link>
                    </div>
                    </div>
                    <div className='box'>
                    <div className="header">
                        <h3 className='topline'>{topLineTwo}</h3>
                        <h2 className='headline'>{headlineTwo}</h2>
                    </div>
                    <div className='body'>

                        <img src={imgTwo} alt={altTwo} className='img' />
                        <p className='description'>{descriptionTwo}</p>
                    </div>
                    <div className='footer'>
                        <Link to='/learnmore'>
                            <Button>{buttonLabelTwo}</Button>
                        </Link>
                    </div>
                    </div>
                </div>
                <div className='page_row'>

                </div>
            </div>
        </div>
    )
}

export default Page
