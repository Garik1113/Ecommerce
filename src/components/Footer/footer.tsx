import React from 'react';
import { Link } from 'react-router-dom';
import classes from './footer.scss';

const sittings = [
    {
        title: "Account",
        subSittings: [
            {
                title: "Sign in",
                url: "/signin"
            },
            {
                title: "Register",
                url: "/signup"
            },
        ]
    },
    {
        title: "About Us",
        subSittings: [
            {
                title: "Our Story",
                url: "/story"
            }
        ]
    },
    {
        title: "Help",
        subSittings: [
            {
                title: "Live Chat",
                url: "/chat"
            },
            {
                title: "Contact Us",
                url: "/contact"
            },
        ]
    },
]

const Footer:React.FC = () => {
    return (
        <footer className={classes.footer}>
           <div className={classes.sittings} 
                style={{    
                    display:"grid", 
                    gridTemplateColumns: 'repeat(' + sittings.length + ", " + '1fr)',
                    alignItems: "baseline"
                }}
            >
                {
                    sittings.map((sitting, index) => (
                        <div className={classes.sitting} key={index}>
                            <b>{sitting.title}</b>
                            <ul>
                                {    
                                    sitting.subSittings.map((sub, index) => (
                                        <Link to={sub.url} key={index}><li>{sub.title}</li></Link> 
                                    )) 
                                }
                            </ul>
                        </div>
                        
                    ))
                }
           </div>
        </footer>
    )
}


export default Footer;