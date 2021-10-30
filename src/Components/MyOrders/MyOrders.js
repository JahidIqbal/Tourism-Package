
import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';

const MyOrders = () => {
    const { user } = useAuth()
    const mail = user.email

    const [myOrder, setMyOrder] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                const myOne = data.filter(my => my?.email === mail)
                setMyOrder(myOne);
            })
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/orders/${id}`;
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

    return (

        <div className="container mt-4">
            <div>
                <table className="table table-bordered "  >
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">city</th>
                            <th scope="col">Button</th>
                        </tr>
                    </thead>
                    {
                        myOrder?.map((pd) =>
                            <tbody>
                                <tr>
                                    <td>{pd?.name}</td>
                                    <td>{pd?.email}</td>
                                    <td>{pd?.Address}</td>
                                    <td> <button onClick={() => handleDelete(pd._id)} className="btn bg-danger p-2 rounded-2">Delete</button></td>
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


