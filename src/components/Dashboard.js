import React, { useState, useEffect } from 'react';

const Dashboard = (props) => {
    const gitDashboard = props.dashboard.map(dashboard=>{
        let location = {
            pathname:"/dashboard",
            state: dashboard
        }
        return (<Link key={'in_'+dashboard.name}to={location}>{dashboard.name}</Link>)
    })
    return(<div className="Dashboard">
        <h1>Dashboard</h1>
        <div className="dashboard-wrap">
        {props.dashboard.length ? Dashboard : <p>...Loading</p>}
        </div>
        
    </div>)
}


export default Dashboard;