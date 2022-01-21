import React from "react";
import Parser from 'rss-parser';
import HomePerson1 from "../assets/images/home-person-1.svg";
import HomePerson2 from "../assets/images/home-person-2.svg";
import BackgroundVector from "../assets/images/background-vector.svg";
import { Link } from 'react-router-dom'

export default function homepage() {
    
    const parser = new Parser();
    const [feed, setFeed] = React.useState([]);

    React.useEffect(() => {
        getFeed();
    }, []);
    
    async function getFeed() {
        try{
            let feedInfo = [];
            let thisFeed = await parser.parseURL('https://cors-anywhere.herokuapp.com/medium.com/feed/@kikiapp');
            for(let i=0; i<3; i++){
                let item = thisFeed.items[i];
                let story = {
                    title: item["title"],
                    link: item["link"],
                    image: item["content:encoded"].match(/<img([\s\S]+?)\/>/)[0]
                }
                feedInfo.push(story);
            }
            setFeed(feedInfo);
        } catch(error) {
            console.log(error);
        }
    }
    
    let blogPosts = feed.map(buildBlogPosts);

    function buildBlogPosts(blogPost){
        return ( 
            <div key={blogPost.title} className="blog-post col-12 col-lg-4 p-3">
                <a href={blogPost.link} target='_blank' rel="noreferrer">
                <div dangerouslySetInnerHTML={{__html: blogPost.image}} />
                <h3 className="text-center my-3">{blogPost.title}</h3> 
                </a>
            </div>
        )
    }

    return (
    <div className="homepage">
        <div className="bg-placeholder" style={{backgroundImage: `url(${BackgroundVector})` }}></div>
        <div className="row align-items-center px-5 pb-5">
            <div className="col-md-6 text-center text-md-left pl-md-5"> 
                <h2>Get a fresh take on what you didn&apos;t learn in sex-ed.</h2>
                <Link className='nav-link' to='/MailinglistForm'>
                    <button className="mailinglistbtn">Join our mailing list</button>
                </Link>
            </div>
            <div className="col-md-6 home-people">
                <div className="row pr-md-5">
                    <div className="col-6 home-person-1">
                        <img className="img-fluid" src={HomePerson1} alt="Person standing with lab coat and a bun." />
                    </div>
                    <div className="col-6 home-person-2">
                        <img className ="img-fluid" src={HomePerson2} alt="Person with blue pants and jacket sitting on a cube." />
                    </div>
                </div>
            </div>
        </div>
        <div className="row p-5 blog-post-container">
            <div className="col">
                <h3 className="text-center">Our Latest Posts...</h3>
                <div className="row pt-5">{blogPosts}</div>
            </div>
        </div>
    </div>
    )
}