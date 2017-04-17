import React ,{Component} from "react";
import FixSlide from "../components/FixSlide"

import "../../css/style.less";
import "../../css/fontello.less";

class Resume extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return (
        <div className="container">
        <div className="sidebar">
            <div className="title">
                <img src={require("../../img/head.png")} />
                <h1>个人简历</h1>
                <p>"人生苦短 码不停蹄"</p>
            </div>
            <ul className="side-info">
                <li className="someRight">
                    <dt><i className="icon-bookmark"></i>Contact. 联系方式</dt>
                    <dd><i className="icon-mail-alt"></i>邮箱: <a href="mailto:zhongink@gmail.com" target="_blank">zhongink@gmail.com</a></dd>
                    <dd><i className="icon-wechat"></i>微信: a819833483</dd>
                    <dd><i className="icon-qq"></i>QQ: <a href="http://wpa.qq.com/msgrd?v=3&uin=306578968&site=qq&menu=yes" target="_blank">819833483</a></dd>
                </li>
                <li className="someRight">
                    <dt><i className="icon-bookmark"></i>Application. 应聘岗位</dt>
                    <dd>前端实习生</dd>
                </li>
                <li className="skill">
                    <dt><i className="icon-bookmark"></i>Tech. 技能点</dt>
                    <dd>
                        <div className="skill-name">JavaScript</div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar" style={{width: '80%'}}></div>
                        </div>
                    </dd>
                    <dd>
                        <div className="skill-name">HTML5</div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar" style={{width: '75%'}}></div>
                        </div>
                    </dd>
                    <dd>
                        <div className="skill-name">CSS3</div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar" style={{width: '75%'}}></div>
                        </div>    
                    </dd>
                    <dd>
                        <div className="skill-name">React</div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar" style={{width: '73%'}}></div>
                        </div>
                    </dd>
                    <dd>
                        <div className="skill-name">Vue</div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar" style={{width: '70%'}}></div>
                        </div>
                    </dd>
                    <dd>
                        <div className="skill-name">ReactNative</div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar" style={{width: '65%'}}></div>
                        </div>
                    </dd>
                    <dd>
                        <div className="skill-name">C/C++</div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar" style={{width: '60%'}}></div>
                        </div>
                    </dd>
                    <dd>
                        <div className="skill-name">nodejs</div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar" style={{width: '75%'}}></div>
                        </div>
                    </dd>
                    
                </li>
            </ul>
            <div className="note">
                <p>我是一个充满活力、对前端由衷热爱、善于发现问题的大三应届生。</p>
                <p>我目前正在寻找前端工程师实习岗位，希望借此机会为贵司献上我的一点绵薄之力，快招我到碗里来吧！</p>
            </div>
        </div>
        <div className="main">
            <ul className="main-info">
                <li className="someRight">
                    <dt><i className="icon-bookmark"></i>基本信息</dt>
                    <dd><span>个人信息:</span> zhong/ 男 / 20岁</dd>
                    <dd><span>个人主页:</span> <a href="https://zhongsink.github.io" target="_blank">zhongsink.github.io</a></dd>
                    <dd><span> GitHub:</span> <a href="https://www.github.com/zhongsink" target="_blank">www.github.com/zhongsink</a></dd>
                    <dd><span>大学期间 自学前端和NodeJS开发</span></dd>
                </li>
                <li>
                    <dt><i className="icon-bookmark"></i>项目经历</dt>
                    <h3>个人主页（2017.4 - 至今）</h3>
                    <ul className="exp">
                        <li>
                            <div className="circle"></div>
                            <h4>项目介绍：</h4>
                            <p>个人主页，包括主页，博客，简历 ，关于 等 页面，前端使用 react /redux/ react-router MVVM架构 flex+rem 布局。后端使用了nodejs/mongodb对其功能实现。</p>
                            <p>本站自主设计目前正在逐步实现中。</p>
                        </li>
                    </ul>
                    <h3>扫码寻物（微信公众号应用）</h3>
                    <ul className="exp">
                        <li>
                            <div className="circle"></div>
                            <h4>
                                项目介绍：
                            </h4>
                            <p>基于ThinkPHP的WEB应用</p>
                            <p>我负责 前端页面的编写， 使用html5/css3/javascript  rem布局适配移动端。</p>
                        </li>
                        
                    </ul>
                </li>
                <li>
                    <dt><i className="icon-bookmark"></i>技能清单</dt>
                    <h3>前端</h3>
                    <ul className="exp">
                        <li>
                            <div className="circle"></div>
                            <h4>HTML5 / CSS3</h4>
                            <p>能够编写语义化的 HTML，模块化的 CSS，完成较复杂的布局</p>
                            <p>熟悉 Less CSS预处理和后处理方法、工具</p>
                        </li>
                        <li>
                            <div className="circle"></div>
                            <h4>JavaScript</h4>
                            <p>熟悉原生Javascript，能脱离前端框架编码</p>
                            <p>能运用模块化、面向对象的方式编程</p>
                            <p>了解 Vue jQuery React 及 ReactNative 的使用</p>
                        </li>
                        <li>
                            <div className="circle"></div>
                            <h4>其他</h4>
                            <p>熟悉 Webpack 前端自动化工具</p>
                            <p>了解前端安全、性能优化方面的一些知识</p>
                        </li>
                    </ul>
                    <h3>后端</h3>
                    <ul className="exp">
                        <li>
                            <div className="circle"></div>
                            <h4>环境</h4>
                            <p>熟悉 Linux 开发环境，两年 Linux 日常使用经验</p>
                            <p>了解 Nginx web服务器</p>
                        </li>
                        <li>
                            <div className="circle"></div>
                            <h4>语言</h4>
                            <p>了解 nodejs,会构建基本服务</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        </div>
        )

    }

}

export default Resume;