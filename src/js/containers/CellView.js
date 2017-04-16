import React,{Component} from "react";
import CellView from "../components/CellView";

let array=[
    {
        title: '使用 npm 和 bower 发布插件',
        created_at: '2016-08-10T08:54:33Z',
        hash: "sds34"
    },
    {
        title: '使用 npm 和 bower 发布插件',
        created_at: '2016-08-10T08:54:33Z',
        hash: "sdsd34"
    },
    {
        title: '使用 webpack2 和 NPM Scripts 进行 JavaScript 组件开发',
        created_at: '2016-08-10T08:54:33Z',
        hash: "sdsd34"
    },
    {
        title: '我的 2014',
        created_at: '2016-08-10T08:54:33Z',
        hash: "sdsd34"
    },
    {
        title: '我的 2014',
        created_at: '2016-08-10T08:54:33Z',
        hash: "sdsd34"
    },
    {
        title: '我的 2014',
        created_at: '2016-08-10T08:54:33Z',
        hash: "sdsd34"
    },
     {
        title: '我的 2014',
        created_at: '2016-08-10T08:54:33Z',
        hash: "sdsd34"
    },
    {
        title: '我的 2014',
        created_at: '2016-08-10T08:54:33Z',
        hash: "sdsd34"
    },
    {
        title: '我的 2014',
        created_at: '2016-08-10T08:54:33Z',
        hash: "sdsd34"
    },
    {
        title: '我的 2014',
        created_at: '2016-08-10T08:54:33Z',
        hash: "sdsd34"
    }, {
        title: '我的 2014',
        created_at: '2016-08-10T08:54:33Z',
        hash: "sdsd34"
    },
    {
        title: '我的 2014',
        created_at: '2016-08-10T08:54:33Z',
        hash: "sdsd34"
    },
    {
        title: '我的 2014',
        created_at: '2016-08-10T08:54:33Z',
        hash: "sdsd34"
    },
];
export default class View extends Component{

    constructor(){
        super();
    }

    render(){

        return (
            <div className="Cellist">
                <CellView items={array} />
            </div>
        )
    }

}