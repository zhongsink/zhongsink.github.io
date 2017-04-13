import React from 'react';
// import { connect } from 'react-redux';


class root extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="flex">
                <header className="page" >
                    <a className="link" href="/">
                        <img className="selfie" src={require("../../img/head.png")} />
                    </a>
                    <h2>ZEALE</h2>
                    <p>人生苦短 码不停蹄</p>
                    <div className="social-link">
                        <a href="/" data-title="weibo">
                            <svg t="1492065866228" className="icon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1653" xmlnsXlink="http://www.w3.org/1999/xlink" width="200" height="200">
                                <defs>
                                    <style type="text/css"></style>
                                </defs>
                                <path d="M782.019584 574.951424c-21.4016 0-38.832128-17.550336-38.832128-39.328768 0-21.659648 17.429504-39.209984 38.832128-39.209984 21.403648 0 38.832128 17.550336 38.832128 39.209984C820.851712 557.401088 803.423232 574.951424 782.019584 574.951424M582.272 574.951424c-21.403648 0-38.832128-17.550336-38.832128-39.328768 0-21.659648 17.42848-39.209984 38.832128-39.209984 21.4016 0 38.83008 17.550336 38.83008 39.209984C621.101056 557.401088 603.6736 574.951424 582.272 574.951424M960.365568 630.821888c0-127.06816-113.128448-231.105536-256.507904-240.074752-6.708224-0.365568-13.42976-0.61952-20.150272-0.61952-152.836096 0-276.670464 107.780096-276.670464 240.694272 0 20.041728 2.868224 39.451648 8.215552 57.998336 29.740032 104.925184 138.638336 182.710272 268.453888 182.710272 44.178432 0 85.866496-8.97024 122.825728-25.024512l62.1056 42.440704c0 0 16.553984 11.570176 14.938112-10.707968l-17.550336-66.456576C923.904 767.724544 960.365568 703.004672 960.365568 630.821888" p-id="1654"></path>
                                <path d="M260.059136 360.131584c-21.413888 0-38.832128-17.538048-38.832128-39.195648 0-21.78048 17.41824-39.329792 38.832128-39.329792 21.52448 0 38.832128 17.550336 38.832128 39.329792C298.891264 342.593536 281.583616 360.131584 260.059136 360.131584M504.607744 281.606144c21.415936 0 38.832128 17.550336 38.832128 39.329792 0 21.6576-17.416192 39.195648-38.832128 39.195648-21.52448 0-38.832128-17.538048-38.832128-39.195648C465.775616 299.155456 483.083264 281.606144 504.607744 281.606144M683.707392 370.085888c5.967872 0 11.813888 0.254976 17.672192 0.509952-22.777856-134.54336-155.945984-237.850624-316.864512-237.850624-176.850944 0-320.2304 124.845056-320.2304 278.664192 0 85.756928 44.556288 162.412544 114.501632 213.567488l-23.652352 89.234432c0 0-8.082432 29.6192 22.534144 16.310272l88.236032-60.246016c36.717568 12.821504 76.667904 19.919872 118.60992 19.919872 3.6096 0 7.08608-0.254976 10.573824-0.254976-5.103616-19.045376-7.839744-38.832128-7.839744-59.116544C387.249152 487.078912 520.285184 370.085888 683.707392 370.085888" p-id="1655"></path>
                            </svg>                       
                        </a>
                        <a href="/" data-title="weibo">
                             <svg t="1492065866228" className="icon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1653" xmlnsXlink="http://www.w3.org/1999/xlink" width="200" height="200">
                                <defs>
                                    <style type="text/css"></style>
                                </defs>
                                <path d="M782.019584 574.951424c-21.4016 0-38.832128-17.550336-38.832128-39.328768 0-21.659648 17.429504-39.209984 38.832128-39.209984 21.403648 0 38.832128 17.550336 38.832128 39.209984C820.851712 557.401088 803.423232 574.951424 782.019584 574.951424M582.272 574.951424c-21.403648 0-38.832128-17.550336-38.832128-39.328768 0-21.659648 17.42848-39.209984 38.832128-39.209984 21.4016 0 38.83008 17.550336 38.83008 39.209984C621.101056 557.401088 603.6736 574.951424 582.272 574.951424M960.365568 630.821888c0-127.06816-113.128448-231.105536-256.507904-240.074752-6.708224-0.365568-13.42976-0.61952-20.150272-0.61952-152.836096 0-276.670464 107.780096-276.670464 240.694272 0 20.041728 2.868224 39.451648 8.215552 57.998336 29.740032 104.925184 138.638336 182.710272 268.453888 182.710272 44.178432 0 85.866496-8.97024 122.825728-25.024512l62.1056 42.440704c0 0 16.553984 11.570176 14.938112-10.707968l-17.550336-66.456576C923.904 767.724544 960.365568 703.004672 960.365568 630.821888" p-id="1654"></path>
                                <path d="M260.059136 360.131584c-21.413888 0-38.832128-17.538048-38.832128-39.195648 0-21.78048 17.41824-39.329792 38.832128-39.329792 21.52448 0 38.832128 17.550336 38.832128 39.329792C298.891264 342.593536 281.583616 360.131584 260.059136 360.131584M504.607744 281.606144c21.415936 0 38.832128 17.550336 38.832128 39.329792 0 21.6576-17.416192 39.195648-38.832128 39.195648-21.52448 0-38.832128-17.538048-38.832128-39.195648C465.775616 299.155456 483.083264 281.606144 504.607744 281.606144M683.707392 370.085888c5.967872 0 11.813888 0.254976 17.672192 0.509952-22.777856-134.54336-155.945984-237.850624-316.864512-237.850624-176.850944 0-320.2304 124.845056-320.2304 278.664192 0 85.756928 44.556288 162.412544 114.501632 213.567488l-23.652352 89.234432c0 0-8.082432 29.6192 22.534144 16.310272l88.236032-60.246016c36.717568 12.821504 76.667904 19.919872 118.60992 19.919872 3.6096 0 7.08608-0.254976 10.573824-0.254976-5.103616-19.045376-7.839744-38.832128-7.839744-59.116544C387.249152 487.078912 520.285184 370.085888 683.707392 370.085888" p-id="1655"></path>
                            </svg>                          
                        </a>
                        <a href="/" data-title="weibo">
                             <svg t="1492065866228" className="icon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1653" xmlnsXlink="http://www.w3.org/1999/xlink" width="200" height="200">
                                <defs>
                                    <style type="text/css"></style>
                                </defs>
                                <path d="M782.019584 574.951424c-21.4016 0-38.832128-17.550336-38.832128-39.328768 0-21.659648 17.429504-39.209984 38.832128-39.209984 21.403648 0 38.832128 17.550336 38.832128 39.209984C820.851712 557.401088 803.423232 574.951424 782.019584 574.951424M582.272 574.951424c-21.403648 0-38.832128-17.550336-38.832128-39.328768 0-21.659648 17.42848-39.209984 38.832128-39.209984 21.4016 0 38.83008 17.550336 38.83008 39.209984C621.101056 557.401088 603.6736 574.951424 582.272 574.951424M960.365568 630.821888c0-127.06816-113.128448-231.105536-256.507904-240.074752-6.708224-0.365568-13.42976-0.61952-20.150272-0.61952-152.836096 0-276.670464 107.780096-276.670464 240.694272 0 20.041728 2.868224 39.451648 8.215552 57.998336 29.740032 104.925184 138.638336 182.710272 268.453888 182.710272 44.178432 0 85.866496-8.97024 122.825728-25.024512l62.1056 42.440704c0 0 16.553984 11.570176 14.938112-10.707968l-17.550336-66.456576C923.904 767.724544 960.365568 703.004672 960.365568 630.821888" p-id="1654"></path>
                                <path d="M260.059136 360.131584c-21.413888 0-38.832128-17.538048-38.832128-39.195648 0-21.78048 17.41824-39.329792 38.832128-39.329792 21.52448 0 38.832128 17.550336 38.832128 39.329792C298.891264 342.593536 281.583616 360.131584 260.059136 360.131584M504.607744 281.606144c21.415936 0 38.832128 17.550336 38.832128 39.329792 0 21.6576-17.416192 39.195648-38.832128 39.195648-21.52448 0-38.832128-17.538048-38.832128-39.195648C465.775616 299.155456 483.083264 281.606144 504.607744 281.606144M683.707392 370.085888c5.967872 0 11.813888 0.254976 17.672192 0.509952-22.777856-134.54336-155.945984-237.850624-316.864512-237.850624-176.850944 0-320.2304 124.845056-320.2304 278.664192 0 85.756928 44.556288 162.412544 114.501632 213.567488l-23.652352 89.234432c0 0-8.082432 29.6192 22.534144 16.310272l88.236032-60.246016c36.717568 12.821504 76.667904 19.919872 118.60992 19.919872 3.6096 0 7.08608-0.254976 10.573824-0.254976-5.103616-19.045376-7.839744-38.832128-7.839744-59.116544C387.249152 487.078912 520.285184 370.085888 683.707392 370.085888" p-id="1655"></path>
                            </svg>                         
                        </a>
                        <a href="/" data-title="weibo">
                             <svg t="1492065866228" className="icon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1653" xmlnsXlink="http://www.w3.org/1999/xlink" width="200" height="200">
                                <defs>
                                    <style type="text/css"></style>
                                </defs>
                                <path d="M782.019584 574.951424c-21.4016 0-38.832128-17.550336-38.832128-39.328768 0-21.659648 17.429504-39.209984 38.832128-39.209984 21.403648 0 38.832128 17.550336 38.832128 39.209984C820.851712 557.401088 803.423232 574.951424 782.019584 574.951424M582.272 574.951424c-21.403648 0-38.832128-17.550336-38.832128-39.328768 0-21.659648 17.42848-39.209984 38.832128-39.209984 21.4016 0 38.83008 17.550336 38.83008 39.209984C621.101056 557.401088 603.6736 574.951424 582.272 574.951424M960.365568 630.821888c0-127.06816-113.128448-231.105536-256.507904-240.074752-6.708224-0.365568-13.42976-0.61952-20.150272-0.61952-152.836096 0-276.670464 107.780096-276.670464 240.694272 0 20.041728 2.868224 39.451648 8.215552 57.998336 29.740032 104.925184 138.638336 182.710272 268.453888 182.710272 44.178432 0 85.866496-8.97024 122.825728-25.024512l62.1056 42.440704c0 0 16.553984 11.570176 14.938112-10.707968l-17.550336-66.456576C923.904 767.724544 960.365568 703.004672 960.365568 630.821888" p-id="1654"></path>
                                <path d="M260.059136 360.131584c-21.413888 0-38.832128-17.538048-38.832128-39.195648 0-21.78048 17.41824-39.329792 38.832128-39.329792 21.52448 0 38.832128 17.550336 38.832128 39.329792C298.891264 342.593536 281.583616 360.131584 260.059136 360.131584M504.607744 281.606144c21.415936 0 38.832128 17.550336 38.832128 39.329792 0 21.6576-17.416192 39.195648-38.832128 39.195648-21.52448 0-38.832128-17.538048-38.832128-39.195648C465.775616 299.155456 483.083264 281.606144 504.607744 281.606144M683.707392 370.085888c5.967872 0 11.813888 0.254976 17.672192 0.509952-22.777856-134.54336-155.945984-237.850624-316.864512-237.850624-176.850944 0-320.2304 124.845056-320.2304 278.664192 0 85.756928 44.556288 162.412544 114.501632 213.567488l-23.652352 89.234432c0 0-8.082432 29.6192 22.534144 16.310272l88.236032-60.246016c36.717568 12.821504 76.667904 19.919872 118.60992 19.919872 3.6096 0 7.08608-0.254976 10.573824-0.254976-5.103616-19.045376-7.839744-38.832128-7.839744-59.116544C387.249152 487.078912 520.285184 370.085888 683.707392 370.085888" p-id="1655"></path>
                            </svg>                         
                        </a>
                        <a href="/" data-title="weibo">
                             <svg t="1492065866228" className="icon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1653" xmlnsXlink="http://www.w3.org/1999/xlink" width="200" height="200">
                                <defs>
                                    <style type="text/css"></style>
                                </defs>
                                <path d="M782.019584 574.951424c-21.4016 0-38.832128-17.550336-38.832128-39.328768 0-21.659648 17.429504-39.209984 38.832128-39.209984 21.403648 0 38.832128 17.550336 38.832128 39.209984C820.851712 557.401088 803.423232 574.951424 782.019584 574.951424M582.272 574.951424c-21.403648 0-38.832128-17.550336-38.832128-39.328768 0-21.659648 17.42848-39.209984 38.832128-39.209984 21.4016 0 38.83008 17.550336 38.83008 39.209984C621.101056 557.401088 603.6736 574.951424 582.272 574.951424M960.365568 630.821888c0-127.06816-113.128448-231.105536-256.507904-240.074752-6.708224-0.365568-13.42976-0.61952-20.150272-0.61952-152.836096 0-276.670464 107.780096-276.670464 240.694272 0 20.041728 2.868224 39.451648 8.215552 57.998336 29.740032 104.925184 138.638336 182.710272 268.453888 182.710272 44.178432 0 85.866496-8.97024 122.825728-25.024512l62.1056 42.440704c0 0 16.553984 11.570176 14.938112-10.707968l-17.550336-66.456576C923.904 767.724544 960.365568 703.004672 960.365568 630.821888" p-id="1654"></path>
                                <path d="M260.059136 360.131584c-21.413888 0-38.832128-17.538048-38.832128-39.195648 0-21.78048 17.41824-39.329792 38.832128-39.329792 21.52448 0 38.832128 17.550336 38.832128 39.329792C298.891264 342.593536 281.583616 360.131584 260.059136 360.131584M504.607744 281.606144c21.415936 0 38.832128 17.550336 38.832128 39.329792 0 21.6576-17.416192 39.195648-38.832128 39.195648-21.52448 0-38.832128-17.538048-38.832128-39.195648C465.775616 299.155456 483.083264 281.606144 504.607744 281.606144M683.707392 370.085888c5.967872 0 11.813888 0.254976 17.672192 0.509952-22.777856-134.54336-155.945984-237.850624-316.864512-237.850624-176.850944 0-320.2304 124.845056-320.2304 278.664192 0 85.756928 44.556288 162.412544 114.501632 213.567488l-23.652352 89.234432c0 0-8.082432 29.6192 22.534144 16.310272l88.236032-60.246016c36.717568 12.821504 76.667904 19.919872 118.60992 19.919872 3.6096 0 7.08608-0.254976 10.573824-0.254976-5.103616-19.045376-7.839744-38.832128-7.839744-59.116544C387.249152 487.078912 520.285184 370.085888 683.707392 370.085888" p-id="1655"></path>
                            </svg>                         
                        </a>
                    </div>
                </header>
            </div>

            /*<div className ="">
                <h1> hello world</h1>
                    <div className="avatar">
                    <img src="./src/img/aa.png"/>
                </div>
             </div>*/
        )
       
    }


}

export default root;