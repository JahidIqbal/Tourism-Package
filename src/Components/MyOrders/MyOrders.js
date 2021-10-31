
import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';

const MyOrders = () => {
    const { user } = useAuth()
    const mail = user.email

    const [myOrder, setMyOrder] = useState([])
    useEffect(() => {
        fetch('https://scary-beast-34499.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                const myOne = data.filter(my => my?.email === mail)
                setMyOrder(myOne);
            })
    }, [])

    // Delete
    const handleDelete = id => {
        const url = `https://scary-beast-34499.herokuapp.com/orders/${id}`;
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
                        const remaining = myOrder.filter(order => order._id !== id);
                        setMyOrder(remaining);

                    }
                })
        }
    }

    // pending
    const handlePending = id => {
        const url = `https://scary-beast-34499.herokuapp.com/orders/${id}`;
        const isReady = window.confirm('are you sure you Approved this order?');
        if (isReady) {
            fetch(url, {
                method: 'POST'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Order approved succssfully')
                        const remaining = myOrder.filter(order => order._id !== id);
                        setMyOrder(remaining);

                    }
                })
        }
    }





    return (

        <div className="container mb-4">
            <div>
                <table className="table table-bordered "  >
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">city</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>


                    {
                        myOrder?.map((pd) =>

                            <tbody>
                                <tr>
                                    <td>{pd?.name}</td>
                                    <td>{pd?.email}</td>
                                    <td>{pd?.Address}</td>

                                    <td><button onClick={() => handlePending(pd._id)} type="button" className="btn btn-info btn-sm" >Pending</button>

                                        <button onClick={() => handleDelete(pd._id)} className="btn btn-danger btn-sm mx-2">Delete</button>

                                    </td>


                                </tr>
                            </tbody>

                        )

                    }




                </table>

            </div>

        </div>

    );
};

export default MyOrders;
