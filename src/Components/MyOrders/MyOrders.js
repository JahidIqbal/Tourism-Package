
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

    return (

        <div className="container mb-4">
            <div>
                <table className="table table-bordered "  >
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">city</th>
                        </tr>
                    </thead>


                    {
                        myOrder?.map((pd) =>

                            <tbody>
                                <tr>
                                    <td>{pd?.name}</td>
                                    <td>{pd?.email}</td>
                                    <td>{pd?.Address}</td>
                                    <button onClick={() => handleDelete(pd._id)} className="btn bg-danger rounded-2">Delete</button>
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
