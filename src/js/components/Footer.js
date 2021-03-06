import React,{Component} from "react";


class Footer extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return (
            <footer className="footer">
                    上善若水 © 2017 
                    <a className="rss" target="_blank">
                        <svg t="1492138979509" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1836" xmlnsXlink="http://www.w3.org/1999/xlink" width="200" height="200">
                        <defs>
                            <style type="text/css"></style>
                        </defs>
                        <path d="M265.184 401.488c-55.488-18.16-115.52-27.664-177.328-28.176-15.152-1.648-29.984 3.552-40.688 14.24-19.136 19.104-20.336 49.104-2.64 66.736 4.896 4.864 11.04 8.256 18.784 10.288l1.664 1.664 4.736-0.112c51.648-0.24 100.512 8.144 158.432 27.152 191.12 62.688 318.8 238.56 333.36 458.864l1.04 11.712 1.056-0.176c1.84 6.384 5.088 11.888 9.696 16.464 16.688 16.64 44.976 15.584 62.96-2.336 6.032-6.048 10.368-13.36 12.592-21.328l2.576-0.304-0.464-10.48C639.728 684.432 491.904 475.856 265.184 401.488M82.256 807.712c-37.008 36.848-37.024 96.848-0.048 133.76 36.944 36.8 97.136 36.8 134.112-0.064 36.912-36.864 36.912-96.864-0.032-133.696-36.976-36.864-97.12-36.8-134.048 0M470.64 90.544C352.688 45.552 227.36 24.832 103.44 34.24L96.032 41.632c-32.88 11.952-40.32 54.192-16.96 77.456 5.536 5.568 17.952 11.456 25.888 13.6l0 0 0 0c109.536-8.56 228.336 7.376 332.32 46.992 316.48 120.704 504.912 430.416 448.128 736.384l-2.512 13.488 3.52 0c1.936 8.784 6.336 16.752 12.784 23.264 18.752 18.688 49.088 18.624 67.84 0 5.328-5.344 9.264-11.904 11.424-19.28l1.472 0.112 1.872-9.776C1042.496 577.152 827.584 226.688 470.64 90.544L470.64 90.544 470.64 90.544zM470.64 90.544" p-id="1837"></path>
                    </svg>
                    </a>                     
                    <p className="extra">
                        designed by 上善若水
                    </p>
            </footer>
        )
    }
}


export default Footer;