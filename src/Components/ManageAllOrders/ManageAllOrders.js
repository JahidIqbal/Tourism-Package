import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/manageAllOrders')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [])
    const handleRemove = id => {
        const url = `http://localhost:5000/manageAllOrders/${id}`;
        const isReady = window.confirm('are you sure you want to delete this order?');
        if (isReady) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Order deleted succssfully')
                        const remaining = manageOrders.filter(order => order._id !== id);
                        setManageOrders(remaining);

                    }
                })
        }
    }



    return (
        <div className="container mt-4">
            <table className="table table-light">
                <thead>
                    <tr>
                        <th scope="col">Country</th>
                        <th scope="col">Email</th>
                        <th scope="col">Approve</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                {
                    manageOrders.map((pd) =>

                        <tbody>
                            <tr>
                                <td>{pd?.name}</td>
                                <td>{pd?.email}</td>
                                <td><button type="button" className="btn btn-info btn-sm" >Approve</button></td>
                                <td>
                                    <button type="button" className="btn btn-danger btn-sm " onClick={() => handleRemove(pd._id)}>Remove</button>
                                </td>
                            </tr>
                        </tbody>

                    )

                }
            </table>
        </div>
    );
};

export default ManageAllOrders;