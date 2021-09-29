import React from 'react';
import {PageHeader, Divider} from "antd";
import 'antd/dist/antd.css';


export const Header = props => {
    return (
        <>
            <PageHeader
                className="site-page-header"
                title="Назад"
                onBack={() => null}
            />
            <Divider/>
        </>

    )
    ;
};
