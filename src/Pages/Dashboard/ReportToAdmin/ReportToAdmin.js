import { useQuery } from '@tanstack/react-query';
import React from 'react';

import ReportCard from './ReportCard';

const ReportToAdmin = () => {

    const {data:reports= [], refetch}= useQuery({
        queryKey: ['reports'],
        queryFn: async()=>{
            const res = await fetch(`https://car-dealer-server.vercel.app/reporteditems`)
            const data = res.json()
            return data
        }
    })

    const handleDelete = id =>{
        const proceed = window.confirm(`Are you sure to Delete?`)
        if(proceed){
            fetch(`https://car-dealer-server.vercel.app/reporteditems/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                    refetch()
                }
            })
        }
    }
    return (
        <div className='my-10 mx-4'>
            <h2 className='text-center text-3xl font-bold'>Reported Items</h2>
            <div className='w-96 mx-auto'>
                {
                    reports && reports.map(report=><ReportCard handleDelete={handleDelete} key={report._id} report={report}></ReportCard>)
                }
            </div>
        </div>
    );
};

export default ReportToAdmin;